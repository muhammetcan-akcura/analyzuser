import sys
import json
import logging
import os
import time
from skpy import Skype, SkypeAuthException, SkypeGroupChat
from requests.exceptions import HTTPError

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def temizle_token():
    """
    Mevcut Skype oturum token dosyasını siler.
    """
    try:
        if os.path.exists(".skype_token"):
            os.remove(".skype_token")
        logger.info("Token dosyası temizlendi")
    except Exception as e:
        logger.error(f"Token dosyası temizlenirken hata: {e}")

def get_group_members_fallback(chat, skype_obj):
    """
    Bir SkypeGroupChat nesnesinden üyeleri çekmek için çeşitli
    yöntemleri deneyen 'fallback' fonksiyonu.
    """
    members = []

    # 1) Öncelikle chat.getAllMembers() dene
    try:
        members = chat.getAllMembers()
        if members:
            return members
    except Exception as e:
        logger.error(f"getAllMembers() hata: {e}")
        members = []

    # 2) Hâlâ boşsa, 'chat.members' özelliği varsa onu dene
    try:
        if not members and hasattr(chat, "members") and chat.members:
            members = chat.members
            if members:
                return members
    except Exception as e:
        logger.error(f"chat.members erişim hatası: {e}")

    # 3) Hâlâ boşsa, 'chat.memberIds' üzerinden tek tek contacts'tan çekmeye çalış
    try:
        if not members and hasattr(chat, "memberIds") and chat.memberIds:
            members_temp = []
            for m_id in chat.memberIds:
                contact = skype_obj.contacts.get(m_id)
                if contact:
                    members_temp.append(contact)  # SkypeContact nesnesi
            members = members_temp
    except Exception as e:
        logger.error(f"chat.memberIds erişim hatası: {e}")

    return members

def get_all_groups(sk):
    """
    Skype oturumundan senkronize edilen son sohbetleri (recent) alır.
    Grup (SkypeGroupChat) olanların üyelerini de get_group_members_fallback()
    ile çekmeye çalışır.
    """
    gruplar = []
    try:
        # Sohbet listesini senkronize et
        sk.chats.sync()

        # Senkronize olmuş son sohbetleri al
        chats = sk.chats.recent()

        for chat_id, chat in chats.items():
            try:
                # Sadece SkypeGroupChat olanlar
                if isinstance(chat, SkypeGroupChat):
                    group_info = {
                        "id": chat_id,
                        "name": chat.topic or "Adı Yok",
                        "members": []
                    }

                    # Grup üyelerini fallback ile al
                    members = get_group_members_fallback(chat, sk)

                    # 'members' içerisinde bazen SkypeChatMember, bazen SkypeContact nesneleri olabilir
                    for mem in members:
                        # Eğer bu mem bir SkypeChatMember (getAllMembers() sonucu) ise
                        if hasattr(mem, 'id') and hasattr(mem, 'name'):
                            member_id = mem.id
                            member_name = str(mem.name)
                            member_role = str(getattr(mem, 'role', 'unknown'))
                        # Eğer bu mem bir SkypeContact (memberIds fallback'i) ise
                        elif hasattr(mem, 'id') and hasattr(mem, 'fullName'):
                            member_id = mem.id
                            member_name = mem.fullName or mem.id
                            member_role = "unknown"
                        else:
                            # Her ihtimale karşı
                            member_id = str(mem)
                            member_name = str(mem)
                            member_role = "unknown"

                        group_info["members"].append({
                            "id": member_id,
                            "name": member_name,
                            "role": member_role
                        })

                    gruplar.append(group_info)
            except Exception as e:
                logger.error(f"Grup bilgisi alınırken hata: {chat_id} - {e}")

        time.sleep(1)  # Rate limiting önlemi

    except Exception as e:
        logger.error(f"Gruplar alınırken hata: {e}")

    return gruplar

def kimlik_dogrula(email, sifre):
    """
    Verilen e-posta ve şifre ile Skype'a bağlanır, 
    hem kişi listesini hem de grup (SkypeGroupChat) ve üyeleri döndürür.
    """
    retry_count = 0
    max_retry = 5

    while retry_count < max_retry:
        try:
            temizle_token()
            time.sleep(2)

            # Skype'a giriş
            sk = Skype(email, sifre, tokenFile=".skype_token")

            # Kişiler
            try:
                kişiler = [{"id": c.id, "name": str(c.name)} for c in sk.contacts]
            except Exception as e:
                kişiler = []
                logger.error(f"Kişiler alınırken hata: {e}")

            # Gruplar ve üyelerini çek
            gruplar = get_all_groups(sk)

            return {
                "success": True,
                "contacts": kişiler,
                "groups": gruplar
            }

        except SkypeAuthException as e:
            logger.error(f"Skype kimlik doğrulama hatası: {e}")
            temizle_token()
            return {"success": False, "error": "Kimlik doğrulama başarısız oldu. Lütfen tekrar giriş yapın."}

        except HTTPError as e:
            # Örneğin 429 Rate Limit
            if e.response.status_code == 429:
                logger.warning("Rate limit hatası. 10 saniye bekleniyor...")
                time.sleep(10)
                retry_count += 1
            else:
                logger.error(f"HTTP hatası: {e}")
                return {"success": False, "error": str(e)}

        except Exception as e:
            logger.error(f"Kimlik doğrulama hatası: {e}")
            temizle_token()
            return {"success": False, "error": str(e)}

    return {
        "success": False,
        "error": "Rate limit aşımı veya tekrar deneme hakkı doldu."
    }

def main():
    if len(sys.argv) != 3:
        print(json.dumps({"success": False, "error": "Geçersiz argümanlar"}))
        sys.exit(1)

    email = sys.argv[1]
    sifre = sys.argv[2]

    sonuc = kimlik_dogrula(email, sifre)
    print(json.dumps(sonuc, ensure_ascii=False))

if __name__ == "__main__":
    main()
