require.context('../../', true, /\.(png|svg|jpg)$/);

import '@inputmask'

import '@item-quantity-dropdown/item-quantity-dropdown.min.css';
import '@item-quantity-dropdown/item-quantity-dropdown.min.js';

import '../../../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../../../node_modules/air-datepicker/dist/js/datepicker.min.js';

import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js';
import '../../../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css';

import '../../components/guest-dropdown/guest-dropdown.js'
import '../../components/room-dropdown/room-dropdown.js'
import '../../components/date-dropdown/date-dropdown.js'
import '../../components/filterdate-dropdown/filterdate-dropdown.js'
import '../../components/masked-input/masked-input.js'
import '../../components/expand-checkbox/expand-checkbox.js'
import '../../components/like-button/like-button.js'
import '../../components/rate-button/rate-button.js'
import '../../components/range-slider/range-slider.js'

import './form-elements.scss';


document.addEventListener('click', function(event) {
    let target = event.target;
    let allExpCheckboxes = document.querySelectorAll('.expand-checkbox');
    let allRoomDropdowns = document.querySelectorAll('.room-dropdown');
    let allGuestDropdowns = document.querySelectorAll('.guest-dropdown');
    allExpCheckboxes.forEach(value => {
        if (!value.contains(target)) {
            value.querySelector('.expand-checkbox__heading').classList.remove('expand-checkbox__heading--open');
            value.querySelector('.expand-checkbox__list').classList.remove('expand-checkbox__list--open');
            event.stopPropagation();
        }
    })

    allRoomDropdowns.forEach(value => {
        if (!value.contains(target)) {
            value.querySelector('.room-dropdown__message').classList.remove('menu-open');
        }
    })
    allGuestDropdowns.forEach(value => {
        if (!value.contains(target)) {
            value.querySelector('.guest-dropdown__message').classList.remove('menu-open');
        }
    })
   
})

