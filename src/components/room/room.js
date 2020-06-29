$(document).ready(function() {
    $(".room").each(function() {
      const self = this;
      const slider = $(self).find(".room__slider");
      $(slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(self).find('.room-slider__prev'),   
        nextArrow: $(self).find('.room-slider__next'),  
        dots: true
      });
    });
});
