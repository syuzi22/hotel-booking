$(document).ready(function() {
    $(".room__slider").slick({
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.room-slider__prev'),
        nextArrow: $('.room-slider__next'),
        dots: true
      });
});