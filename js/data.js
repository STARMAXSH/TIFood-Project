const shop = {
    openTime : "08.00",
    closeTime : "16.00",
    isClosed : false,
    whatsapp : "628123456789"
};

const social = {
    instagram : "https://www.instagram.com/hmjti_polije",
    youtube : "https://www.youtube.com/@hmjti_polije",
    tiktok : "https://www.tiktok.com/@hmjti_polije"
};

const shiftSchedule = [
    { time: "08.00–09.00", monday: "Kiswa",       tuesday: "Aya",    wednesday: "Fatim",    thursday: "Rico",    friday: "Lily"   },
    { time: "09.00–10.00", monday: "Aisyah",      tuesday: "Salsa",  wednesday: "Rianty",   thursday: "Rendra",  friday: "Jakik"  },
    { time: "10.00–11.00", monday: "Radis",       tuesday: "Rafli",  wednesday: "Rizky",    thursday: "Auliya",  friday: "Hanum"  },
    { time: "11.00–12.00", monday: "Indra",       tuesday: "Alya",   wednesday: "Fitriyah", thursday: "Tristan", friday: "Neta"   },
    { time: "12.00–13.00", monday: "Yuke",        tuesday: "Rifda",  wednesday: "Yafie",    thursday: "Lyra",    friday: "Bambang"},
    { time: "13.00–14.00", monday: "Agnes",       tuesday: "-",      wednesday: "Widy",     thursday: "Gadis",   friday: "Ahmad"  },
    { time: "14.00–15.00", monday: "Rasya, John", tuesday: "Fitri",  wednesday: "Amelia",   thursday: "Sava",    friday: "Aldi"   },
    { time: "15.00–16.00", monday: "Diva",        tuesday: "Lany",   wednesday: "Lidya",    thursday: "Feby",    friday: "Wardah" }
];

const products = [
    // ----- Snack -----
    { name: "Sari Gandum",          category: "Snack", price: 3000, image: "img/sari-gandum.png", emoji: "🍪", specs: ["Biskuit sandwich gandum isi krim", "Kemasan saku, praktis dibawa", "Cocok untuk camilan di sela kuliah"] },
    { name: "Roma Arden",           category: "Snack", price: 2500, image: "img/roma-arden.png", emoji: "🍪", specs: ["Cookies lembut isi cokelat (Choco Splendid)", "Kemasan satuan", "Cocok untuk teman minum teh atau kopi"] },
    { name: "Slai Olai",            category: "Snack", price: 2000, image: "img/slai-olai.png", emoji: "🍓", specs: ["Biskuit isi selai blueberry", "Kemasan satuan", "Cocok untuk camilan manis"] },
    { name: "Oreo Mini",            category: "Snack", price: 2500, image: "img/oreom.png", emoji: "🍪", specs: ["Biskuit cokelat isi krim vanila ukuran mini", "Kemasan saku", "Enak dicelup ke susu"] },
    { name: "Piatos Rumput Laut",   category: "Snack", price: 2000, image: "img/piatos-rumput.png", emoji: "🥔", specs: ["Keripik kentang rasa rumput laut", "Kemasan snack ringan", "Renyah dan gurih"] },
    { name: "Piatos Sapi Panggang", category: "Snack", price: 2000, image: "img/piatos-sapi.png", emoji: "🥔", specs: ["Keripik kentang rasa sapi panggang", "Kemasan snack ringan", "Renyah dan gurih"] },
];

const favoriteNames = ["Oreo Mini", "Onigiri", "YOUC-1000", "Popmie Soto"];

const homeBanners = [
    { title: "Snack mulai Rp 500", text: "Puluhan pilihan camilan: biskuit, keripik, wafer, sampai permen.",
        button: "Lihat snack", link: "catalog.html?category=Snack", image: "img/banner-snack.png", color: "cat-snack" },
    { title: "Lapar saat jam kuliah?", text: "Nasi ayam, mie ayam, onigiri, dan Pop Mie hangat siap mengisi perut.",
        button: "Lihat makanan", link: "catalog.html?category=Makanan", image: "img/banner-makanan.png", color: "cat-makanan" },
    { title: "Teman begadang tugas", text: "Americano dan Es untuk menemani kamu mengerjakan tugas.",
        button: "Lihat minuman", link: "catalog.html?category=Minuman", image: "img/banner-minuman.png", color: "cat-minuman" }
];