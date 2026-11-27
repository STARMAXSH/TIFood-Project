function renderHome () {
    const status = shopStatus();
    const isOpen = status.isOpen;
    
    let tiltedTagsHtml = "";
    for (let i = 0; i < 3; i++) {
        const p = findProduct(favoriteNames[i]);
        if (p) {
            tiltedTagsHtml +=
                '<a class="tilted-tag ' + categoryClass(p) + '" href="product-detail.html?id=' + p.id + '">' +
                    '<div class="emoji">' + productImage(p) + "</div>" +
                    "<b>" + escapeHtml(p.name) + "</b>" +
                    '<span class="price-tag">' + formatRupiah(p.price) + "</span>" +
                "</a>";
        }
    }
    const statusText = isOpen ? "Stan Buka Sekarang" : "Stan Sedang Tutup";
    const hoursText = isOpen ? "Buka Senin - Jumat, " + shop.openTime + "-" + shop.closeTime : status.message;

    document.getElementById("hero").innerHTML =
        '<div class="container">' +
            "<div>" +
                '<span class="status' + (isOpen ? "" : " closed") + '"><i></i>' + statusText + "</span>" +
                "<h1>Jajan apa hari ini?</h1>" +
                '<p class="lead">Snack mulai ' + formatRupiah(lowestPrice()) + ", makanan hangat, dan kopi. Cek dulu di sini, lalu mampir ke stan TIFood.</p>" +
                '<form class="hero-search" action="catalog.html">' +
                    '<input name="search" placeholder="Cari: Oreo, Pop Mie, Americano" aria-label="Cari produk">' +
                    '<button class="btn" type="submit">Cari</button>' +
                "</form>" +
                '<p class="hours">' + escapeHtml(hoursText) + "</p>" +
            "</div>" +
            '<div class="hero-showcase">' + tiltedTagsHtml + "</div>" +
        "</div>";

  renderSlider();

    let withPhoto = products.filter(function (p) { return p.image; });
    if (withPhoto.length < 8) withPhoto = products;
    const step = Math.max(1, Math.floor(withPhoto.length / 20));
    let tickerHtml = "";
    for (let round = 0; round < 2; round++) {
        for (let i = 0; i < withPhoto.length && i < 20 * step; i += step) {
            const p = withPhoto[i];
            const photo = p.image ? '<img src="' + escapeHtml(p.image) + '" alt="">' : "";
            tickerHtml += "<span>" + photo + escapeHtml(p.name) + " " + formatRupiah(p.price) + "</span>";
        }
    }
    document.getElementById("ticker").innerHTML = tickerHtml;

    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const dayKeyByIndex = ["", "monday", "tuesday", "wednesday", "thursday", "friday"];
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    let dutyHtml = "";
    if (day === 0 || day === 6) {
        dutyHtml = "<h2>Hari ini " + dayNames[day] + ", stan libur</h2><p>Sampai jumpa hari Senin!</p>";
    } else {
        let onDuty = "";
        let hourList = "";
        for (let i = 0; i < shiftSchedule.length; i++) {
            const row = shiftSchedule[i];
            const startHour = Number(row.time.slice(0, 2));
            const isActive = hour === startHour;
            if (isActive) onDuty = row[dayKeyByIndex[day]];
            hourList += '<div class="' + (isActive ? "now" : "") + '"><small>' + row.time + "</small>" + escapeHtml(row[dayKeyByIndex[day]]) + "</div>";
        }
        const title = onDuty ? "Yang jaga sekarang: <b>" + escapeHtml(onDuty) + "</b>" : "Sekarang di luar jam piket";
        dutyHtml = "<h2>" + title + "</h2><p>Jadwal piket hari " + dayNames[day] + "</p><div class='duty-hours'>" + hourList + "</div>";
    }
    document.getElementById("duty").innerHTML = dutyHtml;

    const categoryList = [["Snack", "img/snack.png"], ["Makanan", "img/makanan.png"], ["Minuman", "img/minuman.png"]];
    let tilesHtml = "";
    for (let i = 0; i < categoryList.length; i++) {
        const name = categoryList[i][0];
        let count = 0;
        for (let k = 0; k < products.length; k++) {
            if (products[k].category === name) count++;
        }
        tilesHtml +=
    '<a class="cat-' + name.toLowerCase() + '" href="catalog.html?category=' + name + '">' +
        '<div class="cat-img"><img src="' + categoryList[i][1] + '" alt="' + name + '"></div>' +
        "<div><h3>" + name + "</h3><p>" + count + " produk</p></div>" +
    "</a>";
    }
    document.getElementById("categories").innerHTML = tilesHtml;

    let favoritesHtml = "";
    for (let i = 0; i < favoriteNames.length; i++) {
        const p = findProduct(favoriteNames[i]);
        if (p) favoritesHtml += productCard(p);
    }
    document.getElementById("favorites").innerHTML = favoritesHtml;

    const weekdayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    let row = "";
    for (let i = 0; i < shiftSchedule.length; i++) {
        const s = shiftSchedule[i];
        const rowStartHour = Number(s.time.slice(0, 2));
        const currentRowClass = (dayKeyByIndex[day] && hour === rowStartHour) ? ' class="current-hour"' : "";
        row += "<tr" + currentRowClass + "><td>" + s.time + "</td>";
        for (let k = 0; k < weekdayKeys.length; k++) {
            const todayClass = dayKeyByIndex[day] === weekdayKeys[k] ? ' class="today"' : "";
            row += "<td" + todayClass + ">" + escapeHtml(s[weekdayKeys[k]]) + "</td>";
        }
        row += "</tr>";
    }
    document.getElementById("schedule-body").innerHTML = row;

    const columnHeaders = document.querySelectorAll(".schedule th");
    for (let k = 0; k < weekdayKeys.length; k++) {
        if (dayKeyByIndex[day] === weekdayKeys[k]) columnHeaders[k + 1].className = "today";
    }

    document.getElementById("whatsapp-button").href = whatsappLink("Halo, saya mau tanya soal produk TIFood");
}

function lowestPrice() {
    let cheapest = products[0].price;
    for (let i = 0; i < products.length; i++) {
        if (products[i].price < cheapest) cheapest = products[i].price;
    }
    return cheapest;
}