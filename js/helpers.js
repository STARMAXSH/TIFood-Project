function formatRupiah (amount) {
    return "Rp " + amount.toLocaleString("id-ID");
}

function escapeHtml (text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function whatsappLink (message) {
    let number = shop.whatsapp.replace(/\D/g, "");
    if (number.startsWith("0")) number = "62" + number.slice(1);
    let url = "https://wa.me/" + number;
    if (message) url = url + "?text=" + encodeURIComponent(message);
    return url;
}

function productImage (product) {
    if (product.image) {
        return '<img src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + '">';
    }
    return product.emoji || "🛒";
}

function categoryClass (product) {
    return "cat-" + product.category.toLowerCase();
}

function productCard (p) {
    return '<a class="card ' + categoryClass(p) + '" href="product-detail.html?id=' + p.id + '">' +
        '<div class="card-image">' + productImage(p) + "</div>" +
        '<div class="card-body">' +
            '<span class="badge">' + escapeHtml(p.category) + "</span>" +
            "<h3>" + escapeHtml(p.name) + "</h3>" +
            '<span class="price-tag">' + formatRupiah(p.price) + "</span>" +
        "</div></a>";
}

function findProduct(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === name) return products[i];
    }
    return null;
}

function setupReveal(selector) {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(function (entries) {
        for (let i = 0; i < entries.length; i++) {
            if (!entries[i].isIntersecting) continue;
            const el = entries[i].target;
            el.classList.add("visible");
            observer.unobserve(el);
            setTimeout(function () { el.classList.remove("reveal", "visible"); el.style.transitionDelay = ""; }, 1200);
        }
    }, { threshold: 0.12 });
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add("reveal");
        items[i].style.transitionDelay = (i % 4) * 90 + "ms";
        observer.observe(items[i]);
    }
}