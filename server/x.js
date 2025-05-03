const puppeteer = require('puppeteer');

// Bekleme fonksiyonu
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    const liveIds = new Set();

    // Ağ isteği dinleme
    page.on('response', async (response) => {
      try {
        if (response.status() === 200) { // Sadece başarılı yanıtları işliyoruz
          const text = await response.text();
          const matches = text.match(/live:[a-zA-Z0-9._]+/g);
          if (matches) {
            matches.forEach((id) => liveIds.add(id));
          }
        }
      } catch (err) {
        console.log("Ağ isteği dinlerken hata:", err.message);
      }
    });

    console.log("Skype Web'e gidiliyor...");
    await page.goto('https://web.skype.com/', { waitUntil: 'networkidle0' });
    console.log("Skype Web'e başarıyla ulaşıldı.");

    console.log("E-posta alanı bekleniyor...");
    await page.waitForSelector('input[type="email"]', { timeout: 60000 });
    await page.type('input[type="email"]', 'smmexclusive.2023@gmail.com');
    await page.click('#idSIButton9');
    await wait(3000);

    console.log("Şifre alanı bekleniyor...");
    await page.waitForSelector('input[type="password"]');
    await page.type('input[type="password"]', 'Kartal.1234');
    await page.click('#idSIButton9');
    console.log("Giriş yapıldı...");

    try {
      console.log("Stay signed in ekranı bekleniyor...");
      await page.waitForSelector('input[type="checkbox"]', { timeout: 5000 });
      const staySignedInCheckbox = await page.$('input[type="checkbox"]');
      const isChecked = await page.evaluate(el => el.checked, staySignedInCheckbox);

      if (!isChecked) {
        await staySignedInCheckbox.click();
      }

      await page.waitForSelector('#declineButton', { timeout: 5000 });
      await page.click('#declineButton');
    } catch (e) {
      console.log("Beni hatırla ekranında sorun oluştu:", e.message);
    }

    console.log("Sohbet ekranı bekleniyor...");
    await page.waitForSelector('.conversationListItem', { timeout: 60000 });
    console.log("Sohbet ekranı yüklendi.");

    console.log("Ağ trafiği dinleniyor, 'live:' ID'leri toplanıyor...");
    await wait(20000); // 20 saniye bekle

    console.log("Toplanan 'live:' ID'ler:", Array.from(liveIds));
  } catch (e) {
    console.error("Bir hata oluştu:", e.message);
  } finally {
    console.log("Tarayıcı kapatılıyor...");
    await browser.close();
    console.log("Tarayıcı kapatıldı.");
  }
})();
