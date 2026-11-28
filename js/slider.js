function renderSlider() {
    const container = document.getElementById("slider");
    let slidesHtml = "";
    let dotsHtml = "";
    for (let i = 0; i < homeBanners.length; i++) {
        const b = homeBanners[i];
        slidesHtml +=
            '<div class="slide ' + b.color + '">' +
                '<div class="slide-text"><h2>' + escapeHtml(b.title) + "</h2><p>" + escapeHtml(b.text) + "</p>" +
                '<a class="btn" href="' + escapeHtml(b.link) + '">' + escapeHtml(b.button) + "</a></div>" +
                '<img src="' + escapeHtml(b.image) + '" alt="">' +
            "</div>";
        dotsHtml += '<button data-index="' + i + '" aria-label="Banner ' + (i + 1) + '"></button>';
    }
    container.innerHTML =
        '<div class="slide-track" id="slide-track">' + slidesHtml + "</div>" +
        '<button class="slide-arrow left" aria-label="Sebelumnya">‹</button>' +
        '<button class="slide-arrow right" aria-label="Berikutnya">›</button>' +
        '<div class="slide-dots" id="slide-dots">' + dotsHtml + "</div>";

    const track = document.getElementById("slide-track");
    const allDots = document.querySelectorAll("#slide-dots button");
    let number = 0;
    let timer = null;

    function goTo(target) {
        number = (target + homeBanners.length) % homeBanners.length;
        track.style.transform = "translateX(-" + number * 100 + "%)";
        for (let i = 0; i < allDots.length; i++) {
            allDots[i].className = i === number ? "active" : "";
        }
    }
    function startAuto() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;   // hormati pengaturan "kurangi gerakan"
        timer = setInterval(function () { goTo(number + 1); }, 5000);
    }
    function stop() { clearInterval(timer); }

    container.querySelector(".left").addEventListener("click", function () { goTo(number - 1); });
    container.querySelector(".right").addEventListener("click", function () { goTo(number + 1); });
    for (let i = 0; i < allDots.length; i++) {
        allDots[i].addEventListener("click", function () { goTo(i); });
    }
    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", startAuto);

    goTo(0);
    startAuto();
}