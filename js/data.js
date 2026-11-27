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
    { name: "Superstar",            category: "Snack", price: 1000, image: "img/superstar.png", emoji: "⭐", specs: ["Snack ringan kemasan", "Rasa gurih", "Cocok untuk camilan murah"] },
    { name: "Pasta Keju",           category: "Snack", price: 1000, image: "img/pasta-keju.png", emoji: "🧀", specs: ["Snack pasta rasa keju", "Kemasan kecil", "Renyah dan gurih"] },
    { name: "Permen Kiss / Relaxa (dapat 2)", category: "Snack", price: 500, image: "img/permen.png", emoji: "🍬", specs: ["Permen mint aneka rasa: Barley, Apple Peach, Cherry, Grape", "Harga Rp 500 mendapat 2 butir", "Cocok untuk penyegar mulut"] },
    { name: "Chocopie",             category: "Snack", price: 2500, image: "img/chocopie.png", emoji: "🍰", specs: ["Kue lembut berlapis cokelat dengan isi krim", "Kemasan satuan", "Manis dan lembut"] },
    { name: "Siip",                 category: "Snack", price: 1000, image: "img/siip.png", emoji: "🥨", specs: ["Wafer stik rasa keju (Nabati Siip)", "Kemasan kecil", "Renyah dan gurih"] },
    
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