const fs = require('fs');

// services.json dosyasını oku
fs.readFile('services.json', 'utf-8', (err, data) => {
  if (err) {
    console.error("Dosya okunurken hata oluştu:", err);
    return;
  }

  // JSON verisini parse et
  const services = JSON.parse(data);
  const failedServices = [];

  // Kontrol işlemi
  services.forEach(service => {
    const { id, name } = service;
    if (!name.includes(id.toString())) {
      failedServices.push(service);
    }
  });

  // Eğer failedServices boş değilse failed.txt'ye yaz
  if (failedServices.length > 0) {
    fs.writeFile('failed.txt', JSON.stringify(failedServices, null, 2), (err) => {
      if (err) {
        console.error("failed.txt dosyasına yazılırken hata oluştu:", err);
      } else {
        console.log("Kontrol tamamlandı, geçmeyenler failed.txt'ye kaydedildi!");
      }
    });
  } else {
    console.log("Tüm ID'ler name içinde geçiyor, failed.txt oluşturulmadı.");
  }
});
