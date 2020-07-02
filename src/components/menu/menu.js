(function () {
    let menu = document.querySelectorAll(".menu");
    menu.forEach((value) => {
        value.addEventListener("click", function (event) {
            let gamburger = value.querySelector(".fa-bars");
            let menuTop = value.querySelector(".menu__top");
            if (event.target === gamburger) {
                menuTop.classList.toggle("menu__top_show");
            }
        });
    });
})();
