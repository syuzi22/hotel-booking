(function () {
    document.querySelectorAll(".expand-checkbox").forEach((value) => {
        let expHeading = value.querySelector(".expand-checkbox__heading");
        let expList = value.querySelector(".expand-checkbox__list");
        expHeading.addEventListener("click", function () {
            expList.classList.toggle("expand-checkbox__list--open");
            expHeading.classList.toggle("expand-checkbox__heading--open");
        });
    });
})();
