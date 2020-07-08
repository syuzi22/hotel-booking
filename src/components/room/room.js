require.context('../../', true, /\.(png|svg|jpg)$/);
import '@components/rate-button/rate-button.js'
import '@slick-carousel/slick.min.js';
import '@slick-carousel/slick.css';
import '@slick-carousel/slick-theme.css';
import './room.scss';

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
