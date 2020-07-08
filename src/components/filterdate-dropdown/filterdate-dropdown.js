import '@air-datepicker/css/datepicker.min.css';
import '@air-datepicker/js/datepicker.min.js';
import './filterdate-dropdown.scss';


let $filterdateDrop = $('.filterdate-dropdown__input');
let $myFilterDatepicker = $('.filterdate-dropdown__input').datepicker().data('datepicker');

$filterdateDrop.datepicker({
    onShow: function(dp) {
        $('.filterdate-dropdown').addClass('filterdate-dropdown--open');
        if (dp.$datepicker.find('.filterdate-dropdown__close').length === 0) {
            dp.$datepicker
                .find('.datepicker--buttons')
                .append('<span class="filterdate-dropdown__close">Применить</span>')
                .click(function(event) {
                    dp.hide();
                });
        }
    },
    onHide: function() {
        $('.filterdate-dropdown').removeClass('filterdate-dropdown--open')
    },
    onRenderCell: function(date, cellType) {
        if (cellType == 'day') {
            let myclasses = 'filterdate-dropdown__cell';
            let dateArray = $myFilterDatepicker.selectedDates;
            let dateFrom = -1;
            let dateTo = -1;
            let currentCell = date.getTime();
            let dayOfWeek = date.getDay();
            if (dateArray.length >= 2) {
                dateFrom = dateArray[0].getTime();
                dateTo = dateArray[1].getTime();
            }
            if (currentCell >= dateFrom && currentCell <= dateTo) {
                myclasses += ' filterdate-dropdown__in-range';
                if (dayOfWeek === 0) {
                    myclasses += ' filterdate-dropdown__rounded-right';
                } else if (dayOfWeek === 1) {
                    myclasses += ' filterdate-dropdown__rounded-left';
                }
            }

            if (dayOfWeek === 0) {
                myclasses += ' filterdate-dropdown__rounded-right';
            }else if (dayOfWeek === 1) {
                myclasses += ' filterdate-dropdown__rounded-left';
            }

            if ( (currentCell === dateFrom && dayOfWeek === 0) || (currentCell === dateTo && dayOfWeek === 1)) {
                myclasses += ' filterdate-dropdown__not-rounded ';
            }

            return {
                classes: myclasses,
                html: `<div class="filterdate-dropdown__date">${date.getDate()}</div>`
            }
        }
    },
    classes: 'filterdate-dropdown__elem',
    clearButton: true,
    dateFormat: 'd M',
    prevHtml: '<span class="filterdate-dropdown__prev-next">arrow_back</span>',
    nextHtml: '<span class="filterdate-dropdown__prev-next">arrow_forward</span>',
    offset: 5.5,
    navTitles: {
        days: 'MM yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    }
});


$('.filterdate-dropdown__micons').click(function() {
    let isOpen =  $filterdateDrop.data('isOpen');
    if(isOpen) {
        $myFilterDatepicker.hide();
    }else {
        $myFilterDatepicker.show();
    }
    isOpen = !isOpen;
    $filterdateDrop.data('isOpen', isOpen);
});


