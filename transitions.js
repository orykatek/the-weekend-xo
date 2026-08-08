
document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.getElementById("xoTransition");

    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "xoTransition";
        overlay.innerHTML = '<div class="xo-mark">XO</div>';
        document.body.appendChild(overlay);
    }

    document.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function (event) {
            var href = link.getAttribute("href");

            if (!href || href.startsWith("#") || link.target === "_blank") {
                return;
            }

            var url;
            try {
                url = new URL(href, window.location.href);
            } catch (e) {
                return;
            }

            if (url.origin !== window.location.origin) {
                return;
            }

            if (url.pathname === window.location.pathname) {
                return;
            }

            event.preventDefault();
            overlay.classList.remove("active");
            void overlay.offsetWidth;
            overlay.classList.add("active");

            window.setTimeout(function () {
                window.location.href = url.href;
            }, 650);
        });
    });
});
