import sys
import json
import logging
import time
from skpy import Skype, SkypeChats

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def mesaj_gonder(email, sifre, alicilar, mesaj):
    try:
        sk = Skype(email, sifre, tokenFile=".skype_token")
        basarili_gonderimler = []
        hatalar = []
        
        for alici_id in alicilar:
            try:
                # Önce grup chat olarak dene
                if alici_id.startswith("19:") or alici_id.startswith("8:"):
                    chat = sk.chats[alici_id]
                else:
                    # Grup değilse kişi olarak dene
                    chat = sk.contacts[alici_id].chat
                
                chat.sendMsg(mesaj)
                basarili_gonderimler.append(alici_id)
                logger.info(f"Mesaj başarıyla gönderildi: {alici_id}")
                time.sleep(1)  # Her mesaj arasında 1 saniye bekle
                
            except Exception as e:
                hata_mesaji = str(e)
                logger.error(f"{alici_id} için mesaj gönderme hatası: {hata_mesaji}")
                hatalar.append({"alici": alici_id, "hata": hata_mesaji})
                continue
        
        return {
            "success": True,
            "message": "İşlem tamamlandı",
            "basarili_gonderimler": basarili_gonderimler,
            "hatalar": hatalar
        }
    
    except Exception as e:
        hata_mesaji = str(e)
        logger.error(f"Genel hata: {hata_mesaji}")
        return {
            "success": False,
            "error": hata_mesaji
        }

def main():
    if len(sys.argv) != 5:
        print(json.dumps({
            "success": False,
            "error": "Geçersiz argümanlar"
        }))
        sys.exit(1)

    email = sys.argv[1]
    sifre = sys.argv[2]
    
    try:
        alicilar = json.loads(sys.argv[3])
        if not isinstance(alicilar, list):
            raise ValueError("Alıcılar bir liste olmalı")
    except json.JSONDecodeError as e:
        print(json.dumps({
            "success": False,
            "error": "Alıcılar listesi geçersiz JSON formatında",
            "details": str(e)
        }))
        sys.exit(1)
    
    mesaj = sys.argv[4]
    
    sonuc = mesaj_gonder(email, sifre, alicilar, mesaj)
    print(json.dumps(sonuc, ensure_ascii=False))

if __name__ == "__main__":
    main()