import sys
import json
import logging
from skpy import Skype, SkypeGroupChat

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def kimlik_dogrula(email, sifre):
    try:
        # Skype girişini yaparken tokenFile kullanarak tekrar giriş yerine token ile işlem yapabilirsiniz
        sk = Skype(email, sifre, tokenFile=".skype_token")
        
        # Kişiler listesi
        kişiler = [{"id": k.id, "name": str(k.name)} for k in sk.contacts]
        
        # Gruplar listesi
        gruplar = []
        for chat_id, chat in sk.chats.recent().items():
            if isinstance(chat, SkypeGroupChat):  # Grup sohbetlerini kontrol et
                gruplar.append({"id": chat_id, "name": chat.topic or "Adı Yok"})
        
        return {"success": True, "contacts": kişiler, "groups": gruplar}
    except Exception as e:
        logger.error(f"Kimlik doğrulama hatası: {e}")
        return {"success": False, "error": str(e)}

def main():
    if len(sys.argv) != 3:
        print(json.dumps({"success": False, "error": "Geçersiz argümanlar"}))
        sys.exit(1)

    email = sys.argv[1]
    sifre = sys.argv[2]
    
    sonuc = kimlik_dogrula(email, sifre)
    print(json.dumps(sonuc, ensure_ascii=False))  # Türkçe karakterler için ensure_ascii=False

if __name__ == "__main__":
    main()
