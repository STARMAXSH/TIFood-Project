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
    { name: "Keju Cake",            category: "Snack", price: 2500, image: "img/keju-cake.png", emoji: "🍞", specs: ["Kue bolu rasa keju", "Kemasan satuan", "Lembut dan gurih manis"] },
    { name: "Dilan Choco",          category: "Snack", price: 3000, image: "img/dilan-choco.png", emoji: "🍫", specs: ["Camilan cokelat kemasan", "Kemasan satuan", "Manis dan praktis"] },
    { name: "Chocolatos Besar",     category: "Snack", price: 1500, image: "img/chocolatos-besar.png", emoji: "🍫", specs: ["Wafer stik berlapis cokelat", "Kemasan ukuran besar", "Renyah dan manis"] },
    { name: "Oreo Panjang",         category: "Snack", price: 2500, image: "img/oreopj.png", emoji: "🍪", specs: ["Biskuit cokelat isi krim cokelat", "Kemasan panjang isi beberapa keping", "Enak dicelup ke susu"] },
    { name: "Malkist Keju",         category: "Snack", price: 1000, image: "img/malkist-keju.png", emoji: "🧀", specs: ["Biskuit crackers rasa keju", "Kemasan saku", "Renyah dan gurih"] },
    { name: "Jetz",                 category: "Snack", price: 2000, image: "img/jetz.png", emoji: "🥨", specs: ["Snack stik rasa cokelat", "Kemasan snack ringan", "Renyah dan manis"] },
    { name: "Keripik Kaca",         category: "Snack", price: 5000, image: "img/keripca.png", emoji: "🍘", specs: ["Keripik tipis dan renyah", "Kemasan kecil", "Cocok untuk camilan murah"] },
    { name: "French",               category: "Snack", price: 2000, image: "img/french.png", emoji: "🍟", specs: ["Snack kentang goreng kemasan", "Rasa gurih", "Renyah"] },
    { name: "Tictac",               category: "Snack", price: 1000, image: "img/tictac.png", emoji: "🍬", specs: ["Snack singkong rasa sapi panggang", "Kemasan snack ringan", "Renyah dan gurih"] },
    { name: "Twistko",              category: "Snack", price: 1000, image: "img/twistko.png", emoji: "🍿", specs: ["Snack jagung rasa jagung bakar", "Kemasan snack ringan", "Renyah dan gurih"] },
    { name: "Boyki",                category: "Snack", price: 2000, image: "img/boyki.png", emoji: "🍿", specs: ["Snack mi rasa mi goreng", "Bisa langsung dimakan tanpa dimasak", "Renyah dan gurih"] },
    { name: "Astor",                category: "Snack", price: 1500, image: "img/astor.png", emoji: "🍫", specs: ["Wafer stik berlapis cokelat", "Kemasan satuan", "Renyah dan manis"] },
    { name: "Apetito",              category: "Snack", price: 2000, image: "img/apetito.png", emoji: "🍘", specs: ["Snack stik rasa pizza", "Kemasan kotak", "Renyah dan gurih"] },
    { name: "Bar Bar",              category: "Snack", price: 3000, image: "img/barbar.png", emoji: "🍫", specs: ["Camilan batang berlapis cokelat", "Kemasan satuan", "Praktis dibawa"] },
    { name: "Snaps",                category: "Snack", price: 2000, image: "img/snaps.png", emoji: "🥨", specs: ["Snack ringan kemasan", "Kemasan satuan", "Renyah"] },
    { name: "Pretz",                category: "Snack", price: 5000, image: "img/pretz.png", emoji: "🥨", specs: ["Snack stik pretzel", "Kemasan satuan", "Renyah dan gurih"] },
    { name: "Goodtime",             category: "Snack", price: 2000, image: "img/good-time.png", emoji: "🍪", specs: ["Biskuit cookies dengan choco chips", "Kemasan saku", "Renyah dan manis"] },
    { name: "Pilus",                category: "Snack", price: 500,  image: "img/pilus.png", emoji: "🥜", specs: ["Snack pilus kacang", "Kemasan kecil", "Renyah dan gurih"] },
    { name: "Biskuat Bolu",         category: "Snack", price: 2500, image: "img/biskuat-bolu.png", emoji: "🍞", specs: ["Bolu biskuit isi krim", "Kemasan satuan", "Lembut dan manis"] },
    { name: "Mie Kremez",           category: "Snack", price: 1500, image: "img/mie-kremez.png", emoji: "🍜", specs: ["Snack mie remas", "Kemasan kecil", "Renyah dan gurih"] },
    { name: "Sosis",                category: "Snack", price: 2000, image: "img/sosis.png", emoji: "🌭", specs: ["Snack sosis kemasan", "Kemasan satuan", "Gurih dan praktis"] },
    { name: "Kalpa",                category: "Snack", price: 3000, image: "img/kalpa.png", emoji: "🧇", specs: ["Wafer cokelat dengan taburan kelapa", "Kemasan satuan", "Renyah dan manis"] },
    { name: "Chocolatos Kecil",     category: "Snack", price: 500,  image: "img/chocolatos-kecil.png", emoji: "🍫", specs: ["Wafer stik berlapis cokelat", "Kemasan ukuran kecil", "Renyah dan manis"] },
    { name: "Wafello",              category: "Snack", price: 1000, image: "img/wafello.png", emoji: "🧇", specs: ["Wafer krim kemasan", "Kemasan kecil", "Renyah dan manis"] },
    { name: "Chitato",              category: "Snack", price: 2000, image: "img/chitato.png", emoji: "🥔", specs: ["Keripik kentang rasa sapi panggang", "Kemasan snack ringan", "Renyah dan gurih"] },
    { name: "Makaroni",             category: "Snack", price: 6000, image: "img/makaroni.png", emoji: "🍝", specs: ["Snack makaroni", "Kemasan satuan", "Renyah dan gurih"] },
    { name: "Fitbar",               category: "Snack", price: 6000, image: "img/fitbar.png", emoji: "🌾", specs: ["Snack batang sereal dan serat", "Kemasan satuan", "Cocok untuk ganjal perut"] },

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