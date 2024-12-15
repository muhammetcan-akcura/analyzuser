import sys
import json
import logging
from skpy import Skype

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def kimlik_dogrula(email, sifre):
    try:
        # Skype girişini yaparken tokenFile kullanarak tekrar giriş yerine token ile işlem yapabilirsiniz
        sk = Skype(email, sifre, tokenFile=".skype_token")
        
        # 'Name' gibi özel nesneleri düz metin olarak alıyoruz
        kişiler = [{"id": k.id, "name": str(k.name)} for k in sk.contacts]
        
        return {"success": True, "contacts": kişiler}
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
    print(json.dumps(sonuc))

if __name__ == "__main__":
    main()
