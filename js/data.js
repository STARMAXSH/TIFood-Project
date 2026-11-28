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
    { name: "Chokistix",            category: "Snack", price: 2000, image: "img/chokistix.png", emoji: "🍫", specs: ["Stik biskuit berlapis cokelat", "Kemasan satuan", "Renyah dan manis"] },
    { name: "Gery Malkist",         category: "Snack", price: 1500, image: "img/gery-malkist.png", emoji: "🍘", specs: ["Biskuit malkist isi cokelat", "Kemasan saku", "Renyah dan manis"] },
    { name: "Cheetos",              category: "Snack", price: 2000, image: "img/cheetos.png", emoji: "🍘", specs: ["Snack kemasan", "Kemasan kecil", "Cocok untuk camilan murah"] },
    { name: "Basreng Kecil",        category: "Snack", price: 3000, image: "img/basreng-kecil.png", emoji: "🍢", specs: ["Bakso goreng (basreng) kemasan kecil", "Rasa gurih pedas", "Renyah"] },
    { name: "Top Kecil",            category: "Snack", price: 1000, image: "img/top.png", emoji: "🍿", specs: ["Wafer cokelat", "Kemasan satuan", "Renyah dan manis"] },
    { name: "Coki-coki",            category: "Snack", price: 1500, image: "img/coki-coki.png", emoji: "🍫", specs: ["Cokelat pasta rasa Chococashew", "Kemasan tabung satuan", "Manis dan praktis"] },
   
    // ----- Makanan ----
    { name: "Pop Mie Soto",         category: "Makanan", price: 7000,  image: "img/popmie-soto.png", emoji: "🍜", specs: ["Mie instan cup rasa soto ayam", "Seduh air panas, siap makan 3 menit", "Tersedia air panas di stan"] },
    { name: "Pop Mie",              category: "Makanan", price: 7000,  image: "img/popmie-goreng.png", emoji: "🍜", specs: ["Mie instan cup", "Seduh air panas, siap makan 3 menit", "Tersedia air panas di stan"] },
    { name: "Tahu Kocek",           category: "Makanan", price: 6000,  image: "img/tahu-kocek.png", emoji: "🧆", specs: ["Tahu goreng dengan bumbu kocok", "Disajikan hangat", "Cocok untuk camilan berat"] },
    { name: "Tahu Krispi",          category: "Makanan", price: 6000,  image: "img/tahu-krispi.png", emoji: "🧆", specs: ["Tahu goreng tepung", "Renyah di luar, lembut di dalam", "Cocok untuk camilan"] },
    { name: "Onigiri",              category: "Makanan", price: 11000, image: "img/onigiri.png", emoji: "🍙", specs: ["Nasi kepal isi lauk, dibungkus nori", "Satu porsi mengenyangkan", "Praktis untuk makan siang"] },
    { name: "Sosis",                category: "Makanan", price: 6000,  image: "img/sosis-bakar.png", emoji: "🌭", specs: ["Sosis goreng/bakar", "Disajikan hangat", "Cocok untuk camilan"] },
    { name: "Tela Tela",            category: "Makanan", price: 6000,  image: "img/tela-tela.png", emoji: "🍠", specs: ["Camilan olahan ubi/singkong", "Disajikan hangat", "Cocok untuk camilan"] },
    { name: "Dimsum",               category: "Makanan", price: 7000,  image: "img/dimsum.png", emoji: "🥟", specs: ["Dimsum kukus", "Disajikan hangat", "Cocok untuk camilan berat"] },
    { name: "Buah Potong",          category: "Makanan", price: 6000,  image: "img/buah-potong.png", emoji: "🍉", specs: ["Buah segar potong", "Disajikan dingin", "Pilihan camilan sehat"] },
    { name: "Nasi Ayam Asam Manis", category: "Makanan", price: 10000, image: "img/nasi-ayam-asam-manis.png", emoji: "🍗", specs: ["Nasi dengan ayam saus asam manis", "Satu porsi lengkap", "Cocok untuk makan siang"] },
    { name: "Pudot",                category: "Makanan", price: 7000,  image: "img/pudot.png", emoji: "🍮", specs: ["Camilan/kue basah", "Kemasan satuan", "Cocok untuk camilan manis"] },
    { name: "Puding",               category: "Makanan", price: 4000,  image: "img/puding.png", emoji: "🍮", specs: ["Puding manis", "Disajikan dingin", "Lembut dan segar"] },
    { name: "Bomboloni",            category: "Makanan", price: 3000,  image: "img/bomboloni.png", emoji: "🍩", specs: ["Donat isi krim ala Italia", "Lembut dan manis", "Cocok untuk camilan manis"] },
    { name: "Risol",                category: "Makanan", price: 3500,  image: "img/risol.png", emoji: "🌯", specs: ["Risol isian gurih", "Kulit tipis, digoreng renyah", "Cocok untuk camilan"] },
    { name: "Klepon",               category: "Makanan", price: 2000,  image: "img/klepon.png", emoji: "🍡", specs: ["Jajanan pasar bola ketan isi gula merah", "Taburan kelapa parut", "Manis dan kenyal"] },

    // ----- Minuman -----
    { name: "Le Mineral",           category: "Minuman", price: 3000, image: "img/lemineral.png", emoji: "☕", specs: ["Air minum dalam kemasan", "Menyegarkan dan praktis dibawa", "Ukuran kemasan belum diketahui"] },
    { name: "Isoplus",              category: "Minuman", price: 4000, image: "img/isoplus.png", emoji: "🍧", specs: ["Minuman isotonik dengan 7 ion dan vitamin C", "Kemasan botol 350 ml", "Menggantikan cairan tubuh yang hilang"] },
    { name: "Teh Pucuk",            category: "Minuman", price: 4000, image: "img/teh-pucuk.png", emoji: "🍧", specs: ["Teh melati siap minum dari pucuk daun teh pilihan dan ekstrak bunga melati", "Kemasan botol 500 ml", "Pilihan rasa: less sugar dan reguler"] },
    { name: "Teh Kotak",            category: "Minuman", price: 4000, image: "img/teh-kotak.png", emoji: "🍧", specs: ["Teh siap minum dalam kemasan kotak", "Ukuran 300 ml", "Tersedia beberapa varian rasa"] },
    { name: "Cimory UHT",           category: "Minuman", price: 7000, image: "img/cimory.png", emoji: "🍧", specs: ["Susu UHT kemasan kotak", "Ukuran 250 ml", "Banyak pilihan rasa"] },
    { name: "Milku",                category: "Minuman", price: 4000, image: "img/milku.png", emoji: "🍧", specs: ["Susu UHT dari susu sapi Belgia", "Botol PET 200 ml", "Rasa: Cokelat Premium, Stroberi, dan Marie Biskuit"] },
    { name: "You C1000",            category: "Minuman", price: 8000, image: "img/youc1000.png", emoji: "🍧", specs: ["Minuman vitamin C 1.000 mg per botol", "Botol 140 ml", "Botol 140 ml"] },
    { name: "Fruit Tea",            category: "Minuman", price: 8000, image: "img/fruit-tea.png", emoji: "🍧", specs: ["Teh hitam rasa buah", "Kemasan botol PET 500 ml", "Rasa: Apel"] },
    { name: "Floridina",            category: "Minuman", price: 3000, image: "img/floridina.png", emoji: "🍧", specs: ["Minuman rasa jeruk dengan bulir buah", "Botol plastik 350 ml", "Rasa: Orange"] },
    { name: "Nutriboost",           category: "Minuman", price: 7500, image: "img/nutribost.png", emoji: "🍧", specs: ["Minuman vitamin C 1.000 mg per botol", "Botol 140 ml", "Botol 140 ml"] },
    { name: "Americano",            category: "Minuman", price: 10000, image: "img/americano.png", emoji: "🍧", specs: ["Kopi espresso yang dicampur air", "Rasa kopi pekat tanpa susu", "Bisa disajikan panas atau dingin"] },

    // ----- Makanan & minuman titipan di POTI -----
    { name: "Nasi Cokot",           category: "Makanan", price: 7000,  image: "img/Nasicokot.png", emoji: "🍚", specs: ["Nasi kepal isi abon", "Titipan POTI, satu porsi", "Cocok untuk makan siang"] },
    { name: "Nasi Ayam",            category: "Makanan", price: 12000, image: "img/nasi-ayam.png", emoji: "🍗", specs: ["Nasi dengan lauk ayam", "Titipan POTI, satu porsi lengkap", "Cocok untuk makan siang"] },
    { name: "Mie Ayam",             category: "Makanan", price: 8000,  image: "img/mie-ayam.png", emoji: "🍜", specs: ["Mie dengan topping ayam", "Titipan POTI, satu porsi", "Disajikan hangat"] },
    { name: "Tahu Walik",           category: "Makanan", price: 5000,  image: "img/tahu-walik.png", emoji: "🧆", specs: ["Tahu goreng isi adonan, dibalik", "Titipan POTI", "Renyah dan gurih"] },
    { name: "Jelly Puding",         category: "Makanan", price: 5000,  image: "img/jelly-puding.png", emoji: "🍮", specs: ["Puding dan jeli manis", "Titipan POTI", "Disajikan dingin"] },
    { name: "Lumpia",               category: "Makanan", price: 3000,  image: "img/lumpia.png", emoji: "🌯", specs: ["Lumpia goreng isian sayur", "Titipan POTI", "Renyah dan gurih"] },
    { name: "Cheesecuit",           category: "Makanan", price: 6000,  image: "img/cheesecuit.png", emoji: "🧀", specs: ["Camilan keju goreng", "Titipan POTI", "Renyah dan gurih"] },
    { name: "Basreng",              category: "Makanan", price: 5000,  image: "img/basreng.png", emoji: "🍢", specs: ["Bakso goreng (basreng) renyah", "Titipan POTI", "Rasa gurih pedas"] },
];

const favoriteNames = ["Oreo Mini", "Onigiri", "You C1000", "Pop Mie Soto"];

const homeBanners = [
    { title: "Snack mulai Rp 500", text: "Puluhan pilihan camilan: biskuit, keripik, wafer, sampai permen.",
        button: "Lihat snack", link: "catalog.html?category=Snack", image: "img/banner-snack.png", color: "cat-snack" },
    { title: "Lapar saat jam kuliah?", text: "Nasi ayam, mie ayam, onigiri, dan Pop Mie hangat siap mengisi perut.",
        button: "Lihat makanan", link: "catalog.html?category=Makanan", image: "img/banner-makanan.png", color: "cat-makanan" },
    { title: "Teman begadang tugas", text: "Americano dan Es untuk menemani kamu mengerjakan tugas.",
        button: "Lihat minuman", link: "catalog.html?category=Minuman", image: "img/banner-minuman.png", color: "cat-minuman" },
];