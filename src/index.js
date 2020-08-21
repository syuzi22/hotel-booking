require.context('', true, /\.(png|svg|jpg)$/);

const faviconsContext = require.context(
    '!!file-loader?name=favicons/[name].[ext]!.',
    true,
    /favicons\/[^/]+\.(svg|png|ico|xml|webmanifest)$/
  );
faviconsContext.keys().forEach(faviconsContext);

import '@inputmask'

import '@item-quantity-dropdown/item-quantity-dropdown.min.css';
import '@item-quantity-dropdown/item-quantity-dropdown.min.js';

import '@air-datepicker/css/datepicker.min.css';
import '@air-datepicker/js/datepicker.min.js';

import '@ion-rangeslider/js/ion.rangeSlider.min.js';
import '@ion-rangeslider/css/ion.rangeSlider.min.css';

import '@slick-carousel/slick.min.js';
import '@slick-carousel/slick.css';
import '@slick-carousel/slick-theme.css';

import '@fontawesome/css/all.min.css';

import './style.scss';

import '@components/guest-dropdown/guest-dropdown.js'
import '@components/room-dropdown/room-dropdown.js'
import '@components/date-dropdown/date-dropdown.js'
import '@components/filterdate-dropdown/filterdate-dropdown.js'
import '@components/masked-input/masked-input.js'
import '@components/expand-checkbox/expand-checkbox.js'
import '@components/like-button/like-button.js'
import '@components/rate-button/rate-button.js'
import '@components/range-slider/range-slider.js'
import '@components/room/room.js'
import '@components/menu/menu.js'
import '@components/chart/chart.js'

import '@pages/form-elements/form-elements.js'
import '@pages/cards/cards.js'
// import '@pages/landing/landing.js'
