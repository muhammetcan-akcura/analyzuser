const rates = [
    {
        "id": "2807",
        "service_id": "21",
        "service_name": "● 21 - Instagram Gösterim + Erişim (%1) + Profil Ziyareti | Max 1M | Anlık | [Sadece Gönderi Linki]",
        "price": "85.00",
        "percent": "1"
    },
    {
        "id": "10879",
        "service_id": "36",
        "service_name": "🔺 36 - YouTube Abone | Max 20K | %100 Gerçek | 60 Gün Garantili | Günlük 50-100 Hız",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "10765",
        "service_id": "38",
        "service_name": "👍 38 - Youtube Shorts Video Beğeni | Max 200K | 30 Gün Garantili | Günlük 30-50K",
        "price": "56.00",
        "percent": "1"
    },
    {
        "id": "3413",
        "service_id": "51",
        "service_name": "💛 51 - Instagram Oto Beğeni | Max 100K | %100 Türk 🇹🇷 | Saatte 250",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11116",
        "service_id": "53",
        "service_name": "🎥 53 - Instagram Oto Video İzlenme | %100 Türk 🇹🇷 | Saatte 200K Hız",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "3410",
        "service_id": "67",
        "service_name": "💛 67 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 10K | Kaliteli | Hızlı",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "11164",
        "service_id": "145",
        "service_name": "💜 145 - Twitch Global Takipçi | Max 50K | 30 Gün Garantili | Hızlı",
        "price": "61.00",
        "percent": "1"
    },
    {
        "id": "3647",
        "service_id": "159",
        "service_name": "💬 159 - İnstagram Özel Yorum | Max 10K | (Yabancı Hesaplardan İstediğiniz Yorum) | Hızlı",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11381",
        "service_id": "160",
        "service_name": "💬 160 - Instagram Türk Özel Yorum 🇹🇷 | Max 100K | %100 Gerçek Kullanıcılar | Hızlı",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3899",
        "service_id": "178",
        "service_name": "● 178 - Instagram Gösterim + Erişim | Max 100K | Anlık | [Sadece Gönderi Linki]",
        "price": "33.00",
        "percent": "1"
    },
    {
        "id": "2986",
        "service_id": "318",
        "service_name": "🅰️ 318 | Instagram Türk Beğeni | Max 3K | Anlık",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3897",
        "service_id": "349",
        "service_name": "● 349 - Instagram Gösterim | Max 1M | Anlık | [Sadece Gönderi Linki]",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "2806",
        "service_id": "373",
        "service_name": "● 373 - Instagram Profil Ziyareti | Max 1M | Anlık | [Sadece Gönderi Linki]",
        "price": "85.00",
        "percent": "1"
    },
    {
        "id": "3898",
        "service_id": "376",
        "service_name": "● 376 - Instagram Gösterim + Erişim (%1) | Max 1M | Anlık | [Sadece Gönderi Linki]",
        "price": "95.00",
        "percent": "1"
    },
    {
        "id": "3757",
        "service_id": "389",
        "service_name": "💬 389 - İnstagram Özel Yorum | Max 200K | (Yabancı Hesaplardan İstediğiniz Yorum) | Günde 100-200",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3524",
        "service_id": "436",
        "service_name": "💜 436 - Twitch Türk Takipçi | Max 100K | 30 Gün Garantili | Hızlı",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3117",
        "service_id": "449",
        "service_name": "❤️ 449 - 🇹🇷 İnstagram Beğeni [%100 Türk 🇹🇷] [Max 10K] | Geç Başlar",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2871",
        "service_id": "454",
        "service_name": "💙 454 - Instagram Beğeni [Kaliteli Yabancı] [Max 250K] [Hızlı]",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "3034",
        "service_id": "491",
        "service_name": "💚 491 - Instagram Oto Beğeni | Yabancı Bot | Max 300K | Saatte 5-10K",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "2824",
        "service_id": "499",
        "service_name": "🔺 499 - Youtube Canlı Yayın Beğeni | Max 500K | Saatlik 50K Hız | 30 Gün Garanti",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3433",
        "service_id": "519",
        "service_name": "💚 519 - Instagram Oto Beğeni | Aktif Yabancı | Gösterim + Erişim (Keşif) | Max 50K | Saatte 3K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11098",
        "service_id": "520",
        "service_name": "💙 520 - Instagram Yabancı Beğeni | Max 300K | Saatte 3K Hız",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3072",
        "service_id": "528",
        "service_name": "💙 528 - Instagram Yabancı Beğeni | Max 100K | Saatte 1K Hız | 30 Gün Garantili",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "10827",
        "service_id": "569",
        "service_name": "⭐ 569 - Instagram Takipçi | Max 250K | Günde 200",
        "price": "55.00",
        "percent": "1"
    },
    {
        "id": "2800",
        "service_id": "677",
        "service_name": "💙 677 - Instagram Yabancı Beğeni | Max 5K | Yavaş Başlar-Doğal Artar | Saatte 100-200 Arası  | Az Düşüş olabilir ",
        "price": "40.00",
        "percent": "1"
    },
    {
        "id": "3891",
        "service_id": "682",
        "service_name": "◆ 682 - Tiktok Paylaşım | Max 10M | Anlık",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10728",
        "service_id": "708",
        "service_name": "⭐ 708 - İnstagram Takipçi [100% Gerçek] [Maks/5.9K] [0-6 Saat] [65 Gün Refill]",
        "price": "85.00",
        "percent": "1"
    },
    {
        "id": "10904",
        "service_id": "709",
        "service_name": "🔸 709 - SoundCloud Oynatma | Max 15M | 0-1 Saat Başlangıç | Hızlı",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10905",
        "service_id": "798",
        "service_name": "🔸 798 - SoundCloud Oynatma | Max 100M | Başlangıç 12 Saat | Günlük 1M Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10906",
        "service_id": "799",
        "service_name": "🔸 799 - SoundCloud Oynatma | Max 1T | Başlangıç 12 Saat | Günlük 3M Hız\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10907",
        "service_id": "800",
        "service_name": "🔸 800 - SoundCloud Oynatma | Max 1T | Başlangıç 12 Saat | Günlük 3M Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10908",
        "service_id": "801",
        "service_name": "🔸 801 - SoundCloud Oynatma | Max 1M | 0-1 Saat Başlangıç | Günde 50K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10909",
        "service_id": "802",
        "service_name": "🔸 802 - SoundCloud Oynatma | Amerikan Hesaplar 🇺🇸 | Max 1M | 0-12 Saat Başlangıç | Günde 10K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10910",
        "service_id": "803",
        "service_name": "🔸 803 - SoundCloud Oynatma | Max 10M | 0-1 Saat Başlangıç | Günde 100K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10896",
        "service_id": "805",
        "service_name": "🔸 805 - Soundcloud Beğeni | Max 10K | 0-1 Saat Başlangıç | Günde 5K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10915",
        "service_id": "806",
        "service_name": "🔸 806 - SoundCloud Beğeni | Max 2K | 0-1 Saat Başlangıç | Günde 2K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10916",
        "service_id": "807",
        "service_name": "🔸 807 - SoundCloud Beğeni | Max 1M | 0-1 Saat Başlangıç | Günde 10K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10912",
        "service_id": "808",
        "service_name": "🔸 808 - SoundCloud Takipçi | Amerikan Hesaplar 🇺🇸 | Max 10K | 30 Gün Garantili",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10913",
        "service_id": "809",
        "service_name": "🔸 809 - SoundCloud Takipçi | Max 50K | 60 Gün Garantili | 0-1 Saat Başlangıç | Günde 5K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10914",
        "service_id": "810",
        "service_name": "🔸 810 - SoundCloud Takipçi | Max 1M | 30 Gün Garantili | 0-1 Saat Başlangıç | Günde 5-10K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10919",
        "service_id": "811",
        "service_name": "🔸 811 - SoundCloud Paylaşım | Amerikan Hesaplar 🇺🇸 | Max 10K | Başlangıç 0-12 Saat | 30 Gün Garantili | Günde 1-2K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10918",
        "service_id": "812",
        "service_name": "🔸 812 - SoundCloud Paylaşım | Max 10K | 30 Gün Garantili | Günde 5-10K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10921",
        "service_id": "815",
        "service_name": "🔸 815 - SoundCloud Track Rastgele Yorum | Max 10K | Kaliteli | 0-1 Saat Başlangıç | Günde 500-1K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10920",
        "service_id": "816",
        "service_name": "🔸 816 - SoundCloud Rastgele Yorum | Max 1M | 0-1 Saat Başlangıç | Günde 3-5K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3568",
        "service_id": "829",
        "service_name": "🔹 829 - Facebook 600.000 Dakika İzlenme | Video Süresi 3 Saat 5 Dakika Üzeri Olmalı",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3188",
        "service_id": "830",
        "service_name": "◆ 830 - TikTok Beğeni | Max 100K | Kaliteli Kullanıcılar | 30 Gün Garantili | Anlık Başlar | Günde 20K",
        "price": "72.00",
        "percent": "1"
    },
    {
        "id": "3186",
        "service_id": "838",
        "service_name": "◆ 838 - TikTok Beğeni | Max 50K | Gerçek Kullanıcılar | 30 Gün Garantili | Anlık Başlar | Günde 10K",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "10911",
        "service_id": "846",
        "service_name": "🔸 846 - SoundCloud Takipçi | Max 15K | 30 Gün Garantili",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10917",
        "service_id": "851",
        "service_name": "🔸 851 - SoundCloud Beğeni | Max 40K | 0-1 Saat Başlangıç | Günde 5K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3122",
        "service_id": "858",
        "service_name": "❤️ 858 - Instagram Beğeni | %90 Türk 🇹🇷 | Max 5K | Geç Başlar Hızlı Atar",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3845",
        "service_id": "861",
        "service_name": "⭐ 861 -  Instagram Çekilişle Takipçi | Max 5K | %100 Türk Organik 🇹🇷 | Başlama Süresi: 24 Saat | Günde 5K 🚀",
        "price": "81.00",
        "percent": "1"
    },
    {
        "id": "3116",
        "service_id": "905",
        "service_name": "❤️ 905 - 🇹🇷 Instagram Aktif Türk Beğeni + Gösterim + Erişim (Keşif) | Max 100K | %100 Gerçek Türk 🇹🇷 | Geç Başlar",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11062",
        "service_id": "915",
        "service_name": "💙 915 - Instagram Yabancı Beğeni | Max 500K | Saatte 20K Hız",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3033",
        "service_id": "938",
        "service_name": "💛 938 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 3K | Hızlı",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2794",
        "service_id": "940",
        "service_name": "💙 940 - Instagram Beğeni | Global Hesaplar | Max 300K | Anlık",
        "price": "68.00",
        "percent": "1"
    },
    {
        "id": "3191",
        "service_id": "942",
        "service_name": "◆ 942 - Tiktok Beğeni [Gerçek Kullanıcı] [Max 50K] [30 Gün Garantili] Başlangıç 0-30 Dakika - Günde 3-5K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2836",
        "service_id": "979",
        "service_name": "💙 979 - İnstagram Aktif Yabancı Beğeni + Gösterim + Erişim (Keşif) | Max 40K | %100 Gerçek | Anlık Başlar 🔥 ",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "11420",
        "service_id": "1000",
        "service_name": "1000 - Instagram Takipçi | Max 1M | Garantisiz | Saatte 500-1K Hız",
        "price": "63.00",
        "percent": "1"
    },
    {
        "id": "11421",
        "service_id": "1015",
        "service_name": "⭐ 1015 - Instagram Takipçi | Max 500K | Garantisiz | Günde 100K Hız",
        "price": "69.00",
        "percent": "1"
    },
    {
        "id": "2914",
        "service_id": "1048",
        "service_name": "💙 1048 - Instagram Reel Beğeni | Max 30K | Yabancı | Hızlı",
        "price": "40.00",
        "percent": "1"
    },
    {
        "id": "10729",
        "service_id": "1081",
        "service_name": "⭐ 1081 - İnstagram Takipçi [100% Gerçek] [Maks/7.5K] [0-6 Saat] [65 Gün Refill]",
        "price": "85.00",
        "percent": "1"
    },
    {
        "id": "10730",
        "service_id": "1082",
        "service_name": "⭐ 1082 - İnstagram Takipçi [100% Gerçek] [Maks/8.4K] [0-6 Saat] [65 Gün Refill]",
        "price": "85.00",
        "percent": "1"
    },
    {
        "id": "10731",
        "service_id": "1083",
        "service_name": "⭐ 1083 - İnstagram Takipçi [100% Gerçek] [Maks/9.1K] [0-6 Saat] [65 Gün Refill]",
        "price": "85.00",
        "percent": "1"
    },
    {
        "id": "10732",
        "service_id": "1084",
        "service_name": "⭐ 1084 - İnstagram Takipçi [100% Gerçek] [Maks/11 K] [0-6 Saat] [65 Gün Refill]",
        "price": "85.00",
        "percent": "1"
    },
    {
        "id": "2838",
        "service_id": "1106",
        "service_name": "🎁 1106 - Instagram Çekilişle Takipçi | Max 3K | %100 Türk Organik 🇹🇷 | Günlük İşleme Alınır",
        "price": "83.00",
        "percent": "1"
    },
    {
        "id": "3092",
        "service_id": "1113",
        "service_name": "⭐ 1113 - Instagram Takipçi | Max 50K | 30 Gün Garantili | Günde 20K | Yüksek Kaliteli - Ajanslar İçin Özel ",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3379",
        "service_id": "1118",
        "service_name": "● 1118 - Instagram Paylaşım | Max 5M | Anlık [Sadece Gönderi Linki]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3059",
        "service_id": "1125",
        "service_name": "🅰️ 1125 - Instagram Beğeni [Max 200K]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "2911",
        "service_id": "1127",
        "service_name": "❤️ 1127 - 🇹🇷 İnstagram Beğeni [%90 Türk 🇹🇷] [Max 5K] | Geç Başlar",
        "price": "96.00",
        "percent": "1"
    },
    {
        "id": "3060",
        "service_id": "1129",
        "service_name": "🔺 1129 - Youtube İzlenme | RAV™ - Gerçek İzlenme | Max 10M | 30 Gün Garantili  | 0-6 Saat Başlangıç | Günde 500K Hız",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "3062",
        "service_id": "1149",
        "service_name": "🔺 1149 - Youtube Video İzlenme | RAV™ - Gerçek İzlenme | Max 500K | 90 Gün Garantili | 0-10 Dakika Başlangıç | Günde 3K Hız",
        "price": "74.00",
        "percent": "1"
    },
    {
        "id": "10963",
        "service_id": "1150",
        "service_name": "⭐ 1150 - Instagram Takipçi | Max 40K | %80 Türk 🇹🇷 | Anlık Başlar | 30 Gün Telafili",
        "price": "85.00",
        "percent": "1"
    },
    {
        "id": "3071",
        "service_id": "1151",
        "service_name": "💙 1151 - Instagram Yabancı Bot Beğeni | Max 250K | Yabancı Kullanıcılar | Hepsi Düşebilir | Hızlı Başlar | Saatte 5K",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "2870",
        "service_id": "1152",
        "service_name": "❤️ 1152 - 🇹🇷 İnstagram Beğeni [%90 Türk 🇹🇷] [Max 10K] | Geç Başlar",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "2793",
        "service_id": "1190",
        "service_name": "❤️ 1190 -  Instagram Türk Beğeni 🇹🇷 | Maksimum 10K | Geç Başlar",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "10735",
        "service_id": "1192",
        "service_name": "💬 1192 - Instagram  %100 Gerçek Erkek Yorum [Özel] [Max 100] ",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3123",
        "service_id": "1193",
        "service_name": "❤️ 1193 - Instagram Beğeni | %80 Türk 🇹🇷 | Max 5K | Hızlı",
        "price": "53.00",
        "percent": "1"
    },
    {
        "id": "11051",
        "service_id": "1221",
        "service_name": "◆ 1221 - TikTok Beğeni | %100 Aktif Türk | Max 200",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3648",
        "service_id": "1249",
        "service_name": "💬 1249 - Instagram Emoji Yorum [Gerçek Karışık Kullanıcılar] [Hızlı] [Max 1K]",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2913",
        "service_id": "1254",
        "service_name": "💬 1254 - Instagram  %100 Gerçek Kadın Yorum [Özel] [Max 300]",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3832",
        "service_id": "1258",
        "service_name": "◆ 1258 - TikTok İzlenme | Max 1M | Normal",
        "price": "42.00",
        "percent": "1"
    },
    {
        "id": "3669",
        "service_id": "1266",
        "service_name": "🎥 1266 - Instagram Video İzlenme | Keşfet Etkili | Max 100M | %100 Türk 🇹🇷 | Saatte 50-100K",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11428",
        "service_id": "1273",
        "service_name": "🎥 1273 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Keşfet Etkili",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "3607",
        "service_id": "1341",
        "service_name": "🌀 1341 - Telegram Grup Üyesi | Sadece Grup |  Max 50K | Düşüş Yok | Hızlı",
        "price": "82.00",
        "percent": "1"
    },
    {
        "id": "3135",
        "service_id": "1342",
        "service_name": "🌀 1342 - Telegram Kanal Üyeleri | Max 50K | 60 Gün Garantili | Düşüş Az",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3623",
        "service_id": "1357",
        "service_name": "🌀 1357 - Telegram Otomatik Post Görüntülenme | Max 15K | Paylaşılacak 5 Post | Hızlı",
        "price": "95.00",
        "percent": "1"
    },
    {
        "id": "3624",
        "service_id": "1358",
        "service_name": "🌀 1358 - Telegram Otomatik Post Görüntülenme | Max 15K | Paylaşılacak 10 Post | Hızlı",
        "price": "95.00",
        "percent": "1"
    },
    {
        "id": "3626",
        "service_id": "1360",
        "service_name": "🌀 1360 - Telegram Otomatik Post Görüntülenme | Max 15K | Paylaşılacak 50 Post | Hızlı",
        "price": "95.00",
        "percent": "1"
    },
    {
        "id": "3627",
        "service_id": "1361",
        "service_name": "🌀 1361 - Telegram Otomatik Post Görüntülenme | Max 15K | Paylaşılacak 100 Post | Hızlı",
        "price": "95.00",
        "percent": "1"
    },
    {
        "id": "3628",
        "service_id": "1362",
        "service_name": "🌀 1362 - Telegram Otomatik Post Görüntülenme | Max 15K | Paylaşılacak 500 Post | Hızlı",
        "price": "95.00",
        "percent": "1"
    },
    {
        "id": "3629",
        "service_id": "1363",
        "service_name": "🌀 1363 - Telegram Otomatik Post Görüntülenme | Max 15K | Paylaşılacak 1000 Post | Hızlı",
        "price": "95.00",
        "percent": "1"
    },
    {
        "id": "3441",
        "service_id": "1393",
        "service_name": "❤️ 1393 - 🇹🇷 İnstagram Beğeni [%90 Türk 🇹🇷] [Max 5K] | Geç Başlar ",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3139",
        "service_id": "1394",
        "service_name": "🔹 1394 - Facebook Sayfa Beğeni + Takipçi | Max 1M | Günlük 3-5K Hız | 30 Gün Garantili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3070",
        "service_id": "1396",
        "service_name": "💙 1396 - Instagram Yabancı Bot Beğeni | Max 300K | Yabancı Kullanıcılar | Hepsi Düşebilir | Hızlı Başlar | Saatte 3K",
        "price": "59.00",
        "percent": "1"
    },
    {
        "id": "3398",
        "service_id": "1397",
        "service_name": "⭐ 1397 - Instagram Takipçi | Max 25K | %90 Türk 🇹🇷 | İptal Butonlu ⛔",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3080",
        "service_id": "1398",
        "service_name": "● 1398 - Instagram Kaydet [Max 10K] [Hızlı]",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3536",
        "service_id": "1400",
        "service_name": "🔹 1400 - Facebook Video/Reels İzlenme | Max 1M | Günlük 10K Hız | 3 Saniye İzlenme Süresi",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3537",
        "service_id": "1401",
        "service_name": "🔹 1401 - Facebook Video/Reels İzlenme | Max 1M | Günlük 10K Hız | 10 Saniye İzlenme Süresi",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3538",
        "service_id": "1402",
        "service_name": "🔹 1402 - Facebook Video/Reels İzlenme | Max 1M | Günlük 10K Hız | 15 Saniye İzlenme Süresi",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3539",
        "service_id": "1403",
        "service_name": "🔹 1403 - Facebook Video/Reels İzlenme | Max 1M | Günlük 10K Hız | 30 Saniye İzlenme Süresi",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3540",
        "service_id": "1404",
        "service_name": "🔹 1404 - Facebook Video/Reels İzlenme | Max 1M | Günlük 10K Hız | 1 Dakika İzlenme Süresi",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3541",
        "service_id": "1405",
        "service_name": "🔹 1405 - Facebook Video/Reels İzlenme | Max 1M | Günlük 10K Hız | 3 Dakika İzlenme Süresi",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3542",
        "service_id": "1406",
        "service_name": "🔹 1406 - Facebook Video/Reels İzlenme | Max 1M | Günlük 10K Hız | 6 Dakika İzlenme Süresi",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3543",
        "service_id": "1407",
        "service_name": "🔹 1407 - Facebook Video/Reels İzlenme | Max 1M | Günlük 10K Hız | 10 Dakika İzlenme Süresi",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3901",
        "service_id": "1423",
        "service_name": "● 1423 - Instagram Gösterim + Erişim | Max 100K | Anlık | [Sadece Gönderi Linki]",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3902",
        "service_id": "1424",
        "service_name": "● 1424 -  Instagram Gösterim + Erişim + Profil Ziyareti | Max 100K | Anlık | [Sadece Gönderi Linki]",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3360",
        "service_id": "1434",
        "service_name": "💠 1434 - Twitter Video İzlenme | Max 5M | Hızlı",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3359",
        "service_id": "1435",
        "service_name": "💠 1435 - Twitter Video İzlenme | Max 200M | Anlık Başlar",
        "price": "82.00",
        "percent": "1"
    },
    {
        "id": "3347",
        "service_id": "1436",
        "service_name": "💠 1436 - Twitter Tweet Görüntülenmeleri | Max 100M | Anlık",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3350",
        "service_id": "1437",
        "service_name": "💠 1437 - Twitter Tweet Görüntülenmeleri | Max 100M | Hızlı",
        "price": "55.00",
        "percent": "1"
    },
    {
        "id": "3353",
        "service_id": "1438",
        "service_name": "💠 1438 - Twitter Hashtag Tıklaması | Max 1M | Hızlı",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3357",
        "service_id": "1439",
        "service_name": "💠 1439 - Twitter Anket Oylaması | Max 1M | Normal",
        "price": "85.00",
        "percent": "1"
    },
    {
        "id": "10818",
        "service_id": "1442",
        "service_name": "🎥 1442 - Instagram Video İzlenme | Keşfet Etkili | Max 100M | %100 Türk 🇹🇷",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3440",
        "service_id": "1448",
        "service_name": "❤️ 1448  - 🇹🇷 Instagram Türk Beğeni | Max 20K | 0-1 Saat Başlangıç | Saatte 200 Hız",
        "price": "95.00",
        "percent": "1"
    },
    {
        "id": "11091",
        "service_id": "1453",
        "service_name": "1453 ~ Instagram Yorum Beğeni | Max 2K | Yabancı Kullanıcılar | Doğal Artış",
        "price": "84.00",
        "percent": "1"
    },
    {
        "id": "3176",
        "service_id": "1465",
        "service_name": "◆ 1465 -  TikTok Beğeni | Max 50K | Anlık Başlar | Günde 30-50K Hız",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10880",
        "service_id": "1471",
        "service_name": "🔺 1471 - YouTube Abone | Max 30K | 60 Gün Garantili | Günde 400-500 Hız",
        "price": "49.00",
        "percent": "1"
    },
    {
        "id": "10854",
        "service_id": "1503",
        "service_name": "⭐ 1503 - Instagram Takipçi | Max 5M | Yabancı Gerçek Kullanıcılar | Hızlı Başlar | Saatte 500-1K",
        "price": "74.00",
        "percent": "1"
    },
    {
        "id": "3125",
        "service_id": "1549",
        "service_name": "❤️ 1549 - Instagram Türk Beğeni 🇹🇷 | Maksimum 5K | Saatte 250-500 Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2985",
        "service_id": "1559",
        "service_name": "💙 1559 - Instagram Global Beğeni | Max 300K | Anlık",
        "price": "59.00",
        "percent": "1"
    },
    {
        "id": "2829",
        "service_id": "1563",
        "service_name": "🔺 1563 - YouTube Abone | Max 10K | %100 Gerçek | 30 Gün Telafi Butonu Aktif | Düşüş Az | Günlük 120-170",
        "price": "20.00",
        "percent": "1"
    },
    {
        "id": "2877",
        "service_id": "1575",
        "service_name": "🔺 1575 - Youtube İzlenme + (Bonus Beğeni %1-4) | Max 1.5M | 30 Gün Garantili | Günde 400K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2849",
        "service_id": "1581",
        "service_name": "🔺 1581 - Youtube Global Adwords (Reklam) İzlenme | Max 100M | Günlük 400K Hız | 0-6 Saat Başlangıç",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "2809",
        "service_id": "1583",
        "service_name": "🔺 1583 - Youtube Beğeni | Max 300K | 30 Gün Telafili | Başlangıç 0-3 dakika | Günde 30-50K",
        "price": "74.00",
        "percent": "1"
    },
    {
        "id": "11376",
        "service_id": "1585",
        "service_name": "🔺 1585 - Youtube Beğeni | Max 10K | 30 Gün Telafili | Anlık Başlar | Günde 10K",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3317",
        "service_id": "1604",
        "service_name": "🔺 1604 - Youtube 4000 Saat İzlenme | Minimum 1 Saat Üzeri Video | 0-1 Saat Başlangıç | 30 Gün Garanti",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "3900",
        "service_id": "1605",
        "service_name": "● 1605 - Instagram Profil Ziyareti + Erişim + Etkileşim + Keşif + Gösterim | Max 1M | Anlık [Sadece Gönderi Linki]",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3545",
        "service_id": "1607",
        "service_name": "🔹 1607 - Facebook Video/Reels İzlenme | Max 1M | Günlük 50K Hız | 3 Saniye İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3546",
        "service_id": "1608",
        "service_name": "🔹 1608 - Facebook Video/Reels İzlenme | Max 1M | Günlük 50K Hız | 10 Saniye İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3547",
        "service_id": "1609",
        "service_name": "🔹 1609 - Facebook Video/Reels İzlenme | Max 1M | Günlük 50K Hız | 15 Saniye İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3548",
        "service_id": "1610",
        "service_name": "🔹 1610 - Facebook Video/Reels İzlenme | Max 1M | Günlük 50K Hız | 30 Saniye İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3549",
        "service_id": "1611",
        "service_name": "🔹 1611 - Facebook Video/Reels İzlenme | Max 1M | Günlük 50K Hız | 1 Dakika İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3550",
        "service_id": "1612",
        "service_name": "🔹 1612 - Facebook Video/Reels İzlenme | Max 1M | Günlük 50K Hız | 3 Dakika İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3551",
        "service_id": "1615",
        "service_name": "🔹 1615 - Facebook Video/Reels İzlenme | Max 1M | Günlük 50K Hız | 6 Dakika İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3552",
        "service_id": "1616",
        "service_name": "🔹 1616 - Facebook Video/Reels İzlenme | Max 1M | Günlük 50K Hız | 10 Dakika İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2804",
        "service_id": "1618",
        "service_name": "💙 1618 - Instagram Yabancı Bot Beğeni  | Max 100K | Yabancı Kullanıcılar | Hızlı Başlar | Saatte 5K",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "2864",
        "service_id": "1624",
        "service_name": "❤️ 1624 - Instagram Türk Beğeni | %100 Türk 🇹🇷 | Max 5K | Geç Başlar",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3833",
        "service_id": "1625",
        "service_name": "◆ 1625 - TikTok İzlenme | Max 100M | Anlık",
        "price": "40.00",
        "percent": "1"
    },
    {
        "id": "3903",
        "service_id": "1631",
        "service_name": "● 1631 - Instagram Etkileşim + Paylaşım | Max 100K | Anlık | [Sadece Gönderi Linki]",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3904",
        "service_id": "1632",
        "service_name": "● 1632 - Instagram Etkileşim + Paylaşım + Erişim + Gösterim | Max 100K | Anlık | [Sadece Gönderi Linki]",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3905",
        "service_id": "1633",
        "service_name": "● 1633 - Instagram Etkileşim + Paylaşım + Erişim + Gösterim + Profil Ziyareti | Max 100K | Anlık | [Sadece Gönderi Linki]",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "2892",
        "service_id": "1634",
        "service_name": "🔸 1634 - Kwai Beğeni [Global] [Max: 2K] [Garanti: Yok] [Başlagıç: 0-1 Saat] [Hız: Günlük 200]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "2893",
        "service_id": "1635",
        "service_name": "🔸 1635 - Kwai Takipçi [Global] [Max: 2K] [Telafi: Yok] [Başlangıç: 0-1 Saat] [Hız: Günlük 200]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11247",
        "service_id": "1644",
        "service_name": "🎥 1644 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 100K Hız",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "10866",
        "service_id": "1649",
        "service_name": "❤️ 1649 - 🇹🇷 Instagram Türk Beğeni | Max 100K | %90 Türk 🇹🇷 | Anlık",
        "price": "82.00",
        "percent": "1"
    },
    {
        "id": "3118",
        "service_id": "1650",
        "service_name": "❤️ 1650 - Instagram Beğeni [%100 Türk 🇹🇷] [Yüksek Kaliteli Kullanıcılar] | Anlık | Saatte 5-10K | Düşüş Yok ",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10812",
        "service_id": "1720",
        "service_name": "🎥 1720 - Instagram Video İzlenme | Reels | Max 100M | %100 Türk 🇹🇷 | Hızlı",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3025",
        "service_id": "1729",
        "service_name": "🔹 1729 - Facebook Türk Gönderi/Durum Beğeni 🇹🇷 | Max 10K | 0-15 Dakika | Saatlik 1-2K | 30 Gün Telafi",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "3190",
        "service_id": "1732",
        "service_name": "◆ 1732 - TikTok Beğeni | Max 30K | Kaliteli Kullanıcılar [30 Gün Garantili] Anlık Başlar - Günde 1-2K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2884",
        "service_id": "1737",
        "service_name": "◆ 1737 - TikTok Kaydet | Max 100K | Hızlı",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "2850",
        "service_id": "1757",
        "service_name": "🔺 1757 | Youtube Beğeni [🇺🇸 ABD 🇺🇸] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2810",
        "service_id": "1758",
        "service_name": "🔺 1758 | Youtube Beğeni [🇨🇦 KANADA 🇨🇦] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2811",
        "service_id": "1763",
        "service_name": "🔺 1763 | Youtube Beğeni [🇩🇪 ALMANYA 🇩🇪] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2812",
        "service_id": "1764",
        "service_name": "🔺 1764 | Youtube Beğeni [🇮🇹 İTALYA 🇮🇹] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2813",
        "service_id": "1765",
        "service_name": "🔺 1765 | Youtube Beğeni [🇷🇺 RUSYA 🇷🇺] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2814",
        "service_id": "1766",
        "service_name": "🔺 1766 | Youtube Beğeni [🇻🇳 Vietnam 🇻🇳] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2815",
        "service_id": "1767",
        "service_name": "🔺 1767 | Youtube Beğeni [🇮🇳 HİNDİSTAN 🇮🇳] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2896",
        "service_id": "1769",
        "service_name": "🔺 1769 | Youtube Beğeni [🇪🇬 MISIR 🇪🇬] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2816",
        "service_id": "1770",
        "service_name": "🔺 1770 | Youtube Beğeni [🇵🇰 Pakistan 🇵🇰] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2817",
        "service_id": "1772",
        "service_name": "🔺 1772 | Youtube Beğeni [🇩🇰 DANİMARKA 🇩🇰] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "2878",
        "service_id": "1776",
        "service_name": "🔺 1776 | Youtube Beğeni [🇯🇴 ÜRDÜN 🇯🇴] | 20K | Anlık Başlangıç | Günlük 20K Hız | Ömür Boyu Garantili\t",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "10742",
        "service_id": "1787",
        "service_name": "🔹 1787 - Facebook Gönderi Beğeni | Max 3K | Günlük 1-3K Hız",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "2833",
        "service_id": "1816",
        "service_name": "🔹 1816 - Facebook Grup Üyesi | 100K | Günlük 3-5K Hız | 15 Gün Garanti",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "2887",
        "service_id": "1821",
        "service_name": "🔹 1821 - Facebook Etkinlik Daveti (Gidiyorum) | Max 200K | Günlük 2-3K Hız | 30 Gün Garanti",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "2855",
        "service_id": "1822",
        "service_name": "🔹 1822 - Facebook Etkinlik Daveti (İlgileniyorum/Düşünüyorum) | 200K | Günlük 2-3K Hız | 30 Gün Garanti",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "10674",
        "service_id": "1823",
        "service_name": "🔹 1823 - Facebook Özel Yorum | 1K | Günlük 50 Hız\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "10675",
        "service_id": "1824",
        "service_name": "🔹 1824 - Facebook Rastgele Pozitif Yorum | 1K | Günlük 50 Hız\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "10676",
        "service_id": "1825",
        "service_name": "🔹 1825 - Facebook Emoji Yorum | 1K | Günlük 50 Hız\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11395",
        "service_id": "1827",
        "service_name": "🔹 1827 - Facebook Yorum Beğeni | 100K | Günlük 1-2K Hız | 30 Gün Garanti\t",
        "price": "68.00",
        "percent": "1"
    },
    {
        "id": "2907",
        "service_id": "1829",
        "service_name": "🔹 1829 - Facebook Sayfa Değerlendirme (Evet Tavsiye) | 1K | Günlük 50 Hız\t",
        "price": "64.00",
        "percent": "1"
    },
    {
        "id": "2908",
        "service_id": "1830",
        "service_name": "🔹 1830 - Facebook Sayfa Değerlendirme (Evet Tavsiye + Olumlu Yorum) | 1K | Günlük 50 Hız\t",
        "price": "64.00",
        "percent": "1"
    },
    {
        "id": "3365",
        "service_id": "1869",
        "service_name": "💙 1869 ~ Instagram Beğeni | AMERİKA  | Max 5K | Yavaş Başlar | Günde 100-200 | 30 Gün Telafi\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3367",
        "service_id": "1870",
        "service_name": "💙 1870 - 🇧🇷 - Instagram BREZİLYA Beğeni | Max 10K | Hızlı Başlar | Günde 5-10K | 30 Gün Telafi",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3373",
        "service_id": "1872",
        "service_name": "❤️ 1872 - 🇹🇷 - Instagram Türk Beğeni | Max 5K | Hızlı | 30 Gün Telafi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3371",
        "service_id": "1873",
        "service_name": "💙 1873 -  Instagram Beğeni | 🇷🇺 -Rus | Max 10K |  Hızlı Başlar | Günde 5-10K | 30 Gün Telafi",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "3370",
        "service_id": "1874",
        "service_name": "💙 1874 - 🇮🇳 - Instagram Beğeni | 🇮🇳HİNDİSTAN🇮🇳 | Max 10K | Hızlı Başlar | Günde 10.000  | 30 Gün Telafi",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "2842",
        "service_id": "1875",
        "service_name": "💙 1875 - Instagram Yabancı Beğeni | 50K | Az Düşüş | Saatlik 3-5K Hız",
        "price": "46.00",
        "percent": "1"
    },
    {
        "id": "2802",
        "service_id": "1876",
        "service_name": "💙 1876 - Instagram Yabancı Beğeni | 200K | Günlük 10K Hız | Gösterim + Erişim | 30 Gün Telafi",
        "price": "48.00",
        "percent": "1"
    },
    {
        "id": "2803",
        "service_id": "1878",
        "service_name": "💙 1878 🇬🇧 - Instagram Beğeni | İNGİLİZ | 7K | Saatlik 500-1K Hız | Avrupa Hesaplar | Gösterim + Erişim\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3384",
        "service_id": "1879",
        "service_name": "💙 1879 - Instagram Yabancı Bot Beğeni | Max 300K | Yabancı Kullanıcılar | Az Düşüş | Hızlı Başlar | Saatte 5K-10K\t",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "2843",
        "service_id": "1883",
        "service_name": "💙 1883 - Instagram Yabancı Beğeni | Max 300K | Az Düşüş | Hızlı Başlar | Saatte 2K-4K",
        "price": "29.00",
        "percent": "1"
    },
    {
        "id": "3064",
        "service_id": "1884",
        "service_name": "💙 1884 - Instagram Yabancı Bot Beğeni | Max 150K | Yabancı Kullanıcılar | Düşüş Yok  | Hızlı Başlar | Saatte 20K-30K\t",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "3066",
        "service_id": "1885",
        "service_name": "💙 1885 - Instagram Yabancı Beğeni | Max 50K | 30 Gün Otomatik Telafili | Yabancı Kullanıcılar | Saatte 30K-50K\t",
        "price": "55.00",
        "percent": "1"
    },
    {
        "id": "2801",
        "service_id": "1886",
        "service_name": "💙 1886 - Instagram Yabancı Beğeni | Max 100K |  Yavaş Başlar | Saatte 250-500  Arası | Az Düşüş olabilir | 30 Gün Telafi",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3381",
        "service_id": "1888",
        "service_name": "💙 1888 - Instagram Yabancı Beğeni | Max 10K | Hızlı Başlar | Saatte 2K-3K | Düşüş Yok ",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "2998",
        "service_id": "1891",
        "service_name": "💙 1891 - Instagram Yabancı Beğeni | Max 500K | Anlık Başlar | Saatte 30K-50K | Düşüş Yok  | 90 Gün Telafili ",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "3121",
        "service_id": "1893",
        "service_name": "❤️ 1893 - İnstagram Beğeni [%70 Türk] [Max 5K] Geç Başlar",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3120",
        "service_id": "1894",
        "service_name": "❤️ 1894 - İnstagram Beğeni [%75 Türk] [Max 10K] Hızlı Başlar | Saatte 2K-3K | Düşüş Yok ",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "3115",
        "service_id": "1895",
        "service_name": "❤️ 1895 - Instagram Beğeni [%100 Türk 🇹🇷] [Max 20K] [ Anlık Başlar-Her zaman STABİL] Düşüş Yok ",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "2826",
        "service_id": "1898",
        "service_name": "💬 1898 - İnstagram Özel Yorum | Max 10K | (Yabancı Hesaplardan İstediğiniz Yorum) | Hızlı",
        "price": "90.00",
        "percent": "1"
    },
    {
        "id": "3415",
        "service_id": "1899",
        "service_name": "💛 1899 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 50K | Anlık",
        "price": "74.00",
        "percent": "1"
    },
    {
        "id": "3434",
        "service_id": "1900",
        "service_name": "💚 1900 - Instagram Oto Beğeni | Aktif Yabancı | Gösterim + Erişim (Keşif) | Max 200K | Saatte 5-10K | 30 Gün Telafili",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "3435",
        "service_id": "1901",
        "service_name": "💚 1901 - Instagram Oto Beğeni | Yabancı Kullanıcılar | Max 100K | Yüksek Kaliteli | Yavaş Başlar Doğal Artar",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3436",
        "service_id": "1902",
        "service_name": "💚 1902 - Instagram Oto Beğeni | Gerçek Yabancı | Max 20K | Yüksek Kaliteli | Saatte 3-5K",
        "price": "95.00",
        "percent": "1"
    },
    {
        "id": "3437",
        "service_id": "1903",
        "service_name": "💚 1903 - Instagram Oto Beğeni | Gerçek Yabancı | Max 150K | Yüksek Kaliteli | Saatte 5-10K",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3432",
        "service_id": "1904",
        "service_name": "💚 1904 - Instagram Oto Beğeni | %100 Gerçek Yabancı | Max 100K | Çok Yüksek Kaliteli | Saatte 1K",
        "price": "93.00",
        "percent": "1"
    },
    {
        "id": "3779",
        "service_id": "1915",
        "service_name": "🔹 1915 - Facebook Gönderi Emoji Beğeni (❤️) | 5K | 1-2K Hız | Garantisiz ",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3780",
        "service_id": "1916",
        "service_name": "🔹 1916 - Facebook Gönderi Emoji Beğeni (😆) | 5K | 1-2K Hız | Garantisiz ",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "2905",
        "service_id": "1917",
        "service_name": "🔹 1917 - Facebook Gönderi Emoji Beğeni (😲) | 5K | 1-2K Hız | Garantisiz ",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "2918",
        "service_id": "1918",
        "service_name": "🔹 1918 - Facebook Gönderi Emoji Beğeni (😢) | 5K | 1-2K Hız | Garantisiz ",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "2832",
        "service_id": "1919",
        "service_name": "🔹 1919 - Facebook Gönderi Emoji Beğeni (😡) | 5K | 1-2K Hız | Garantisiz ",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "2886",
        "service_id": "1920",
        "service_name": "🔹 1920 - Facebook Gönderi Emoji Beğeni (🥰) | 5K | 1-2K Hız | Garantisiz ",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "2834",
        "service_id": "1933",
        "service_name": "🔹 1933 - Facebook Canlı Yayın İzlenme [Max 2K] [30 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2919",
        "service_id": "1934",
        "service_name": "🔹 1934 - Facebook Canlı Yayın İzlenme [Max 2K] [60 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2856",
        "service_id": "1935",
        "service_name": "🔹 1935 - Facebook Canlı Yayın İzlenme [Max 2K] [90 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2888",
        "service_id": "1936",
        "service_name": "🔹 1936 - Facebook Canlı Yayın İzlenme [Max 2K] [120 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2889",
        "service_id": "1937",
        "service_name": "🔹 1937 - Facebook Canlı Yayın İzlenme [Max 2K] [150 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2890",
        "service_id": "1938",
        "service_name": "🔹 1938 - Facebook Canlı Yayın İzlenme [Max 2K] [180 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "2857",
        "service_id": "1940",
        "service_name": "🔹 1940 - Facebook Canlı Yayın İzlenme [Max 2K] [240 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11079",
        "service_id": "1957",
        "service_name": "● 1957 - Instagram Oto Etkileşim + Paylaşım",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11081",
        "service_id": "1958",
        "service_name": "● 1958 - Instagram Oto Etkileşim + Paylaşım + Erişim + Gösterim",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11083",
        "service_id": "1959",
        "service_name": "● 1959 - Instagram Oto Etkileşim + Paylaşım + Erişim + Gösterim + Profil Ziyareti",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3399",
        "service_id": "1975",
        "service_name": "⭐ 1975 - Instagram Takipçi | Max 50K | %85 Türk 🇹🇷 | 30 Gün Telafili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11092",
        "service_id": "1992",
        "service_name": "● 1992 - Instagram Oto Kaydet",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3126",
        "service_id": "1993",
        "service_name": "● 1993 -  Instagram Story (Hikaye) İzlenme | Link: Kullanıcı Adı | Tüm Postlar | Max 10K | Tam Atar",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3606",
        "service_id": "1994",
        "service_name": "🌀 1994 - Telegram Gerçek-Bot Karışık Kanal Üyeleri | Max 30K | Garantisiz | Günde 1K",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "10966",
        "service_id": "1996",
        "service_name": "🔺 1996 ~ YouTube İzlenme - [🇹🇷 TÜRKİYE 🇹🇷] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10967",
        "service_id": "1997",
        "service_name": "🔺 1997 ~ YouTube İzlenme [🇮🇩 ENDONEZYA 🇮🇩] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10968",
        "service_id": "1998",
        "service_name": "🔺 1998 ~ YouTube İzlenme [🇷🇸 SIRBİSTAN 🇷🇸] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10969",
        "service_id": "1999",
        "service_name": "🔺 1999 ~ YouTube İzlenme [🇦🇪 BİRLEŞİK ARAP EMİRLİKLERİ 🇦🇪] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10970",
        "service_id": "2000",
        "service_name": "🔺 2000 ~ YouTube İzlenme [🇦🇷 ARJANTİN 🇦🇷] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10971",
        "service_id": "2001",
        "service_name": "🔺 2001 ~ YouTube İzlenme [🇧🇩 BANGLADEŞ 🇧🇩] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10972",
        "service_id": "2002",
        "service_name": "🔺 2002 ~ YouTube İzlenme [🇹🇼 TAYVAN 🇹🇼] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10973",
        "service_id": "2003",
        "service_name": "🔺 2003 ~ YouTube İzlenme[🇧🇷 BREZİLYA 🇧🇷] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10974",
        "service_id": "2004",
        "service_name": "🔺 2004 ~ YouTube İzlenme [🇪🇬 MISIR 🇪🇬] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10975",
        "service_id": "2005",
        "service_name": "🔺 2005 ~ YouTube İzlenme [🇮🇳 HİNDİSTAN 🇮🇳] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10976",
        "service_id": "2006",
        "service_name": "🔺 2006 ~ YouTube İzlenme [🇻🇳 VIETNAM 🇻🇳] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10977",
        "service_id": "2007",
        "service_name": "🔺 2007 ~ YouTube İzlenme [🇯🇵 JAPONYA 🇯🇵] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10978",
        "service_id": "2008",
        "service_name": "🔺 2008 ~ YouTube İzlenme [🇷🇴 ROMANYA 🇷🇴] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10979",
        "service_id": "2009",
        "service_name": "🔺 2009 ~ YouTube İzlenme [🇲🇦 FAS 🇲🇦] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10980",
        "service_id": "2010",
        "service_name": "🔺 2010 ~ YouTube İzlenme [🇨🇴 KOLOMBİYA 🇨🇴] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10981",
        "service_id": "2011",
        "service_name": "🔺 2011 ~ YouTube İzlenme [🇵🇭 FİLİPİNLER 🇵🇭] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10982",
        "service_id": "2012",
        "service_name": "🔺 2012 ~ YouTube İzlenme [🇪🇨 EKVATOR 🇪🇨] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10983",
        "service_id": "2013",
        "service_name": "🔺 2013 ~ YouTube İzlenme [🇹🇳 TUNUS 🇹🇳] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10984",
        "service_id": "2014",
        "service_name": "🔺 2014 ~ YouTube İzlenme [🇸🇦 SUUDİ ARABİSTAN 🇸🇦] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10985",
        "service_id": "2015",
        "service_name": "🔺 2015 ~ YouTube İzlenme [🇭🇷 HIRVATİSTAN 🇭🇷] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10986",
        "service_id": "2016",
        "service_name": "🔺 2016 ~ YouTube İzlenme [🇻🇪 VENEZUELA 🇻🇪] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10987",
        "service_id": "2017",
        "service_name": "🔺 2017 ~ YouTube İzlenme [🇮🇹 İTALYA 🇮🇹] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10988",
        "service_id": "2018",
        "service_name": "🔺 2018 ~ YouTube İzlenme [🇱🇧 LÜBNAN 🇱🇧] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10989",
        "service_id": "2019",
        "service_name": "🔺 2019 ~ YouTube İzlenme [🇵🇰 PAKISTAN 🇵🇰] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10990",
        "service_id": "2020",
        "service_name": "🔺 2020 ~ YouTube İzlenme [🇫🇷 FRANSA 🇫🇷] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10991",
        "service_id": "2021",
        "service_name": "🔺 2021 ~ YouTube İzlenme [🇳🇵 NEPAL 🇳🇵] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10992",
        "service_id": "2022",
        "service_name": "🔺 2022 ~ YouTube İzlenme [🇲🇽 MEKSİKA 🇲🇽] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10993",
        "service_id": "2023",
        "service_name": "🔺 2023 ~ YouTube İzlenme [🇩🇿 CEZAYİR 🇩🇿] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10994",
        "service_id": "2024",
        "service_name": "🔺 2024 ~ YouTube İzlenme [🇧🇬 BULGARİSTAN 🇧🇬] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10995",
        "service_id": "2025",
        "service_name": "🔺 2025 ~ YouTube İzlenme [🇨🇦 KANADA 🇨🇦] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10996",
        "service_id": "2026",
        "service_name": "2026 ~ YouTube İzlenme [🇩🇪 ALMANYA 🇩🇪] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10997",
        "service_id": "2027",
        "service_name": "🔺 2027 ~ YouTube İzlenme [🇳🇱 HOLLANDA 🇳🇱] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10998",
        "service_id": "2028",
        "service_name": "🔺 2028 ~ YouTube İzlenme [🇬🇷 YUNANİSTAN 🇬🇷] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10999",
        "service_id": "2029",
        "service_name": "🔺 2029 ~ YouTube İzlenme [🇷🇺 RUSYA 🇷🇺] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11000",
        "service_id": "2030",
        "service_name": "🔺 2030 ~ YouTube İzlenme [🇪🇸 İSPANYA 🇪🇸] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11001",
        "service_id": "2031",
        "service_name": "🔺 2031 ~ YouTube İzlenme [🇲🇰 KUZEY MAKEDONYA 🇲🇰] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11002",
        "service_id": "2032",
        "service_name": "🔺 2032 ~ YouTube İzlenme [🇸🇪 İSVEÇ 🇸🇪] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11003",
        "service_id": "2033",
        "service_name": "🔺 2033 ~ YouTube İzlenme [🇬🇧 BİRLEŞİK KRALLIK🇬🇧] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11004",
        "service_id": "2034",
        "service_name": "🔺 2034 ~ YouTube İzlenme [🇦🇫 AFGANİSTAN 🇦🇫] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11005",
        "service_id": "2035",
        "service_name": "🔺 2035 ~ YouTube İzlenme [🇦🇱 ARNAVUTLUK 🇦🇱] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11006",
        "service_id": "2036",
        "service_name": "🔺 2036 ~ YouTube İzlenme [🇦🇴 ANGOLA 🇦🇴] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11008",
        "service_id": "2038",
        "service_name": "🔺 2038 ~YouTube İzlenme - [🇦🇿 AZERBAYCAN 🇦🇿] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11009",
        "service_id": "2039",
        "service_name": "🔺 2039 ~ YouTube İzlenme [🇧🇴 BOLIVYA 🇧🇴] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11010",
        "service_id": "2040",
        "service_name": "🔺 2040 ~ YouTube İzlenme [🇧🇦 BOSNA HERSEK 🇧🇦] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11011",
        "service_id": "2041",
        "service_name": "🔺 2041 ~ YouTube İzlenme [🇰🇭 KAMBOÇYA 🇰🇭] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11012",
        "service_id": "2042",
        "service_name": "🔺 2042 ~ YouTube İzlenme [🇨🇱 ŞİLİ 🇨🇱] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11013",
        "service_id": "2043",
        "service_name": "🔺 2043 ~ YouTube İzlenme [🇨🇷 KOSTARİKA 🇨🇷] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11014",
        "service_id": "2044",
        "service_name": "🔺 2044 ~ YouTube İzlenme [🇩🇴 DOMİNİK CUMHURİYETİ 🇩🇴] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11015",
        "service_id": "2045",
        "service_name": "🔺 2045 ~ YouTube İzlenme [🇸🇻 EL SALVADOR 🇸🇻] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11016",
        "service_id": "2046",
        "service_name": "🔺 2046 ~ YouTube İzlenme [🇬🇪 GÜRCİSTAN 🇬🇪] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11017",
        "service_id": "2047",
        "service_name": "🔺 2047 ~ YouTube İzlenme [🇬🇭 GANA 🇬🇭] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11018",
        "service_id": "2048",
        "service_name": "🔺 2048 ~ YouTube İzlenme [🇬🇹 GUATEMALA 🇬🇹] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11019",
        "service_id": "2049",
        "service_name": "🔺 2049 ~ YouTube İzlenme [🇭🇳 HONDURAS 🇭🇳] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11020",
        "service_id": "2050",
        "service_name": "🔺 2050 ~ YouTube İzlenme [🇭🇰 HONG KONG 🇭🇰] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11021",
        "service_id": "2051",
        "service_name": "🔺 2051 ~ YouTube İzlenme [🇭🇺 MACARİSTAN 🇭🇺] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11022",
        "service_id": "2052",
        "service_name": "🔺 2052 ~ YouTube İzlenme [🇮🇶 IRAK 🇮🇶] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11023",
        "service_id": "2053",
        "service_name": "🔺 2053 ~ YouTube İzlenme [🇮🇱 İSRAİL 🇮🇱] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3339",
        "service_id": "2054",
        "service_name": "🔺 2054 ~ YouTube İzlenme [🇯🇲 JAMAIKA 🇯🇲] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11024",
        "service_id": "2055",
        "service_name": "🔺 2055 ~ YouTube İzlenme [🇯🇴 ÜRDÜN 🇯🇴] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11025",
        "service_id": "2056",
        "service_name": "🔺 2056 ~ YouTube İzlenme [🇰🇪 KENYA 🇰🇪] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11026",
        "service_id": "2057",
        "service_name": "🔺 2057 ~YouTube İzlenme [🇰🇼 KUVEYT 🇰🇼] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11027",
        "service_id": "2058",
        "service_name": "🔺 2058 ~ YouTube İzlenme [🇱🇦 LAOS 🇱🇦] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11028",
        "service_id": "2059",
        "service_name": "🔺 2059 ~ YouTube İzlenme [🇱🇾 LİBYA 🇱🇾] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11029",
        "service_id": "2060",
        "service_name": "🔺 2060 ~ YouTube İzlenme [🇲🇾 MALEZYA 🇲🇾] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11030",
        "service_id": "2061",
        "service_name": "🔺 2061 ~ YouTube İzlenme [🇲🇳 MOĞOLİSTAN 🇲🇳] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11031",
        "service_id": "2062",
        "service_name": "🔺 2062 ~ YouTube İzlenme [🇲🇪 KARADAĞ 🇲🇪] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11032",
        "service_id": "2063",
        "service_name": "🔺 2063 ~ YouTube İzlenme [🇲🇲 MYANMAR 🇲🇲] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11033",
        "service_id": "2064",
        "service_name": "🔺 2064 ~YouTube İzlenme [🇳🇮 NIKARAGUA 🇳🇮] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11034",
        "service_id": "2065",
        "service_name": "🔺 2065 ~ YouTube İzlenme [🇴🇲 UMMAN 🇴🇲] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11035",
        "service_id": "2066",
        "service_name": "🔺 2066 ~ YouTube İzlenme [🇵🇦 PANAMA 🇵🇦] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11036",
        "service_id": "2067",
        "service_name": "🔺 2067 ~ YouTube İzlenme [🇵🇾 PARAGUAY 🇵🇾] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11037",
        "service_id": "2068",
        "service_name": "🔺 2068 ~ YouTube İzlenme [🇵🇪 PERU 🇵🇪] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11038",
        "service_id": "2069",
        "service_name": "🔺 2069 ~ YouTube İzlenme [🇵🇹 PORTEKİZ 🇵🇹] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11039",
        "service_id": "2070",
        "service_name": "🔺 2070 ~ YouTube İzlenme[🇵🇷 PORTO RİKO 🇵🇷] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11040",
        "service_id": "2071",
        "service_name": "🔺 2071 ~ YouTube İzlenme [🇶🇦 KATAR 🇶🇦] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11041",
        "service_id": "2072",
        "service_name": "🔺 2072 ~ YouTube İzlenme [🇸🇬 SINGAPUR 🇸🇬] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11042",
        "service_id": "2073",
        "service_name": "🔺 2073 ~ YouTube İzlenme [🇸🇳 SENEGAL 🇸🇳] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11043",
        "service_id": "2074",
        "service_name": "🔺 2074 ~ YouTube İzlenme [🇸🇮 SLOVENYA 🇸🇮] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11044",
        "service_id": "2075",
        "service_name": "🔺 2075 ~YouTube İzlenme [🇱🇰 SRI LANKA 🇱🇰] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11045",
        "service_id": "2076",
        "service_name": "🔺 2076 ~ YouTube İzlenme [🇸🇩 SUDAN 🇸🇩] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11046",
        "service_id": "2077",
        "service_name": "🔺 2077 ~ YouTube İzlenme [🇸🇾 SURİYE 🇸🇾] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11047",
        "service_id": "2078",
        "service_name": "🔺 2078 ~ YouTube İzlenme [🇹🇿 TANZANYA 🇹🇿] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11048",
        "service_id": "2079",
        "service_name": "🔺 2079 ~ YouTube İzlenme [🇹🇹 TRINIDAD&amp;TOBAGO 🇹🇹] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11049",
        "service_id": "2080",
        "service_name": "🔺 2080 ~ YouTube İzlenme [🇺🇾 URUGUAY 🇺🇾] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3128",
        "service_id": "2086",
        "service_name": "💛 2086 - Instagram Oto Beğeni | 🇹🇷 %100 Türk | Max 50K | Saatte 500-1K Hız",
        "price": "85.00",
        "percent": "1"
    },
    {
        "id": "3416",
        "service_id": "2106",
        "service_name": "💛 2106 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 5K | Saatte 500 Hız",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3418",
        "service_id": "2108",
        "service_name": "💛 2108 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 50K | Hızlı",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3420",
        "service_id": "2109",
        "service_name": "💛 2109 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 100K | Saatte 100-200",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11394",
        "service_id": "2111",
        "service_name": "2111 ~ Instagram Türk Beğeni | %80 Türk 🇹🇷 | Maksimum 5K",
        "price": "72.00",
        "percent": "1"
    },
    {
        "id": "3187",
        "service_id": "2117",
        "service_name": "◆ 2117 - TikTok Beğeni | Max 50K | Gerçek Kullanıcılar | 30 Gün Garantili | Anlık Başlar | Günde 30-50K",
        "price": "72.00",
        "percent": "1"
    },
    {
        "id": "3171",
        "service_id": "2119",
        "service_name": "◆ 2119 - TikTok Beğeni | Max 25K | Garantisiz | Günde 5-20K Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3172",
        "service_id": "2120",
        "service_name": "◆ 2120 - TikTok Beğeni | Max 50K | Garantisiz | Anlık Başlar | Günde 5-10K Hız",
        "price": "56.00",
        "percent": "1"
    },
    {
        "id": "11387",
        "service_id": "2121",
        "service_name": "◆ 2121 - TikTok Beğeni | Max 250K | Garantisiz | Anlık Başlar | Günde 20K Hız",
        "price": "63.00",
        "percent": "1"
    },
    {
        "id": "3183",
        "service_id": "2125",
        "service_name": "◆ 2125 - TikTok Beğeni + Bonus İzlenme | Max 50K | 30 Gün Garantili | Anlık Başlar | Günde 10-20K Hız",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11388",
        "service_id": "2127",
        "service_name": "◆ 2127 - TikTok Beğeni | Max 250K | 30 Gün Garantili | Anlık Başlar | Günde 20K Hız",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11490",
        "service_id": "2153",
        "service_name": "🌟 2153 - Instagram Takipçi | Max 1M | Garantisiz | Günde 1-2K Hız | Değerlendime KAPALI Olmalı",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "11447",
        "service_id": "2159",
        "service_name": "🔹 2159 - Facebook Sayfa Beğeni + Takipçi | Max 100K | Günlük 10-20K Hız | Ömür Boyu Garantili",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3368",
        "service_id": "2166",
        "service_name": "💙 2166 - 🇧🇷 - Instagram BREZİLYA Beğeni | Max 100K |Yüksek Kalite | Saatte 500+ | 30 Gün Telafi",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "3192",
        "service_id": "2168",
        "service_name": "◆ 2168 - TikTok İzlenme | Max 10M | Saatte 50-100K | Anlık Başlangıç",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3193",
        "service_id": "2169",
        "service_name": "◆ 2169 - TikTok İzlenme | Max 100M | Saatte 50-100K",
        "price": "50.00",
        "percent": "1"
    },
    {
        "id": "3195",
        "service_id": "2171",
        "service_name": "◆ 2171 - TikTok İzlenme | Max 100M | Anlık Başlar",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "11392",
        "service_id": "2172",
        "service_name": "◆ 2172 - TikTok Takipçi | Max 1K | 0-1 Saat Başlangıç | Garantisiz | Günde 500-1K",
        "price": "63.00",
        "percent": "1"
    },
    {
        "id": "11452",
        "service_id": "2174",
        "service_name": "🔹 2174 - Facebook -Sayfa- Takipçisi | Max 500K | Günlük 5-10K Hız | Ömür Boyu Garantili",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "3201",
        "service_id": "2175",
        "service_name": "💚 2175 - Instagram Oto Beğeni | Yabancı Bot | Max 300K | Saatte 3K",
        "price": "45.00",
        "percent": "1"
    },
    {
        "id": "3650",
        "service_id": "2177",
        "service_name": "🔹 2177 - Facebook Gönderi Beğeni | Max 10K | Günlük 3-5K | 30 Gün Telafi",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "11259",
        "service_id": "2179",
        "service_name": "🔹 2179 - Facebook Gönderi Beğeni | Max 50K | Günlük 5K Hız | 30 Gün Telafi | Hindistan/BD/Asya/Arap Karışımı\t",
        "price": "59.00",
        "percent": "1"
    },
    {
        "id": "11470",
        "service_id": "2183",
        "service_name": "◆ 2183 - TikTok Beğeni | Max 1M | Garantisiz | Saatte 1K Hız",
        "price": "59.00",
        "percent": "1"
    },
    {
        "id": "11379",
        "service_id": "2188",
        "service_name": "◆ 2188 - Tiktok Rastgele Yorum | Max 100K | 30 Gün Garantili | Günlük 10-20K",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11380",
        "service_id": "2190",
        "service_name": "◆ 2190 -  Tiktok Emoji Yorum | Max 100K | Yüksek Kalite | 30 Gün Garantili | Günlük 10-20K",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "3887",
        "service_id": "2193",
        "service_name": "◆ 2193 - Tiktok Paylaşım | Max 100K | Süper Hızlı",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11472",
        "service_id": "2194",
        "service_name": "◆ 2194 - Tiktok Paylaşım | Max 1M | 30 Gün Garantili | Günlük 5-10K Hız",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "10821",
        "service_id": "2197",
        "service_name": "◆ 2197 - TikTok Kaydet | Max 20K | 30 Gün Garantili | Günlük 5-10K | 0-1 Saat Başlangıç",
        "price": "61.00",
        "percent": "1"
    },
    {
        "id": "11473",
        "service_id": "2198",
        "service_name": "◆ 2198 - TikTok Kaydet | Max 1M | 30 Gün Garantili | Günde  5-10K Hız",
        "price": "20.00",
        "percent": "1"
    },
    {
        "id": "3562",
        "service_id": "2200",
        "service_name": "🔹 2200 - Facebook 600.000 Dakika İzlenme | Video Süresi 3 Saat 5 Dakika Üzeri Olmalı",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3563",
        "service_id": "2201",
        "service_name": "🔹 2201 - Facebook 600.000 Dakika İzlenme | Video Süresi 2 Saat 5 Dakika Üzeri Olmalı",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3564",
        "service_id": "2202",
        "service_name": "🔹 2202 - Facebook 600.000 Dakika İzlenme | Video Süresi 1 Saat 5 Dakika Üzeri Olmalı",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3565",
        "service_id": "2203",
        "service_name": "🔹 2203 - Facebook 600.000 Dakika İzlenme | Video Süresi 2 Saat 5 Dakika Üzeri Olmalı",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3566",
        "service_id": "2204",
        "service_name": "🔹 2204 - Facebook 600.000 Dakika İzlenme | Video Süresi 1 Saat 5 Dakika Üzeri Olmalı",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3569",
        "service_id": "2205",
        "service_name": "🔹 2205 - Facebook 60.000 Dakika İzlenme | Para Kazanma | Video Süresi 3 Saat 1 Dakika Üzeri Olmalı | Yavaş",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3570",
        "service_id": "2206",
        "service_name": "🔹 2206 - Facebook 60.000 Dakika İzlenme | Para Kazanma | Video Süresi 2 Saat 1 Dakika Üzeri Olmalı | Yavaş",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3571",
        "service_id": "2207",
        "service_name": "🔹 2207 - Facebook 60.000 Dakika İzlenme | Para Kazanma | Video Süresi 1 Saat 1 Dakika Üzeri Olmalı | Yavaş",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3572",
        "service_id": "2208",
        "service_name": "🔹 2208 - Facebook 60.000 Dakika İzlenme | Para Kazanma | Video Süresi 3 Saat 1 Dakika Üzeri Olmalı | VİP",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3573",
        "service_id": "2209",
        "service_name": "🔹 2209 - Facebook 60.000 Dakika İzlenme | Para Kazanma | Video Süresi 2 Saat 1 Dakika Üzeri Olmalı | VİP",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3574",
        "service_id": "2210",
        "service_name": "🔹 2210 - Facebook 60.000 Dakika İzlenme | Para Kazanma | Video Süresi 1 Saat 1 Dakika Üzeri Olmalı | VİP",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3202",
        "service_id": "2212",
        "service_name": "🔺 2212 ~ Youtube Canlı Yayın İzlenme [Maks 10K] [30 Dakika] [1K = 900-1000 İzleyici]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3203",
        "service_id": "2213",
        "service_name": "🔺 2213 ~ Youtube Canlı Yayın İzlenme [Maks 10K] [60 Dakika] [1K = 900-1000 İzleyici]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3204",
        "service_id": "2214",
        "service_name": "🔺 2214 ~ Youtube Canlı Yayın İzlenme [Maks 10K] [90 Dakika] [1K = 900-1000 İzleyici]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3205",
        "service_id": "2215",
        "service_name": "🔺 2215 ~ Youtube Canlı Yayın İzlenme [Maks 10K] [120 Dakika] [1K = 900-1000 İzleyici]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3206",
        "service_id": "2216",
        "service_name": "🔺 2216 ~ Youtube Canlı Yayın İzlenme [Maks 10K] [150 Dakika] [1K = 900-1000 İzleyici]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3207",
        "service_id": "2217",
        "service_name": "🔺 2217 ~ Youtube Canlı Yayın İzlenme [Maks 10K] [3 Saat] [1K = 900-1000 İzleyici]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3208",
        "service_id": "2218",
        "service_name": "🔺 2218 ~ Youtube Canlı Yayın İzlenme [Maks 10K] [6 Saat] [1K = 900-1000 İzleyici]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3209",
        "service_id": "2219",
        "service_name": "🔺 2219 ~ Youtube Canlı Yayın İzlenme [Maks 10K] [12 Saat] [1K = 900-1000 İzleyici]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3210",
        "service_id": "2220",
        "service_name": "🔺 2220 ~ Youtube Canlı Yayın İzlenme [Maks 10K] [24 Saat] [1K = 900-1000 İzleyici]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3239",
        "service_id": "2224",
        "service_name": "💠 2224 - Twitter Beğeni | Max 50K | Garantisiz | Düşüş Yüksek | Anlık Başlangıç",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3332",
        "service_id": "2230",
        "service_name": "⭐ 2230 - Instagram Çekilişle Takipçi | Max 2K | %100 Türk Organik 🇹🇷 | Başlama Süresi: 24 Saat | Günlük İşleme Alınır",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3247",
        "service_id": "2232",
        "service_name": "❤️ 2232 - Instagram Türk Beğeni | Max 3K | Türk - Global Karışık | 30 Gün Garantili | Geç Başlar",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "3248",
        "service_id": "2233",
        "service_name": "❤️ 2233 - Instagram Türk Beğeni | Max 40K | Yüksek Kalite Gerçek Türk Kullanıcılar | 30 Gün Garantili | Günlük 5K",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "3249",
        "service_id": "2234",
        "service_name": "❤️ 2234 - Instagram Türk Beğeni | Max 20K | Yüksek Kalite Gerçek Türk Kullanıcılar | 30 Gün Garantili | Günlük 10K",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "11345",
        "service_id": "2236",
        "service_name": "🔹 2236 - Facebook Grup Üyesi | 200K | Günlük 10K Hız | 30 Gün Garantili",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3533",
        "service_id": "2238",
        "service_name": "🔹 2238 - Facebook Grup Üyesi | 500K | Günlük 5K Hız | 30 Gün Garantili",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3421",
        "service_id": "2244",
        "service_name": "💛 2244 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 5K | Hızlı",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "3422",
        "service_id": "2245",
        "service_name": "💛 2245 - Instagram Oto Beğeni | %90 Türk 🇹🇷 | Max 15K | Hızlı",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "3344",
        "service_id": "2247",
        "service_name": "💠 2247 - Twitter Tweet Görüntülenmeleri | Max 50M | Hızlı",
        "price": "50.00",
        "percent": "1"
    },
    {
        "id": "3345",
        "service_id": "2248",
        "service_name": "💠 2248 - Twitter Tweet Görüntülenmeleri | Max 10M | Hızlı",
        "price": "50.00",
        "percent": "1"
    },
    {
        "id": "3346",
        "service_id": "2249",
        "service_name": "💠 2249 - Twitter Tweet Görüntülenmeleri | Max 30M | Hızlı",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3232",
        "service_id": "2250",
        "service_name": "💠 2250 - Twitter Takipçi | Max 1K | %100 Gerçek Global Kullanıcılar | Günde 200-500 | Düşüş Yok ",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3233",
        "service_id": "2251",
        "service_name": "💠 2251 - Twitter Türk Takipçi 🇹🇷 | Max 1K | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3234",
        "service_id": "2252",
        "service_name": "💠 2252 - Twitter Türk Kadın Takipçi 🇹🇷 | Max 1K | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3235",
        "service_id": "2253",
        "service_name": "💠 2253 - Twitter Türk Erkek Takipçi 🇹🇷 | Max 500 | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3236",
        "service_id": "2254",
        "service_name": "💠 2254 ~ Twitter Beğeni | Max 1K | %100 Gerçek Global Kullanıcılar | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3237",
        "service_id": "2255",
        "service_name": "💠 2255 - Twitter Türk Beğeni 🇹🇷 | Max 1K | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3238",
        "service_id": "2256",
        "service_name": "💠 2256 - Twitter Türk Kadın Beğeni 🇹🇷 | Max 1K | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3246",
        "service_id": "2257",
        "service_name": "💠 2257 - Twitter Türk Erkek Beğeni 🇹🇷 | Max 500 | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3241",
        "service_id": "2258",
        "service_name": "💠 2258 - Twitter Retweet  | Max 1K | %100 Gerçek Global Kullanıcılar | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3242",
        "service_id": "2259",
        "service_name": "💠 2259 - Twitter Türk Retweet 🇹🇷 | Max 1K | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3243",
        "service_id": "2260",
        "service_name": "💠 2260 - Twitter Türk Kadın Retweet 🇹🇷 | Max 1K | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3244",
        "service_id": "2261",
        "service_name": "💠 2261 - Twitter Türk Erkek Retweet 🇹🇷 | Max 500 | Günde 200-500 | Düşüş Yok",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3264",
        "service_id": "2262",
        "service_name": "🅰️ 2262 - Instagram Beğeni [Max 100K] - Günde 100K Hız",
        "price": "0.70",
        "percent": "0"
    },
    {
        "id": "3386",
        "service_id": "2272",
        "service_name": "💠 2272 - Twitter Retweet | Max 3K | Günde 1-3K | Doğal Artış",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3266",
        "service_id": "2273",
        "service_name": "💙 2273 - Instagram Yabancı Beğeni | Max 100K |  Yavaş Başlar | Günde 10K | 365 Gün Telafi",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3348",
        "service_id": "2281",
        "service_name": "💠 2281 - Twitter Profil Tıklaması | Max 50M | 30 Gün Garantili",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3349",
        "service_id": "2282",
        "service_name": "💠 2282 - Twitter Profil Tıklaması | Max 100M | 45 Gün Garantili",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3351",
        "service_id": "2283",
        "service_name": "💠 2283 - Twitter Hashtag Tıklaması | Max 100M | 45 Gün Garantili",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3352",
        "service_id": "2284",
        "service_name": "💠 2284 - Twitter Hashtag Tıklaması | Max 50M | 30 Gün Garantili",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3354",
        "service_id": "2285",
        "service_name": "💠 2285 - Twitter Link Tıklaması | Max 50M | 30 Gün Garantili",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3355",
        "service_id": "2286",
        "service_name": "💠 2286 - Twitter Link Tıklaması | Max 100M | 45 Gün Garantili",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3356",
        "service_id": "2287",
        "service_name": "💠 2287 - Twitter Details Tıklaması | Max 100M | 45 Gün Garantili",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3362",
        "service_id": "2288",
        "service_name": "💙 2288 - Instagram Beğeni | İtalya | Max 500 | Günde 500 ",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "3363",
        "service_id": "2289",
        "service_name": "💙 2289 -  İnstagram Beğeni | Max 5K | NİJERYA  🇳🇬 | Günde 1K",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "3364",
        "service_id": "2290",
        "service_name": "💙 2290  - Instagram Beğeni | GÜNEY KORE | Max 10K | Günde 500 | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "3285",
        "service_id": "2303",
        "service_name": "● 2303 - İnstagram Gerçek Hikaye İzlenme + Hikaye Beğeni | Max 15K | Tüm Hikayeler",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11277",
        "service_id": "2305",
        "service_name": "🎥 2305 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 10-20K Hız",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "3424",
        "service_id": "2322",
        "service_name": "💚 2322 - Instagram Oto Beğeni | Max 300K | Saatte 3K | Garantisiz",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3425",
        "service_id": "2323",
        "service_name": "💚 2323 - Instagram Oto Beğeni | Max 200K | Saatte 5-10K | Gerçek Görünümlü | İzlenimler + Erişim",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3426",
        "service_id": "2324",
        "service_name": "💚 2324 - Instagram Oto Beğeni | Max 100K | Günde 10K | 365 Gün Garantili | Düşüş Yok | Yüksek Kalite",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3411",
        "service_id": "2325",
        "service_name": "💛 2325 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 5K | Saatte 500",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "3427",
        "service_id": "2327",
        "service_name": "💚 2327 - Instagram Oto Beğeni | İtalya + Karışık |  Max 500 | Günde 500 ",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "3428",
        "service_id": "2328",
        "service_name": "💚 2328 - Instagram Oto Beğeni | Nijerya + Karışık | Max 1K | Günde 1K ",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3429",
        "service_id": "2329",
        "service_name": "💙 2329 - Instagram Oto Beğeni | GÜNEY KORE | Max 10K | Günde 500-1K",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "3341",
        "service_id": "2330",
        "service_name": "💙 2330 - Instagram Beğeni | Japon + Karışık | Max 10K | Günde 1K",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3430",
        "service_id": "2331",
        "service_name": "💚 2331 - Instagram Oto Beğeni | Japon + Karışık | Max 1K | Günde 1K",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "3431",
        "service_id": "2332",
        "service_name": "💚 2332 - Instagram Oto Beğeni | Yabancı Beğeni | Max 200K | Saatte 15K Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3380",
        "service_id": "2334",
        "service_name": "🎥 2334 - Instagram Oto Video İzlenme | Video+Reel | Max 10M | %100 Türk 🇹🇷",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11078",
        "service_id": "2341",
        "service_name": "● 2341 - Instagram Oto Etkileşim + Paylaşım",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11080",
        "service_id": "2342",
        "service_name": "● 2342 - Instagram Oto Etkileşim + Paylaşım + Erişim + Gösterim",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11082",
        "service_id": "2343",
        "service_name": "● 2343 - Instagram Oto Etkileşim + Paylaşım + Erişim + Gösterim + Profil Ziyareti",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11050",
        "service_id": "2347",
        "service_name": "🔺 2347 ~ YouTube İzlenme - [🇰🇷 KORE 🇰🇷] [ Gerçek Aktif İzleyiciler ] [ Maks 100K ] [ Günde 500 Adet ] [ 0-1 Saat Başlangıç ]",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3456",
        "service_id": "2350",
        "service_name": "🔺 2350 - Youtube Beğeni | Max 75K | 30 Gün Garantili | Anlık Başlangıç | Günde 30-60K",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "3338",
        "service_id": "2359",
        "service_name": "◆ 2359 - TikTok Takipçi | Brezilya | Max 50K | Günde 50K | 30 Gün Garantili | Anlık",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3342",
        "service_id": "2364",
        "service_name": "◆ 2364 - TikTok Beğeni | Max 2M | Garantisiz | Günde 1K Hız",
        "price": "61.00",
        "percent": "1"
    },
    {
        "id": "3343",
        "service_id": "2365",
        "service_name": "◆ 2365 - TikTok Beğeni | Max 2M | 30 Gün Garantili | Günde 100K Hız",
        "price": "44.00",
        "percent": "1"
    },
    {
        "id": "3382",
        "service_id": "2368",
        "service_name": "💙 2368 - Instagram Yabancı Beğeni | Max 200K | Hızlı Başlar | Saatte 2K-3K | Düşüş Yok",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3419",
        "service_id": "2370",
        "service_name": "💛 2370 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Maksimum 3K | Günde 1-2K Hız",
        "price": "55.00",
        "percent": "1"
    },
    {
        "id": "3387",
        "service_id": "2374",
        "service_name": "◆ 2374 - TikTok Takipçi | Brezilya | Max 50K | Günde 5-10K | 30 Gün Garantili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3553",
        "service_id": "2377",
        "service_name": "🔹 2377 - Facebook Video/Reels İzlenme | Max 1M | Günlük 100K Hız | 3 Saniye İzlenme Süresi\t",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3554",
        "service_id": "2378",
        "service_name": "🔹 2378 - Facebook Video/Reels İzlenme | Max 1M | Günlük 100K Hız | 10 Saniye İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3555",
        "service_id": "2379",
        "service_name": "🔹 2379 - Facebook Video/Reels İzlenme | Max 1M | Günlük 100K Hız | 15 Saniye İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3556",
        "service_id": "2380",
        "service_name": "🔹 2380 - Facebook Video/Reels İzlenme | Max 1M | Günlük 100K Hız | 30 Saniye İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3557",
        "service_id": "2381",
        "service_name": "🔹 2381 - Facebook Video/Reels İzlenme | Max 1M | Günlük 100K Hız | 1 Dakika İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3558",
        "service_id": "2382",
        "service_name": "🔹 2382 - Facebook Video/Reels İzlenme | Max 1M | Günlük 100K Hız | 3 Dakika İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3559",
        "service_id": "2383",
        "service_name": "🔹 2383 - Facebook Video/Reels İzlenme | Max 1M | Günlük 100K Hız | 6 Dakika İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3560",
        "service_id": "2384",
        "service_name": "🔹 2384 - Facebook Video/Reels İzlenme | Max 1M | Günlük 100K Hız | 10 Dakika İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3529",
        "service_id": "2393",
        "service_name": "🔹 2393 - Facebook Sayfa Beğeni + Takipçi | %70 Brezilya | Max 200K | Günlük 20K Hız | 15 Gün Garantili | 0-30 Dakika Başlangıç",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3651",
        "service_id": "2425",
        "service_name": "● 2425 - İnstagram Canlı Yayın İzlenme | Max 20K | 15 Dakika Boyunca | Sadece Kullanıcı Adı Giriniz!",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3652",
        "service_id": "2426",
        "service_name": "● 2426 - İnstagram Canlı Yayın İzlenme | Max 20K | 30 Dakika Boyunca | Sadece Kullanıcı Adı Giriniz!",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3653",
        "service_id": "2427",
        "service_name": "● 2427 - İnstagram Canlı Yayın İzlenme | Max 20K | 60 Dakika Boyunca | Sadece Kullanıcı Adı Giriniz!",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3654",
        "service_id": "2428",
        "service_name": "● 2428 - İnstagram Canlı Yayın İzlenme | Max 20K | 90 Dakika Boyunca | Sadece Kullanıcı Adı Giriniz!",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3655",
        "service_id": "2429",
        "service_name": "● 2429 - İnstagram Canlı Yayın İzlenme | Max 20K | 120 Dakika Boyunca | Sadece Kullanıcı Adı Giriniz!",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3656",
        "service_id": "2430",
        "service_name": "● 2430 - İnstagram Canlı Yayın İzlenme | Max 20K | 180 Dakika Boyunca | Sadece Kullanıcı Adı Giriniz!",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3657",
        "service_id": "2431",
        "service_name": "● 2431 - İnstagram Canlı Yayın İzlenme | Max 20K | 240 Dakika Boyunca | Sadece Kullanıcı Adı Giriniz!",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3658",
        "service_id": "2432",
        "service_name": "● 2432 - İnstagram Canlı Yayın İzlenme | Max 20K | 360 Dakika Boyunca | Sadece Kullanıcı Adı Giriniz!",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10737",
        "service_id": "2433",
        "service_name": "🎥 2433 - Instagram Oto Video İzlenme | Günde 50-100K Hız | %100 Türk 🇹🇷",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3673",
        "service_id": "2434",
        "service_name": "📀 2434 -  Spotify Doğal Dinlenme (Plays) | Max 10K | Günde 100-300 | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3674",
        "service_id": "2435",
        "service_name": "📀 2435 - Spotify Sanatçı Dinlenme (Plays) | Max 500K | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3675",
        "service_id": "2436",
        "service_name": "📀 2436 - Spotify Albüm Dinlenme (Plays) | Max 500K | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3676",
        "service_id": "2437",
        "service_name": "📀 2437 - Spotify Parça Dinlenme (Plays) | Max 500K | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3677",
        "service_id": "2439",
        "service_name": "📀 2439 - Spotify Çalma Listesi Dinlenme (Plays) | Max 500K | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3678",
        "service_id": "2441",
        "service_name": "📀 2441 - Spotify  Dinlenme (Plays) | 🇺🇸 AMERİKA| Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3679",
        "service_id": "2442",
        "service_name": "📀 2442 - Spotify Dinlenme (Plays) | 🇬🇧 İNGİLTERE | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3680",
        "service_id": "2443",
        "service_name": "📀 2443 - Spotify Dinlenme (Plays) |  🇨🇦 KANADA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3681",
        "service_id": "2444",
        "service_name": "📀 2444 - Spotify Dinlenme (Plays) | 🇫🇷 FRANSA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3682",
        "service_id": "2445",
        "service_name": "📀 2445 - Spotify Dinlenme (Plays) | 🇩🇪 ALMANYA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3683",
        "service_id": "2446",
        "service_name": "📀 2446 - Spotify Dinlenme (Plays) |  🇮🇹 İTALYA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3684",
        "service_id": "2447",
        "service_name": "📀 2447 - Spotify Dinlenme (Plays) | 🇪🇸 İSPANYA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3685",
        "service_id": "2448",
        "service_name": "📀 2448 - Spotify Dinlenme (Plays) | 🇵🇹 PORTEKİZ | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3686",
        "service_id": "2449",
        "service_name": "📀 2449 - Spotify Dinlenme (Plays) | 🇧🇷 BREZİLYA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3688",
        "service_id": "2451",
        "service_name": "📀 2451 - Spotify Dinlenme (Plays) | 🇳🇴 NORVEÇ | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3689",
        "service_id": "2452",
        "service_name": "📀 2452 - Spotify Dinlenme (Plays) |  🇸🇪 İSVEÇ | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3690",
        "service_id": "2453",
        "service_name": "📀 2453 - Spotify Dinlenme (Plays) | 🇨🇭 İSVİÇRE | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3691",
        "service_id": "2454",
        "service_name": "📀 2454 - Spotify Dinlenme (Plays) | 🇧🇪 BELÇİKA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3692",
        "service_id": "2455",
        "service_name": "📀 2455 - Spotify Dinlenme (Plays) | 🇳🇱 HOLLANDA  | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3693",
        "service_id": "2456",
        "service_name": "📀 2456 - Spotify Dinlenme (Plays) |  🇦🇹 AVUSTURYA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3694",
        "service_id": "2457",
        "service_name": "📀 2457 - Spotify Dinlenme (Plays) |  🇳🇿 YENİ ZELANDA  | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3695",
        "service_id": "2458",
        "service_name": "📀 2458 - Spotify Dinlenme (Plays) | 🇦🇷 ARJANTİN | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3696",
        "service_id": "2459",
        "service_name": "📀 2459 - Spotify Dinlenme (Plays) | 🇨🇷 KOSTA RİKA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3697",
        "service_id": "2460",
        "service_name": "📀 2460 - Spotify Dinlenme (Plays) | 🇨🇷 KOLOMBİYA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3698",
        "service_id": "2461",
        "service_name": "📀 2461 - Spotify Dinlenme (Plays) | 🇮🇪 İRLANDA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3699",
        "service_id": "2462",
        "service_name": "📀 2462 - Spotify Dinlenme (Plays) | 🇦🇺  AVUSTRALYA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3700",
        "service_id": "2463",
        "service_name": "📀 2463 - Spotify Dinlenme (Plays) | 🇲🇽 MEKSİKA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3701",
        "service_id": "2464",
        "service_name": "📀 2464 - Spotify Dinlenme (Plays) | 🇬🇷 YUNANİSTAN | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3702",
        "service_id": "2465",
        "service_name": "📀 2465 - Spotify Dinlenme (Plays) |  🇷🇴  ROMANYA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3703",
        "service_id": "2466",
        "service_name": "📀 2466 - Spotify Dinlenme (Plays) | 🇩🇰 DANİMARKA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3704",
        "service_id": "2467",
        "service_name": "📀 2467 - Spotify Dinlenme (Plays) | 🇱🇺 LÜKSEMBURG | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3705",
        "service_id": "2468",
        "service_name": "📀 2468 - Spotify Dinlenme (Plays) | 🇨🇱 ŞİLİ | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3706",
        "service_id": "2469",
        "service_name": "📀 2469 - Spotify Dinlenme (Plays) | 🇵🇪 PERU | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3707",
        "service_id": "2470",
        "service_name": "📀 2470 - Spotify Dinlenme (Plays) | 🇵🇾 PARAGUAY | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3710",
        "service_id": "2473",
        "service_name": "📀 2473 - Spotify Dinlenme (Plays) | 🇻🇪 VENEZUELA | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3711",
        "service_id": "2474",
        "service_name": "📀 2474 - Spotify Dinlenme (Plays) | 🇲🇦 FAS | Max 500 | Günde 80K | Düşme Yok | Mobil - Güvenl4",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3712",
        "service_id": "2475",
        "service_name": "📀 2475 - Spotify Dinlenme (Plays) | İNGİLİZ KONUŞMACILAR | Max 500K | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3713",
        "service_id": "2476",
        "service_name": "📀 2476 - Spotify Dinlenme (Plays) | FRANSIZ KONUŞMACILAR | Max 500K | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3714",
        "service_id": "2477",
        "service_name": "📀 2477 - Spotify Dinlenme (Plays) | İSPANYOL KONUŞMACILAR | Max 500K | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3715",
        "service_id": "2478",
        "service_name": "📀 2478 - Spotify Dinlenme (Plays) | LATİN KONUŞMACILAR | Max 500K | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3716",
        "service_id": "2479",
        "service_name": "📀 2479 - Spotify Dinlenme (Plays) | PORTEKİZ KONUŞMACILAR | Max 500K | Günde 80K | Düşme Yok | Mobil - Güvenli\t",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "3717",
        "service_id": "2480",
        "service_name": "📀 2480 - Spotify Dinlenme (Plays) | ALMAN KONUŞMACILAR | Max 500K | Günde 80K | Düşme Yok | Mobil - Güvenli",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11253",
        "service_id": "2567",
        "service_name": "🎥 2567 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 100K Hız",
        "price": "59.00",
        "percent": "1"
    },
    {
        "id": "11254",
        "service_id": "2570",
        "service_name": "🎥 2570 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 50-100K Hız",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "3840",
        "service_id": "2572",
        "service_name": "🎥 2572 - Instagram Oto Video İzlenme | %100 Türk 🇹🇷 | Hızlı",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11338",
        "service_id": "2573",
        "service_name": "🎥 2573 - Instagram Oto Video İzlenme | Max 100M | Video + Reel",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11453",
        "service_id": "2581",
        "service_name": "🔹 2581 - Facebook -Profil- Takipçisi | Max 100K | Günlük 5-10K Hız | Ömür Boyu Garantili",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "3758",
        "service_id": "2584",
        "service_name": "◆ 2584 - TikTok Takipçi | Brezilya | Max 30K | Günde 30K | Anlık",
        "price": "69.00",
        "percent": "1"
    },
    {
        "id": "11418",
        "service_id": "2589",
        "service_name": "🔺 2589 - Youtube Beğeni | Max 100K | 30 Gün Garantili | Anlık",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11497",
        "service_id": "2594",
        "service_name": "◆ 2594 - TikTok Takipçi | Max 10K | 0-1 Saat Başlangıç | Günde 1-2K",
        "price": "59.00",
        "percent": "1"
    },
    {
        "id": "3783",
        "service_id": "2596",
        "service_name": "◆ 2596 - TikTok Takipçi | Brezilya | Max 30K | Günde 10-20K | 30 Gün Garantili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "3784",
        "service_id": "2597",
        "service_name": "◆ 2597 - TikTok Takipçi | Brezilya | Max 50K | Günde 10-15K | 30 Gün Garantili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11506",
        "service_id": "2606",
        "service_name": "🎥 2606 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 5-10K",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "10924",
        "service_id": "2607",
        "service_name": "🎥 2607 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 200K Hız",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "11469",
        "service_id": "2638",
        "service_name": "◆ 2638 - TikTok Takipçi | Max 100K | Anlık Başlangıç | Günde 5-10K | Garantisiz",
        "price": "55.00",
        "percent": "1"
    },
    {
        "id": "3872",
        "service_id": "2679",
        "service_name": "🔹 2679 - Facebook Canlı Yayın İzlenme [Max 10K] [15 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3873",
        "service_id": "2680",
        "service_name": "🔹 2680 - Facebook Canlı Yayın İzlenme [Max 10K] [30 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3874",
        "service_id": "2681",
        "service_name": "🔹 2681 - Facebook Canlı Yayın İzlenme [Max 10K] [60 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3875",
        "service_id": "2682",
        "service_name": "🔹 2682 - Facebook Canlı Yayın İzlenme [Max 10K] [90 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3876",
        "service_id": "2683",
        "service_name": "🔹 2683 - Facebook Canlı Yayın İzlenme [Max 10K] [120 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3877",
        "service_id": "2684",
        "service_name": "🔹 2684 - Facebook Canlı Yayın İzlenme [Max 10K] [180 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3878",
        "service_id": "2685",
        "service_name": "🔹 2685 - Facebook Canlı Yayın İzlenme [Max 10K] [240 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3879",
        "service_id": "2686",
        "service_name": "🔹 2686 - Facebook Canlı Yayın İzlenme [Max 10K] [300 Dakika]\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10788",
        "service_id": "2698",
        "service_name": "2698 - Linkedin Gerçek Beğeni | Max 20K | Günde 500-1K | Garantisiz | 0-1 Saat Başlangıç\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "3894",
        "service_id": "2701",
        "service_name": "🔺 2701 - Youtube Video İzlenme | RAV™ - Gerçek İzlenme | Max 100K | 30 Gün Garantili | 0-1 Saat Başlangıç | Günde 2-4K Hız\t",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10651",
        "service_id": "2703",
        "service_name": "🔺 2703 - Youtube Video İzlenme | RAV™ - Gerçek İzlenme | 30 Gün Garantili | 0-12 Saat Başlangıç | Günde 300-500K Hız | Hızlı",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "10796",
        "service_id": "2704",
        "service_name": "🔹 2704 - Facebook Gönderi Beğeni | Max 10K | Günlük 5-10K | Garantisiz | Anlık Başlangıç",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10605",
        "service_id": "3578",
        "service_name": "🔺 3578 - Youtube Video İzlenme | Max 1M | Ömür Boyu Garantili | Anlık Başlangıç | Günde 15-30K Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10955",
        "service_id": "3579",
        "service_name": "⭐ 3579 - Instagram Takipçi | Max 20K | ÇİN 🇨🇳  | Yüksek Kaliteli | Günde 250-500 | 30 Gün Telafili | 0-6 Saat Başlangıç",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10952",
        "service_id": "3580",
        "service_name": "⭐ 3580 - Instagram Takipçi | Max 1K | ENDONEZYA 🇮🇩 | Yüksek Kaliteli  | 15 Gün Garantili",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11282",
        "service_id": "3584",
        "service_name": "🔹 3584 - Facebook Gönderi Emoji Beğeni (❤️) | 10K | %100 Gerçek | Günde 10K Hız | 30 Gün Garantili | Anlık Başlangıç",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11283",
        "service_id": "3585",
        "service_name": "🔹 3585 - Facebook Gönderi Emoji Beğeni (😲) | 10K | %100 Gerçek | Günde 10K Hız | 30 Gün Garantili | Anlık Başlangıç\t",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11284",
        "service_id": "3586",
        "service_name": "🔹 3586 - Facebook Gönderi Emoji Beğeni (😀) | 10K | %100 Gerçek | Günde 10K Hız | 30 Gün Garantili | Anlık Başlangıç\t",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11285",
        "service_id": "3587",
        "service_name": "🔹 3587 - Facebook Gönderi Emoji Beğeni (😢) | 10K | %100 Gerçek | Günde 10K Hız | 30 Gün Garantili | Anlık Başlangıç\t",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11286",
        "service_id": "3588",
        "service_name": "🔹 3588 - Facebook Gönderi Emoji Beğeni (😡) | 10K | %100 Gerçek | Günde 10K Hız | 30 Gün Garantili | Anlık Başlangıç\t",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11287",
        "service_id": "3589",
        "service_name": "🔹 3589 - Facebook Gönderi Emoji Beğeni (🥰) | 10K | %100 Gerçek | Günde 10K Hız | 30 Gün Garantili | Anlık Başlangıç\t",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11245",
        "service_id": "3595",
        "service_name": "💠 3595 - Twitter Video İzlenme | Max 100M | Anlık",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "10958",
        "service_id": "3599",
        "service_name": "⭐ 3599 - Instagram Takipçi | Max 4K | ARAB 🇸🇦 🇪🇬 🇲🇦 🇯🇴 | 30 Gün Otomatik Telafili | Günde 500-1K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11096",
        "service_id": "3601",
        "service_name": "💙 3601 - Instagram Yabancı Beğeni | Max 200K | Günde 30K | Düşüş Yok | Garantisiz",
        "price": "82.00",
        "percent": "1"
    },
    {
        "id": "11391",
        "service_id": "3602",
        "service_name": "💬 3602 - İnstagram Özel Yorum | Max 1K | (Yabancı Hesaplardan İstediğiniz Yorum)",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10790",
        "service_id": "3610",
        "service_name": "3610 -⭐ Instagram Çekilişle Takipçi | Max 3000 | %100 Türk Organik 🇹🇷 | Günlük İşleme Alınır - HIZLI\t",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10640",
        "service_id": "3612",
        "service_name": "3612 - ⭐ Instagram Çekilişle Takipçi | Max 2000 | %100 Türk Organik 🇹🇷 | Günlük İşleme Alınır - TEK PAKET\t",
        "price": "74.00",
        "percent": "1"
    },
    {
        "id": "10791",
        "service_id": "3613",
        "service_name": "3613 -⭐ Instagram Çekilişle Takipçi | Max 3000 | %100 Türk Organik 🇹🇷 | Günlük İşleme Alınır - TEK PAKET\t\t",
        "price": "74.00",
        "percent": "1"
    },
    {
        "id": "10792",
        "service_id": "3614",
        "service_name": "3614 -⭐ Instagram Çekilişle Takipçi | Max 5000 | %100 Türk Organik 🇹🇷 | Günlük İşleme Alınır - TEK PAKET\t\t",
        "price": "74.00",
        "percent": "1"
    },
    {
        "id": "10627",
        "service_id": "3615",
        "service_name": "3615-⭐ Instagram Çekilişle Takipçi | Max 10000 | %100 Türk Organik 🇹🇷 | Günlük İşleme Alınır - TEK PAKET\t\t",
        "price": "65.00",
        "percent": "1"
    },
    {
        "id": "10639",
        "service_id": "3616",
        "service_name": "3616 -⭐ Instagram Çekilişle Takipçi | Max 50000 | %100 Türk Organik 🇹🇷 | Günlük İşleme Alınır - TEK PAKET\t\t",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11365",
        "service_id": "3617",
        "service_name": "🎥 3617 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 20K Hız",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11339",
        "service_id": "3618",
        "service_name": "🎥 3618 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 20-50K Hız",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "11340",
        "service_id": "3619",
        "service_name": "🎥 3619 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 50K Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10736",
        "service_id": "3620",
        "service_name": "🎥 3620 - Instagram Video İzlenme | Keşfet Etkili | Video + Reel | Max 10M | %100 Türk 🇹🇷 | Anlık",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11443",
        "service_id": "3634",
        "service_name": "⭐ 3634 - Instagram Takipçi | Max 5K | %100 Türk 🇹🇷 | Kadın Hesaplar | İptal Butonlu ⛔",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "10868",
        "service_id": "3661",
        "service_name": "⭐ 3661 - Instagram Takipçi | Max 10K | %100 Türk 🇹🇷 | İptal Butonlu ⛔",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "10798",
        "service_id": "3662",
        "service_name": "❤️ 3662 - Instagram Türk Beğeni 🇹🇷 | Maksimum 4K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10748",
        "service_id": "3668",
        "service_name": "❤️ 3668 - Instagram Türk Beğeni 🇹🇷 | Maksimum 15K | Geç Başlar",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "10749",
        "service_id": "3669",
        "service_name": "❤️ 3669 - Instagram Türk Beğeni 🇹🇷 | Maksimum 10K | Saatte 1K Hız",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "10750",
        "service_id": "3670",
        "service_name": "❤️ 3670 - Instagram Türk Beğeni 🇹🇷 | Maksimum 5K",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "10751",
        "service_id": "3671",
        "service_name": "❤️ 3671 - Instagram Türk Beğeni 🇹🇷 | Maksimum 100K | Saatte 100-200 Hız",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "11246",
        "service_id": "3673",
        "service_name": "💬 3673 - Instagram Türk Random Yorum 🇹🇷 | Max 1K | %100 Gerçek Kullanıcılar | Düşme Olmaz | Hızlı Başlar",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10795",
        "service_id": "3677",
        "service_name": "🌟 3677 - Instagram Takipçi | Max 1M | 365 Gün Telafili | 24-72 Saat Başlangıç | Günde 500 Hız",
        "price": "79.00",
        "percent": "1"
    },
    {
        "id": "10828",
        "service_id": "3678",
        "service_name": "● 3678 - İnstagram 1 Hikaye İzlenme | Max 100K | %100 Türk 🇹🇷 | 1 Hikaye",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "10829",
        "service_id": "3679",
        "service_name": "● 3679 - İnstagram Hikaye İzlenme | Max 20K | %100 Türk 🇹🇷 | Tüm Hikayeler",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "10757",
        "service_id": "3682",
        "service_name": "🇹🇷 3682 - Premium Türk Takipçi | Max 20K | %100 Türk | 30 Gün Telafili | Saatte 3K",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "10758",
        "service_id": "3683",
        "service_name": "🇹🇷 3683 - Premium Türk Beğeni | Max 100K | %100 Türk | Saatte 3K",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "10759",
        "service_id": "3684",
        "service_name": "🇦🇿 3684 - Instagram Azeri Kadın Takipçi | Max 20K | %100 Azeri Hikayeli Kullanıcılar 🇦🇿 | 30 Gün Garantili | Anlık Başlar | Saatte 3K",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "10760",
        "service_id": "3685",
        "service_name": "🇦🇿 3685 - Instagram Azeri Kadın Beğeni | Max 20K | %100 Azeri Hikayeli Kadın Kullanıcılar 🇦🇿 | Saatte 3K",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "10761",
        "service_id": "3686",
        "service_name": "🔺 3686 - Youtube Shorts İzlenme | Max 100K | 30 Gün Garantili | 0-1 Saat Başlangıç | Günde 2-4K Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10762",
        "service_id": "3687",
        "service_name": "🔺 3687 - Youtube Shorts İzlenme | Max 1M | Ömür Boyu Garantili | Anlık Başlangıç | Günde 15-30K Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10763",
        "service_id": "3688",
        "service_name": "🔺 3688 - Youtube Shorts İzlenme | Max 500K | 90 Gün Garantili | 0-10 Dakika Başlangıç | Günde 1-3K Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10766",
        "service_id": "3690",
        "service_name": "👍 3690 - Youtube Shorts Video Beğeni | Max 50K | 30 Gün Garantili | Günlük 50K",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11059",
        "service_id": "3713",
        "service_name": "🔺 3713 - YouTube Abone | Max 100K | 30 Gün Otomatik Telafili | Günde 1-3K Hız",
        "price": "63.00",
        "percent": "1"
    },
    {
        "id": "10855",
        "service_id": "3715",
        "service_name": "💠 3715 ~ Twitter Beğeni | Max 10K | %100 Gerçek Global Kullanıcılar | Günde 10K Hız | Düşüş Az | Garantisiz",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11436",
        "service_id": "3716",
        "service_name": "◆ 3716 - TikTok Takipçi | Karışık Resimsiz | Max 100K | Günde 5-10K",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11148",
        "service_id": "3718",
        "service_name": "◆ 3718 - TikTok Takipçi | Max 100K | 0-10 Dakika Başlangıç | Günde 15-20K",
        "price": "79.00",
        "percent": "1"
    },
    {
        "id": "10793",
        "service_id": "3720",
        "service_name": "◆ 3720 - TikTok Beğeni | Max 500K | Garantisiz | Günde 10K Hız",
        "price": "59.00",
        "percent": "1"
    },
    {
        "id": "10799",
        "service_id": "3721",
        "service_name": "🔹 3721 - Facebook Gönderi/Durum Beğeni | Max 15K | Günde 500-1K Hız | Garantisiz",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "10800",
        "service_id": "3722",
        "service_name": "💛 3722 - Instagram Oto Beğeni | %100 Türk Kadın 🇹🇷 | Max 200K",
        "price": "72.00",
        "percent": "1"
    },
    {
        "id": "11397",
        "service_id": "3723",
        "service_name": " 💠 3723 - Twitter Takipçi | Max 10K | Günde 150-250 | Garantisiz | Doğal Artar",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11065",
        "service_id": "3728",
        "service_name": "🔹 3728 - Facebook Canlı Yayın İzlenme [Max 15K] [15 Dakika]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11066",
        "service_id": "3729",
        "service_name": "🔹 3729 - Facebook Canlı Yayın İzlenme [Max 15K] [30 Dakika]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11068",
        "service_id": "3731",
        "service_name": "🔹 3731 - Facebook Canlı Yayın İzlenme [Max 15K] [60 Dakika]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11069",
        "service_id": "3732",
        "service_name": "🔹 3732 - Facebook Canlı Yayın İzlenme [Max 15K] [90 Dakika]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11070",
        "service_id": "3733",
        "service_name": "🔹 3733 - Facebook Canlı Yayın İzlenme [Max 15K] [2 Saat]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11071",
        "service_id": "3734",
        "service_name": "🔹 3734 - Facebook Canlı Yayın İzlenme [Max 15K] [2.5 Saat]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11072",
        "service_id": "3735",
        "service_name": "🔹 3735 - Facebook Canlı Yayın İzlenme [Max 15K] [3 Saat]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11073",
        "service_id": "3736",
        "service_name": "🔹 3736 - Facebook Canlı Yayın İzlenme [Max 15K] [3.5 Saat]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11074",
        "service_id": "3737",
        "service_name": "🔹 3737 - Facebook Canlı Yayın İzlenme [Max 15K] [4 Saat]",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11444",
        "service_id": "3748",
        "service_name": "◆ 3748 - TikTok Takipçi | Max 250K | Günde 5-10K Hız | Garantisiz",
        "price": "38.00",
        "percent": "1"
    },
    {
        "id": "10837",
        "service_id": "3766",
        "service_name": "3766 - 🏦 Instagram İşletme ve Fenomen Büyütme Paketi | Bronz Paket 🥉 | Açıklamayı Dikkatle Okuyunuz !",
        "price": "71.00",
        "percent": "1"
    },
    {
        "id": "10838",
        "service_id": "3767",
        "service_name": "3767 - 🏦 Instagram İşletme ve Fenomen Büyütme Paketi | Gümüş Paket 🥈 | Açıklamayı Dikkatle Okuyunuz !",
        "price": "71.00",
        "percent": "1"
    },
    {
        "id": "10839",
        "service_id": "3768",
        "service_name": "3768 - 🏦 Instagram İşletme ve Fenomen Büyütme Paketi | Altın Paket 🥇 | Açıklamayı Dikkatle Okuyunuz !",
        "price": "71.00",
        "percent": "1"
    },
    {
        "id": "10840",
        "service_id": "3769",
        "service_name": "3769 - 🏦 Instagram İşletme ve Fenomen Büyütme Paketi | Elmas Paket 💎 | Açıklamayı Dikkatle Okuyunuz !",
        "price": "71.00",
        "percent": "1"
    },
    {
        "id": "10846",
        "service_id": "3770",
        "service_name": "❤️ 3770 - Instagram Türk Beğeni 🇹🇷 | Maksimum 30K | Saatte 500-1K Hız",
        "price": "83.00",
        "percent": "1"
    },
    {
        "id": "10847",
        "service_id": "3771",
        "service_name": "💛 3771 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 100K | Anlık",
        "price": "83.00",
        "percent": "1"
    },
    {
        "id": "10965",
        "service_id": "3772",
        "service_name": "◆ 3772 - TikTok Takipçi | Global | Max 35K | Günde 5K | 30 Gün Garantili",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "11150",
        "service_id": "3773",
        "service_name": "◆ 3773 - TikTok Takipçi | Brezilya - Erkek | Max 10K | Günde 5K | 30 Gün Garantili",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "11151",
        "service_id": "3774",
        "service_name": "◆ 3774 - TikTok Takipçi | Brezilya - Kadın | Max 10K | Günde 5K | 30 Gün Garantili",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "10852",
        "service_id": "3775",
        "service_name": " 💠 3775 - Twitter Takipçi | Amerika 🇺🇸 | Max 150 | Günde 1-2K Hız | Garantisiz",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "11138",
        "service_id": "3777",
        "service_name": "❤️ 3777 - Instagram Türk Beğeni 🇹🇷 | Maksimum 20K | Saatte 500-1K Hız",
        "price": "73.00",
        "percent": "1"
    },
    {
        "id": "11117",
        "service_id": "3778",
        "service_name": "❤️ 3778 - Instagram Türk Beğeni 🇹🇷 | Maksimum 40K | Günde 2K Hız",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "11226",
        "service_id": "3781",
        "service_name": "⭐ 3781 - Instagram Takipçi | Max 10K | %100 Türk 🇹🇷 | 30 Gün Garantili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "10872",
        "service_id": "3787",
        "service_name": "🔹 3787 - Facebook Sayfa/Profil Takipçisi | Max 500K | Günlük 500-1K Hız | 30 Gün Garantili",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11449",
        "service_id": "3788",
        "service_name": "🔹 3788 - Facebook Sayfa/Profil Takipçisi | Max 500K | Günlük 1-2K Hız | Ömür Boyu Garantili",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "10932",
        "service_id": "3803",
        "service_name": "⭐ 3803 - Instagram Takipçi | Max 30K | GÜNEY KORE 🇰🇷 | Günde 1-2K Hız | Ömür Boyu Garantili",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10933",
        "service_id": "3804",
        "service_name": "⭐ 3804 - Instagram Takipçi | Max 30K | GÜNEY KORE 🇰🇷 - ERKEK | Günde 1-2K Hız | Ömür Boyu Garantili",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10934",
        "service_id": "3805",
        "service_name": "⭐ 3805 - Instagram Takipçi | Max 30K | GÜNEY KORE 🇰🇷 - KADIN | Günde 1-2K Hız | Ömür Boyu Garantili",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "10881",
        "service_id": "3806",
        "service_name": "◆ 3806 - TikTok Beğeni | Max 50K | Güney Asya | 30 Gün Garantili | Günde 20K Hız",
        "price": "12.50",
        "percent": "0"
    },
    {
        "id": "10890",
        "service_id": "3812",
        "service_name": "⭐ 3812 - Instagram Takipçi | Max 10K | %100 Türk 🇹🇷 | Kadın Hesaplar | 30 Gün Telafili",
        "price": "69.00",
        "percent": "1"
    },
    {
        "id": "10925",
        "service_id": "3823",
        "service_name": "⭐ 3823 - Instagram Takipçi | Max 10K | AMERİKA 🇺🇸 | Günde 5K",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "10926",
        "service_id": "3824",
        "service_name": "⭐ 3824 - Instagram Takipçi | Max 10K | AMERİKA 🇺🇸 | Günde 5K | 30 Gün Garantili",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "10927",
        "service_id": "3825",
        "service_name": "⭐ 3825 - Instagram Takipçi | Max 100K | AMERİKA 🇺🇸 | Saatte 300 Hız | 30 Gün Garantili",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "10928",
        "service_id": "3826",
        "service_name": "⭐ 3826 - Instagram Takipçi | Max 100K | AMERİKA 🇺🇸 - ERKEK | Saatte 300 Hız | 30 Gün Garantili",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "10929",
        "service_id": "3827",
        "service_name": "⭐ 3827 - Instagram Takipçi | Max 100K | AMERİKA 🇺🇸 - KADIN | Saatte 300 Hız | 30 Gün Garantili",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "10937",
        "service_id": "3830",
        "service_name": "⭐ 3830 - Instagram Takipçi | Max 15K | BREZİLYA 🇧🇷 | Günde 100-250 | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10945",
        "service_id": "3838",
        "service_name": "⭐ 3838 - Instagram Takipçi | Max 100K | İSPANYA 🇪🇸 | Günde 5K | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10946",
        "service_id": "3839",
        "service_name": "⭐ 3839 - Instagram Takipçi | Max 100K | İSPANYA 🇪🇸 - ERKEK | Günde 5K | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10947",
        "service_id": "3840",
        "service_name": "⭐ 3840 - Instagram Takipçi | Max 100K | İSPANYA 🇪🇸 - KADIN | Günde 5K | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10948",
        "service_id": "3841",
        "service_name": "⭐ 3841 - Instagram Takipçi | Max 10K | NİJERYA 🇳🇬 | Günde 5K",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10949",
        "service_id": "3842",
        "service_name": "⭐ 3842 - Instagram Takipçi | Max 10K | NİJERYA 🇳🇬 | Günde 5K | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10950",
        "service_id": "3843",
        "service_name": "⭐ 3843 - Instagram Takipçi | Max 5K | ENDONEZYA 🇮🇩 | Günde 5K | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10951",
        "service_id": "3844",
        "service_name": "⭐ 3844 - Instagram Takipçi | Max 10K | ENDONEZYA 🇮🇩 | Günde 10K | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10953",
        "service_id": "3845",
        "service_name": "⭐ 3845 - Instagram Takipçi | Max 10K | ÇİN 🇨🇳 | Günde 5K",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10954",
        "service_id": "3846",
        "service_name": "⭐ 3846 - Instagram Takipçi | Max 10K | ÇİN 🇨🇳 | Günde 5K | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10956",
        "service_id": "3847",
        "service_name": "⭐ 3847 - Instagram Takipçi | Max 10K | ARAB 🇮🇶 | Günde 5K",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10957",
        "service_id": "3848",
        "service_name": "⭐ 3848 - Instagram Takipçi | Max 25K | ARAB 🇮🇶 | Günde 10K | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10959",
        "service_id": "3849",
        "service_name": "⭐ 3849 - Instagram Takipçi | Max 10K | PAKISTAN 🇵🇰 | Günde 5K",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "10960",
        "service_id": "3850",
        "service_name": "⭐ 3850 - Instagram Takipçi | Max 10K | PAKISTAN 🇵🇰 | Günde 5K | 30 Gün Garantili",
        "price": "67.00",
        "percent": "1"
    },
    {
        "id": "11342",
        "service_id": "3851",
        "service_name": "🔺 3851 - YouTube Özel Yorum | Max 1500 | 0-30 Dakika Başlangıç",
        "price": "71.00",
        "percent": "1"
    },
    {
        "id": "11052",
        "service_id": "3852",
        "service_name": "🔺 3852 - Youtube Video  İzlenme | Max 100K | 30 Gün Garantili | Günde 3-5K Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11377",
        "service_id": "3853",
        "service_name": "🔺 3853 - Youtube Video İzlenme | Max 100M | Ömür Boyu Garantili | Günde 30K-50K Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11055",
        "service_id": "3854",
        "service_name": "💠 3854 - Twitter Retweet | Japon 🇯🇵 | Max 2K | Günde 500",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11056",
        "service_id": "3855",
        "service_name": "💠 3855 - Twitter Retweet | Kore 🇰🇷 | Max 1K | Günde 500",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11054",
        "service_id": "3856",
        "service_name": "💠 3856 - Twitter Retweet | Max 100K | Günde 1-2K Hız",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11077",
        "service_id": "3861",
        "service_name": "🌀 3861 - Telegram Kanal Üyeleri | Max 50K | Garantisiz | Günde 1-3K | Gerçek Kullanıcılar - Düşme Az",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11075",
        "service_id": "3862",
        "service_name": "🌀 3862 - Telegram Kanal Üyeleri | Max 200K | 30 Gün Garantili | Günde 500-1K | Gerçek Kullanıcılar - Düşme Az!",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11097",
        "service_id": "3865",
        "service_name": "💙 3865 - Instagram Yabancı Beğeni | Max 300K | Saatte 2K Hız",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11118",
        "service_id": "3869",
        "service_name": "🔹 3869 - Facebook Video/Reels İzlenme | Max 1M | Günlük 500K Hız | 3 Saniye İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11119",
        "service_id": "3870",
        "service_name": "🔹 3870 - Facebook Video/Reels İzlenme | Max 10M | Günlük 500K Hız | 10 Saniye İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11120",
        "service_id": "3871",
        "service_name": "🔹 3871 - Facebook Video/Reels İzlenme | Max 10M | Günlük 500K Hız | 15 Saniye İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11121",
        "service_id": "3872",
        "service_name": "🔹 3872 - Facebook Video/Reels İzlenme | Max 10M | Günlük 500K Hız | 30 Saniye İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11122",
        "service_id": "3873",
        "service_name": "🔹 3873 - Facebook Video/Reels İzlenme | Max 10M | Günlük 500K Hız | 1 Dakika İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11123",
        "service_id": "3874",
        "service_name": "🔹 3874 - Facebook Video/Reels İzlenme | Max 10M | Günlük 500K Hız | 3 Dakika İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11124",
        "service_id": "3875",
        "service_name": "🔹 3875 - Facebook Video/Reels İzlenme | Max 10M | Günlük 500K Hız | 6 Dakika İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11125",
        "service_id": "3876",
        "service_name": "🔹 3875 - Facebook Video/Reels İzlenme | Max 10M | Günlük 500K Hız | 10 Dakika İzlenme Süresi",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11126",
        "service_id": "3880",
        "service_name": "❤️ 3880 - Instagram Türk Beğeni 🇹🇷 | Maksimum 5K | Günde 500 Hız",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11128",
        "service_id": "3881",
        "service_name": "❤️ 3881 - Instagram Türk Beğeni 🇹🇷 | Maksimum 100K | Günde 1K Hız",
        "price": "63.00",
        "percent": "1"
    },
    {
        "id": "11127",
        "service_id": "3882",
        "service_name": "💛 3882 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 5K | Hızlı",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11293",
        "service_id": "3883",
        "service_name": "💛 3883 - Instagram Oto Beğeni | %100 Türk 🇹🇷 | Max 10K | Hızlı",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11133",
        "service_id": "3886",
        "service_name": "3886 ~ 💎 Instagram Kanal Üyesi + Takipçi | %100 Türk 🇹🇷 | Max 100K",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "11134",
        "service_id": "3887",
        "service_name": "3887 ~ 💎 Instagram Kanal Üyesi + Takipçi | %100 Azeri 🇦🇿 | Max 100K",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "11135",
        "service_id": "3888",
        "service_name": "3888 ~ 💎 Instagram Kanal Üyesi + Takipçi | %100 Latin 🇦🇷 | Max 100K",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "11136",
        "service_id": "3889",
        "service_name": "3889 ~ 💎 Instagram Kanal Üyesi + Takipçi | %100 Global 🌍 | Max 100K",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "11140",
        "service_id": "3890",
        "service_name": "3890 ~ 🗳 🇹🇷 Instagram Türk Hikaye Anket Oylama | %100 Türk Kullanıcılar 🇹🇷 | Max 100K | Anlık Başlar",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11141",
        "service_id": "3891",
        "service_name": "3891 ~ 🗳 🇦🇿 Instagram Azeri Hikaye Anket Oylama | %100 Azeri Kullanıcılar 🇦🇿 | Max 100K | Anlık Başlar",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11142",
        "service_id": "3892",
        "service_name": "3892 ~ 🗳 🇦🇷 Instagram Latin Hikaye Anket Oylama | %100 Latin Kullanıcılar 🇦🇷 | Max 100K | Anlık Başlar",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11143",
        "service_id": "3893",
        "service_name": "3893 ~ 🗳 🌏 Instagram Global Hikaye Anket Oylama | %100 Global Kullanıcılar 🌏 | Max 100K | Anlık Başlar",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11139",
        "service_id": "3913",
        "service_name": "❤️ 3913 - Instagram Türk Beğeni 🇹🇷 | Maksimum 10K | Saatte 3-5K Hız",
        "price": "81.00",
        "percent": "1"
    },
    {
        "id": "11144",
        "service_id": "3914",
        "service_name": "❤️ 3914 - Instagram Türk Beğeni 🇹🇷 | Maksimum 3K | Günde 1-2K Hız",
        "price": "55.00",
        "percent": "1"
    },
    {
        "id": "11341",
        "service_id": "3915",
        "service_name": "🔺 3915 - YouTube Özel Yorum | Max 5K | 0-30 Dakika Başlangıç",
        "price": "71.00",
        "percent": "1"
    },
    {
        "id": "11217",
        "service_id": "3918",
        "service_name": "🔹 3918 - Facebook Brezilya Gönderi/Durum Beğeni 🇧🇷 | Max 10K | Günde 1-2K | 15 Gün Telafi",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "11471",
        "service_id": "3920",
        "service_name": "◆ 3920 - TikTok Takipçi | Max 1M | 0-5 Dakika Başlangıç | Günde 3-5K Hız",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "11146",
        "service_id": "3921",
        "service_name": "◆ 3921 - TikTok Takipçi | Max 250K | 0-5 Dakika Başlangıç | Günde 2-4K Hız",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11165",
        "service_id": "3924",
        "service_name": "❇️ 3924 ~ Kick Global Takipçi | Max 3K | 30 Gün Garantili | Hızlı",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11474",
        "service_id": "3929",
        "service_name": "💠 3929 - Twitter Takipçi | Max 10K | Günde 1-2K Hız | 30 Gün Garantili",
        "price": "74.00",
        "percent": "1"
    },
    {
        "id": "11170",
        "service_id": "3966",
        "service_name": "3966 ~ Instagram Türk Gerçek Beğeni 🇹🇷 | Maksimum 10K | Anlık",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11153",
        "service_id": "3967",
        "service_name": "⭐ 3967 - Instagram Takipçi | Max 20K | %100 Türk 🇹🇷 | Kadın Hesaplar | 90 Gün Telafili",
        "price": "69.00",
        "percent": "1"
    },
    {
        "id": "11154",
        "service_id": "3968",
        "service_name": "3968 ~ Instagram Türk Gerçek Beğeni 🇹🇷 | Maksimum 15K | Anlık Başlar Doğal Artar",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "11156",
        "service_id": "3970",
        "service_name": "3970 ~ Instagram Türk Gerçek Beğeni 🇹🇷 | Maksimum 5K",
        "price": "73.00",
        "percent": "1"
    },
    {
        "id": "11451",
        "service_id": "3971",
        "service_name": "🔹 3971 - Facebook Sayfa/Profil Takipçisi | Max 200K | Günlük 5-10K Hız | Ömür Boyu Garantili",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11157",
        "service_id": "3972",
        "service_name": "3972 ~ Instagram Türk Gerçek Beğeni 🇹🇷 | Maksimum 3K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11158",
        "service_id": "3973",
        "service_name": "3973 ~ Instagram Türk Gerçek Beğeni 🇹🇷 | Maksimum 30K | [ANLIK BAŞLAR ÇOK HIZLI TAMAMLAR]- [ALTERNATİF]\t Günde 5-10K Hız",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11159",
        "service_id": "3974",
        "service_name": "3974 ~ [ SOCIALPANELAPP ÖZEL SUNUCU ] Instagram Organik Türk Beğeni🇹🇷 | Maksimum 10K | - [ Anlık Başlar-Her zaman STABİL]  - Günde 10K Hız  🔥 𝐎̈𝐙𝐄𝐋 𝐒𝐄𝐑𝐕𝐈̇𝐒  🔥",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11160",
        "service_id": "3975",
        "service_name": "3975 ~ [ SOCIALPANELAPP ÖZEL SUNUCU ] Instagram Organik Türk Beğeni🇹🇷 | Maksimum 5K | - [ Anlık Başlar-Her zaman STABİL] - Günde 15K Hız🔥 𝐎̈𝐙𝐄𝐋 𝐒𝐄𝐑𝐕𝐈̇𝐒 🔥 [ALTERNATİF]\t",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "11243",
        "service_id": "3976",
        "service_name": "◆ 3976 - TikTok Takipçi | Global | Max 30K | Günde 3-5K | 30 Gün Garantili",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11242",
        "service_id": "3977",
        "service_name": "◆ 3977 - TikTok Takipçi | Max 1M | Günde 10-15K | 30 Gün Garantili",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11446",
        "service_id": "3978",
        "service_name": "🔹 3978 - Facebook Sayfa Beğeni + Takipçi | Max 50K | Günlük 500-1K Hız | Ömür Boyu Garantili",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11445",
        "service_id": "3979",
        "service_name": "🔹 3979 - Facebook Sayfa Beğeni + Takipçi | Max 500K | Günlük 1-2K Hız | Ömür Boyu Garantili",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11228",
        "service_id": "3985",
        "service_name": "🌀 3985 ~ Telegram Üyeleri | Kanal &amp; Grup | Max 50K | Günde 50K | 30 Gün Garantili",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11229",
        "service_id": "3986",
        "service_name": "🌀 3986 ~ Telegram Üyeleri | Kanal &amp; Grup | Max 100K | Günde 100K | Sınırsız Database",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11230",
        "service_id": "3987",
        "service_name": "🌀 3987 ~ Telegram Üyeleri | Kanal &amp; Grup | Max 100K | Günde 50K | Az Düşüş",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11231",
        "service_id": "3988",
        "service_name": "🌀 3988 ~ Telegram Üyeleri | Kanal &amp; Grup | Max 100K | Günde 50K | 30 Gün Garantili",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11232",
        "service_id": "3989",
        "service_name": "🌀 3989 ~ Telegram Üyeleri | Kanal &amp; Grup | Max 100K | Günde 10-20K | 60 Gün Garantili",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11233",
        "service_id": "3990",
        "service_name": "🌀 3990 ~ Telegram Üyeleri [ Nitro ] | Kanal &amp; Grup | Max 100K | Günde 20-30K | 90 Gün Garantili",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "11234",
        "service_id": "3991",
        "service_name": "🌀 3991 ~ Telegram Üyeleri | EUROPE 🇪🇺 | Max 100K | Günde 50K | Düşüş Yok",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11235",
        "service_id": "3992",
        "service_name": "🌀 3992 ~ Telegram Üyeleri | ÇİN 🇨🇳 | Max 200K | Günde 50K | Düşüş Yok",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11236",
        "service_id": "3993",
        "service_name": "🌀 3993 ~ Telegram Üyeleri | İNGİLTERE 🇬🇧 | Max 100K | Günde 50K | Düşüş Yok",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11237",
        "service_id": "3994",
        "service_name": "🌀 3994 ~ Telegram Üyeleri | HİNDİSTAN 🇮🇳 | Max 100K | Günde 30K | Düşüş Yok",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11238",
        "service_id": "3995",
        "service_name": "🌀 3995 ~ Telegram Üyeleri | RUSYA 🇷🇺 | Max 100K | Günde 10K | Düşüş Yok",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11239",
        "service_id": "3996",
        "service_name": "🌀 3996 ~ Telegram Üyeleri | ÇİN 🇨🇳 | Max 100K | Günde 40K | Düşüş Yok",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11240",
        "service_id": "3997",
        "service_name": "🌀 3997 ~ Telegram Üyeleri | AMERİKA 🇺🇸 | Max 100K | Günde 10K | Düşüş Yok",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11241",
        "service_id": "3998",
        "service_name": "🌀 3998 ~ Telegram Üyeleri | RUSYA 🇷🇺 | Max 100K | Günde 30K | Düşüş Yok",
        "price": "66.00",
        "percent": "1"
    },
    {
        "id": "11248",
        "service_id": "4000",
        "service_name": "🌀 4000 ~ Telegram Üyeleri | Kanal &amp; Grup | Max 500K | Günde 100K | 30 Gün Telafili",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "11250",
        "service_id": "4002",
        "service_name": "⭐ 4002 - Instagram Takipçi | Max 1M | 24-72 Saat Başlangıç | 1 Yıl Garantili | Günde 1K Hız",
        "price": "74.00",
        "percent": "1"
    },
    {
        "id": "11419",
        "service_id": "4006",
        "service_name": "◆ 4006 - TikTok Takipçi | Brezilya | Max 50K | Günde 5-10K | 30 Gün Garantili",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "11433",
        "service_id": "4007",
        "service_name": "⭐ 4007 - Instagram Takipçi | Max 5M | Garantisiz | 24-72 Saat Başlangıç | Günde 3-5K Hız",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "11434",
        "service_id": "4008",
        "service_name": "⭐ 4008 - Instagram Takipçi | Max 1M | Garantisiz | 24-72 Saat Başlangıç | Günde 100K Hız",
        "price": "48.00",
        "percent": "1"
    },
    {
        "id": "11268",
        "service_id": "4011",
        "service_name": "🔹 4011 - Facebook Video/Reels İzlenme | Max 10M | Günlük 5K Hız | 3 Saniye İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11269",
        "service_id": "4012",
        "service_name": "🔹 4012 - Facebook Video/Reels İzlenme | Max 10M | Günlük 5K Hız | 10 Saniye İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11270",
        "service_id": "4013",
        "service_name": "🔹 4013 - Facebook Video/Reels İzlenme | Max 10M | Günlük 5K Hız | 15 Saniye İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11271",
        "service_id": "4014",
        "service_name": "🔹 4014 - Facebook Video/Reels İzlenme | Max 10M | Günlük 5K Hız | 30 Saniye İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11272",
        "service_id": "4015",
        "service_name": "🔹 4015 - Facebook Video/Reels İzlenme | Max 10M | Günlük 5K Hız | 1 Dakika İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11273",
        "service_id": "4016",
        "service_name": "🔹 4016 - Facebook Video/Reels İzlenme | Max 10M | Günlük 5K Hız | 3 Dakika İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11274",
        "service_id": "4017",
        "service_name": "🔹 4017 - Facebook Video/Reels İzlenme | Max 10M | Günlük 5K Hız | 6 Dakika İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11275",
        "service_id": "4018",
        "service_name": "🔹 4018 - Facebook Video/Reels İzlenme | Max 10M | Günlük 5K Hız | 10 Dakika İzlenme Süresi",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11288",
        "service_id": "4020",
        "service_name": "🔹 4020 - Facebook Sayfa/Profil Takipçisi | Max 50K | Günlük 500-1K Hız | 30 Gün Garantili",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11450",
        "service_id": "4021",
        "service_name": "🔹 4021 - Facebook Sayfa/Profil Takipçisi | Max 250K | Günlük 2-4K Hız | Ömür Boyu Garantili",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11290",
        "service_id": "4022",
        "service_name": "🔹 4022 - Facebook Gönderi Beğeni | Max 50K | Günlük 500-1K Hız | 0-6 Saat Başlangıç | 30 Gün Garantili",
        "price": "76.00",
        "percent": "1"
    },
    {
        "id": "11296",
        "service_id": "4025",
        "service_name": "4025 - Linkedin Takipçi - Profil/Şirket | Max 10K | Günde 500-1K | 0-1 Saat Başlangıç",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11297",
        "service_id": "4026",
        "service_name": "4026 - Linkedin Random Yorum - Profil/Şirket | Max 1K | Günde 30-50 | 1-3 Saat Başlangıç",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11298",
        "service_id": "4027",
        "service_name": "4027 - Linkedin Paylaşım (Repost) + Gösterim (Impression) | Max 10K | Günde 50-300 | 1-3 Saat Başlangıç",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11299",
        "service_id": "4028",
        "service_name": "🌀 4028 ~ Telegram Pozitif Tepkiler - Karışık Rastgele | 👍 🔥 😁 👏 🥰 ❤️ 🎉 🤩",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11300",
        "service_id": "4029",
        "service_name": "🌀 4029 ~ Telegram Negatif Tepkiler - Karışık Rastgele | 👎 🤮 💩 🤯 😢 🤔 😱 😁 🤬",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11301",
        "service_id": "4030",
        "service_name": "🌀 4030 ~ Telegram Reactions | 👍 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11302",
        "service_id": "4031",
        "service_name": "🌀 4031 ~ Telegram Reactions | 👎 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11303",
        "service_id": "4032",
        "service_name": "🌀 4032 ~ Telegram Reactions | 🤣 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11304",
        "service_id": "4033",
        "service_name": "🌀 4033 ~ Telegram Reactions | 🤡 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11305",
        "service_id": "4034",
        "service_name": "🌀 4034 ~ Telegram Reactions | 🕊 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11306",
        "service_id": "4035",
        "service_name": "🌀 4035 ~ Telegram Reactions | 🐳 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11307",
        "service_id": "4036",
        "service_name": "🌀 4036 ~ Telegram Reactions | ⚡️ + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11308",
        "service_id": "4037",
        "service_name": "🌀 4037 ~ Telegram Reactions | 🍌 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11309",
        "service_id": "4038",
        "service_name": "🌀 4038 ~ Telegram Reactions | 🏆 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11310",
        "service_id": "4039",
        "service_name": "🌀 4039 ~ Telegram Reactions | 👌🏻 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11311",
        "service_id": "4040",
        "service_name": "🌀 4040 ~ Telegram Reactions | ❤️‍🔥 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11312",
        "service_id": "4041",
        "service_name": "🌀 4041 ~ Telegram Reactions | 💯 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11313",
        "service_id": "4042",
        "service_name": "🌀 4042 ~ Telegram Reactions | 😍 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11314",
        "service_id": "4043",
        "service_name": "🌀 4043 ~ Telegram Reactions | ❤️ + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11315",
        "service_id": "4044",
        "service_name": "🌀 4044 ~ Telegram Reactions | 🔥 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11316",
        "service_id": "4045",
        "service_name": "🌀 4045 ~ Telegram Reactions | 🎉 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11317",
        "service_id": "4046",
        "service_name": "🌀 4046 ~ Telegram Reactions | 🤩 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11318",
        "service_id": "4047",
        "service_name": "🌀 4047 ~ Telegram Reactions | 😱 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11319",
        "service_id": "4048",
        "service_name": "🌀 4048 ~ Telegram Reactions | 😁 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11320",
        "service_id": "4049",
        "service_name": "🌀 4049 ~ Telegram Reactions | 😢 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11321",
        "service_id": "4050",
        "service_name": "🌀 4050 ~ Telegram Reactions | 💩 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11322",
        "service_id": "4051",
        "service_name": "🌀 4051 ~ Telegram Reactions | 🤮 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11323",
        "service_id": "4052",
        "service_name": "🌀 4052 ~ Telegram Reactions | 😐 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11324",
        "service_id": "4053",
        "service_name": "🌀 4053 ~ Telegram Reactions | 🍾 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11325",
        "service_id": "4054",
        "service_name": "🌀 4054 ~ Telegram Reactions | 🖕 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11326",
        "service_id": "4055",
        "service_name": "🌀 4055 ~ Telegram Reactions | 😭 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11327",
        "service_id": "4056",
        "service_name": "🌀 4056 ~ Telegram Reactions | 👻 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11328",
        "service_id": "4057",
        "service_name": "🌀 4057 ~ Telegram Reactions | 👀 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11329",
        "service_id": "4058",
        "service_name": "🌀 4058 ~ Telegram Reactions | 🤝 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11330",
        "service_id": "4059",
        "service_name": "🌀 4059 ~ Telegram Reactions | 🗿 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11331",
        "service_id": "4060",
        "service_name": "🌀 4060 ~ Telegram Reactions | 💊 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11332",
        "service_id": "4061",
        "service_name": "🌀 4061 ~ Telegram Reactions | 🦄 + İzlenme",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11337",
        "service_id": "4062",
        "service_name": "⭐ 4062 - Instagram Takipçi | Max 5K | %100 Türk 🇹🇷 | 30 Gün Garantili",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11396",
        "service_id": "4064",
        "service_name": "💠 4064 - Twitter Takipçi | Max 20K | Günde 500-1K | 30 Gün Garantili | Az Düşüş",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11347",
        "service_id": "4066",
        "service_name": "4066 ~ Instagram Türk Kadın Beğeni 🇹🇷 | Maksimum 100K | 30 Gün Garantili",
        "price": "72.00",
        "percent": "1"
    },
    {
        "id": "11354",
        "service_id": "4067",
        "service_name": "🔹 4067 - Facebook Sayfa Beğeni + Takipçi | Max 100K | Günlük 5-10K Hız | 30 Gün Garantili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11349",
        "service_id": "4070",
        "service_name": "◆ 4070 - TikTok Takipçi | Global | Max 100K | Günde 10-15K | 30 Gün Garantili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11350",
        "service_id": "4071",
        "service_name": "◆ 4071 - TikTok Takipçi | Global | Max 30K | Günde 5-10K | 30 Gün Garantili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11351",
        "service_id": "4072",
        "service_name": "◆ 4072 - TikTok Takipçi | Global | Max 100K | Günde 15-25K | 30 Gün Garantili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11352",
        "service_id": "4073",
        "service_name": "◆ 4073 - TikTok Takipçi | Global | Max 50K | Günde 20-30K | 30 Gün Garantili",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11448",
        "service_id": "4080",
        "service_name": "🔹 4080 - Facebook Sayfa/Profil Takipçisi | Max 20K | Günlük 500-1K Hız | 30 Gün Garantili",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "11362",
        "service_id": "4082",
        "service_name": "🔹 4082 - Facebook Gönderi Paylaşımı | Max 100K | Günlük 5-10K | Garantisiz | 0-1 Saat Başlangıç",
        "price": "52.00",
        "percent": "1"
    },
    {
        "id": "11441",
        "service_id": "4087",
        "service_name": "◆ 4087 - TikTok Takipçi | Max 200K | 0-1 Saat Başlangıç | Günde 5-10K | Garantisiz",
        "price": "78.00",
        "percent": "1"
    },
    {
        "id": "11415",
        "service_id": "4089",
        "service_name": "🔺 4089 - YouTube Abone | Max 15K | 60 Gün Garantili | Günde 250-500 Hız",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "11416",
        "service_id": "4090",
        "service_name": "💬 4090 - Instagram Özel Erkek Yorum | %100 Aktif Türk | Max 1K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11417",
        "service_id": "4091",
        "service_name": "💬 4091 - Instagram Özel Kadın Yorum | %100 Aktif Türk | Max 1K",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11426",
        "service_id": "4092",
        "service_name": "⭐ 4092 - Instagram Takipçi | Max 250K | 30 Gün Garantili | 24-72 Saat Başlangıç | Günde 500-1K Hız",
        "price": "80.00",
        "percent": "1"
    },
    {
        "id": "11429",
        "service_id": "4093",
        "service_name": "⭐ 4093 - Instagram Takipçi | Max 1M | 30 Gün Garantili | Günde 10-20K Hız",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "11430",
        "service_id": "4094",
        "service_name": "⭐ 4094 - Instagram Takipçi | Max 1M | 30 Gün Garantili | 24-72 Saat Başlangıç | Günde 1-2K Hız",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11431",
        "service_id": "4095",
        "service_name": "⭐ 4095 - Instagram Takipçi | Max 500K | Garantisiz | Günde 50-75K Hız",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "11432",
        "service_id": "4096",
        "service_name": "⭐ 4096 - Instagram Takipçi | Max 50K | 30 Gün Garantili | Günde 5-15K Hız",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "11438",
        "service_id": "4097",
        "service_name": "⭐ 4097 - Instagram Takipçi | Max 1M | 90 Gün Garantili | Günde 75-100K Hız",
        "price": "56.00",
        "percent": "1"
    },
    {
        "id": "11465",
        "service_id": "4098",
        "service_name": "⭐ 4098 - Instagram Takipçi | Max 250K | Garantisiz | Günde 20K Hız",
        "price": "73.00",
        "percent": "1"
    },
    {
        "id": "11464",
        "service_id": "4110",
        "service_name": "● 4110 - Instagram Kaydet [Max 4K] [Saatte 1K Hız]",
        "price": "60.00",
        "percent": "1"
    },
    {
        "id": "11466",
        "service_id": "4111",
        "service_name": "⭐ 4111 - Instagram Takipçi | Max 500K | Garantisiz | Günde 20K Hız",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11467",
        "service_id": "4112",
        "service_name": "🔺 4112 - YouTube Abone | Max 2K | 45 Gün Garantili | Günde 50-80 Hız | Kural Yok",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "11468",
        "service_id": "4113",
        "service_name": "🔺 4113 - YouTube Abone | Max 500K | 45 Gün Garantili | Günde 5K-10K Hız | Kural Yok",
        "price": "58.00",
        "percent": "1"
    },
    {
        "id": "11475",
        "service_id": "4119",
        "service_name": "● 4119 - Instagram Paylaşım | Max 5M | Anlık [Sadece Gönderi Linki]",
        "price": "63.00",
        "percent": "1"
    },
    {
        "id": "11477",
        "service_id": "4121",
        "service_name": "💠 4121 - Twitter Türk Beğeni | Max 100K | Günde 10K Hız | 30 Gün Garantili",
        "price": "70.00",
        "percent": "1"
    },
    {
        "id": "11478",
        "service_id": "4122",
        "service_name": "❤️ 4122 - Instagram Türk Beğeni 🇹🇷 | Maksimum 5K | Günde 100-200 Hız",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11479",
        "service_id": "4123",
        "service_name": "⭐ 4123 - Instagram Takipçi | Max 1M | Garantisiz | 24-72 Saat Başlangıç | Günde 500-1K Hız",
        "price": "61.00",
        "percent": "1"
    },
    {
        "id": "11482",
        "service_id": "4125",
        "service_name": "⭐ 4125 ~ Instagram Takipçi | Max 5M | 30 Gün Garantili | 24-72 Saat Başlangıç | Günde 10-15K Hız",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11495",
        "service_id": "4144",
        "service_name": "🎥  4144 ~ Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 100K Hız",
        "price": "50.00",
        "percent": "1"
    },
    {
        "id": "11487",
        "service_id": "4391",
        "service_name": "◆ 4391 - Tiktok Kaydet | Max 10M | Günde 50-100K Hız",
        "price": "62.00",
        "percent": "1"
    },
    {
        "id": "11484",
        "service_id": "4392",
        "service_name": "◆ 4392 - TikTok Takipçi | Global | Max 100K | Günde 10-25K | 30 Gün Garantili | Gerçek Görünümlü | Anında Başlar",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11485",
        "service_id": "4393",
        "service_name": "◆ 4393 - TikTok Takipçi | Global | Max 500K | Günde 3-5K | 30 Gün Garantili | Anında Başlar | Yüksek Kalite | Orta Hız",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11486",
        "service_id": "4394",
        "service_name": "◆ 4394 - TikTok Takipçi | Global | Max 1M | Günde 500-1K | 30 Gün Garantili | Anlık Başlar | Yüksek Kalite | Doğal Artış | Yavaş",
        "price": "77.00",
        "percent": "1"
    },
    {
        "id": "11491",
        "service_id": "4395",
        "service_name": "⭐ 4395 - Instagram Takipçi | Max 1M | Garantisiz | Anlık Başlangıç | Günde 50K Hız",
        "price": "75.00",
        "percent": "1"
    },
    {
        "id": "11492",
        "service_id": "4397",
        "service_name": "⭐ 4397 ~ Instagram Takipçi | Max 500K | 30 Gün Garantili | Anlık Başlangıç | Günde 10-30K Hız",
        "price": "72.00",
        "percent": "1"
    },
    {
        "id": "11493",
        "service_id": "4398",
        "service_name": "⭐ 4398 ~ Instagram Takipçi | Max 1M | 30 Gün Garantili | Anlık Başlangıç | Günde 30-50K Hız",
        "price": "72.00",
        "percent": "1"
    },
    {
        "id": "11494",
        "service_id": "4399",
        "service_name": "⭐ 4399 - Instagram Takipçi | Max 5M | Garantisiz | Anlık Başlangıç | Günde 100-200K Hız",
        "price": "63.00",
        "percent": "1"
    },
    {
        "id": "11507",
        "service_id": "4413",
        "service_name": "🎥 4413 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 20-30K",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "11508",
        "service_id": "4414",
        "service_name": "🎥 4414 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 5-10K",
        "price": "57.00",
        "percent": "1"
    },
    {
        "id": "11502",
        "service_id": "4416",
        "service_name": "⭐ 4416 ~ Instagram Takipçi | Max 1M | 30 Gün Garantili | Günde 30-50K Hız",
        "price": "73.00",
        "percent": "1"
    },
    {
        "id": "11503",
        "service_id": "4417",
        "service_name": "⭐ 4417 ~ Instagram Takipçi | Max 1M | 60 Gün Garantili | Günde 30-50K Hız",
        "price": "73.00",
        "percent": "1"
    },
    {
        "id": "11504",
        "service_id": "4418",
        "service_name": "⭐ 4418  ~ Instagram Takipçi | Max 1M | 90 Gün Garantili | Günde 30-50K Hız",
        "price": "73.00",
        "percent": "1"
    },
    {
        "id": "11505",
        "service_id": "4419",
        "service_name": "🎥 4419 - Instagram Video İzlenme | %100 Türk 🇹🇷 | Saatte 10-20K",
        "price": "63.00",
        "percent": "1"
    }
]
export default rates