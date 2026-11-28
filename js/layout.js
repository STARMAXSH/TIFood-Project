const socialIcons = {
    instagram: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M14 3v11a4 4 0 1 1-4-4"/><path d="M14 3c.4 2.4 2 4 5 4.2"/></svg>'
};

function renderSocialIcons() {
    let results = "";
    for (const name in social) {
        if (social[name]) {
        results += '<a href="' + escapeHtml(social[name]) + '" target="_blank" rel="noopener" aria-label="' + name + '">' + socialIcons[name] + "</a>";
        }
    }
    return '<div class="social">' + results + "</div>";
}

function renderLayout(page) {
    document.getElementById("topbar").innerHTML =
        '<div class="container">' +
            '<a href="index.html"><img class="logo" src="img/logo.png" alt="TIFood"></a>' +
            "<nav>" +
                '<a href="index.html"' + (page === "home" ? ' class="active"' : "") + ">Beranda</a>" +
                '<a href="catalog.html"' + (page === "catalog" ? ' class="active"' : "") + ">Katalog</a>" +
            "</nav>" +
        "</div>";

    document.getElementById("footer").innerHTML =
        '<div class="container footer-body">' +
            "<div>" +
                '<img class="footer-logo" src="img/logo.png" alt="TIFood">' +
                "<p>Booth kampus penyedia snack, makanan, dan minuman untuk mahasiswa, dosen, dan tendik.</p>" +
                renderSocialIcons() +
            "</div>" +
            "<div><h4>Menu</h4>" +
                '<a href="index.html">Beranda</a><a href="catalog.html">Katalog produk</a>' +
                '<a href="' + whatsappLink("") + '" target="_blank" rel="noopener">WhatsApp penjaga</a>' +
            "</div>" +
            "<div><h4>Jam buka</h4><p>Senin–Jumat<br>" + shop.openTime + "–" + shop.closeTime + "</p></div>" +
        "</div>" +
        '<div class="footer-bottom">© 2026 TIFood. Semua hak dilindungi.</div>';
}