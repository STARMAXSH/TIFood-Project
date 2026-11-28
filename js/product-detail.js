function renderDetail() {
    const container = document.getElementById("detail");

    const id = Number(new URLSearchParams(location.search).get("id"));

    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) product = products[i];
    }

    if (product === null) {
        container.innerHTML =
            '<div class="empty" style="margin-top:40px"><div class="emoji">🔎</div><h3>Produk tidak ditemukan</h3>' +
            '<a class="btn" href="catalog.html">Kembali ke katalog</a></div>';
        return;
    }

    document.title = product.name + " · TIFood";

    let specsHtml = "";
    const specList = product.specs || [];
    for (let i = 0; i < specList.length; i++) {
        specsHtml += "<li>" + escapeHtml(specList[i]) + "</li>";
    }

    let relatedHtml = "";
    let relatedCount = 0;
    for (let i = 0; i < products.length; i++) {
        const p = products[i];
        if (p.category === product.category && p.id !== product.id && relatedCount < 4) {
            relatedHtml += productCard(p);
            relatedCount++;
        }
    }
    
    const whatsappMessage = "Halo, apakah " + product.name + " masih ada?";

    container.innerHTML =
        '<a class="back" href="catalog.html">‹ Kembali ke katalog</a>' +
        '<div class="detail ' + categoryClass(product) + '">' +
            '<div class="detail-image">' + productImage(product) +
                '<span class="price-tag large">' + formatRupiah(product.price) + "</span></div>" +
            '<div class="detail-body">' +
                '<span class="badge">' + escapeHtml(product.category) + "</span>" +
                "<h1>" + escapeHtml(product.name) + "</h1>" +
                "<h2>Tentang produk ini</h2>" +
                '<ul class="specs">' + specsHtml + "</ul>" +
                '<a class="btn green" href="' + whatsappLink(whatsappMessage) + '" target="_blank" rel="noopener">Tanya stok via WhatsApp</a>' +
                '<p class="buy-info">Bayar langsung di stan TIFood, Senin–Jumat ' + shop.openTime + "–" + shop.closeTime + ".</p>" +
            "</div>" +
        "</div>" +
        '<section class="section"><div class="section-title"><h2>Produk serupa</h2><a href="catalog.html?category=' + product.category + '">Lihat semua ' + product.category + "</a></div>" +
        '<div class="card-grid">' + relatedHtml + "</div></section>";
}