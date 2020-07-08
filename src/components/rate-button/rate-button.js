import './rate-button.scss';

(function () {
    let rateButtons = document.querySelectorAll(".rate-button");
    rateButtons.forEach((button) => {
        let upper = button.querySelector(".rate-button__upper");
        let rate = button.dataset.rate;
        upper.style.width = (rate * 100) / 5 + "%";
    });
})();
