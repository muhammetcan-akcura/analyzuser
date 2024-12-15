import sys
import json
import logging
from skpy import Skype

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def mesaj_gonder(email, sifre, alicilar, mesaj):
    try:
        sk = Skype(email, sifre, tokenFile=".skype_token")  # Token file kullanarak yeniden giriş yapılabilir
        
        for alici_id in alicilar:
            kisi = sk.contacts[alici_id]
            kisi.chat.sendMsg(mesaj)
        
        return {"success": True, "message": "Mesajlar gönderildi"}
    except Exception as e:
        logger.error(f"Mesaj gönderme hatası: {e}")
        return {"success": False, "error": str(e)}

def main():
    if len(sys.argv) != 5:
        print(json.dumps({"success": False, "error": "Geçersiz argümanlar"}))
        sys.exit(1)

    email = sys.argv[1]
    sifre = sys.argv[2]
    alicilar = json.loads(sys.argv[3])
    mesaj = sys.argv[4]
    
    sonuc = mesaj_gonder(email, sifre, alicilar, mesaj)
    print(json.dumps(sonuc))

if __name__ == "__main__":
    main()
