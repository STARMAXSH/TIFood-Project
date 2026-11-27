function renderCatalog() {
    const params = new URLSearchParams(location.search);
    let keyword = params.get("search") || "";
    let selectedCategory = params.get("category") || "Semua";
    let sortBy = "price-asc";

    const searchInput = document.getElementById("search");
    const sortSelect = document.getElementById("sort");
    const buttonsEl = document.getElementById("category-buttons");
    const cardsEl = document.getElementById("card-grid");
    const countEl = document.getElementById("result-count");
    searchInput.value = keyword;

    function update() {
        let results = [];
        for (let i = 0; i < products.length; i++) {
            const p = products[i];
            const matchesName = p.name.toLowerCase().includes(keyword.toLowerCase());
            const matchesCategory = selectedCategory === "Semua" || p.category === selectedCategory;
            if (matchesName && matchesCategory) results.push(p);
        }

        if (sortBy === "price-asc") results.sort(function (a, b) { return a.price - b.price; });
        if (sortBy === "price-desc") results.sort(function (a, b) { return b.price - a.price; });
        if (sortBy === "name") results.sort(function (a, b) { return a.name.localeCompare(b.name); });

        const allCategories = ["Semua", "Snack", "Makanan", "Minuman"];
        let button = "";
        for (let i = 0; i < allCategories.length; i++) {
            const isActive = allCategories[i] === selectedCategory ? ' class="active"' : "";
            button += "<button" + isActive + ' data-category="' + allCategories[i] + '">' + allCategories[i] + "</button>";
        }
        buttonsEl.innerHTML = button;

        countEl.textContent = "Menampilkan " + results.length + " produk";
        if (results.length === 0) {
            cardsEl.innerHTML =
                '<div class="empty"><div class="emoji">🔎</div><h3>Produk tidak ditemukan</h3>' +
                '<p class="muted">Coba kata kunci lain, atau pilih kategori Semua.</p></div>';
            return;
        }
        let cardsHtml = "";
        for (let i = 0; i < results.length; i++) {
            cardsHtml += productCard(results[i]);
        }
        cardsEl.innerHTML = cardsHtml;
    }

    searchInput.addEventListener("input", function () { keyword = searchInput.value; update(); });
    sortSelect.addEventListener("change", function () { sortBy = sortSelect.value; update(); });
    buttonsEl.addEventListener("click", function (e) {
        const button = e.target.closest("button");
        if (button) {
            selectedCategory = button.getAttribute("data-category");
            update();
        }
    });

    update();
}