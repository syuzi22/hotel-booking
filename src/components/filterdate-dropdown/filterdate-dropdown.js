let $filterdateDrop = $('.filterdate-dropdown__input');
let $myFilterDatepicker = $('.filterdate-dropdown__input').datepicker().data('datepicker');

$filterdateDrop.datepicker({
    onShow: function(dp) {
        $('.filterdate-dropdown').addClass('filterdate-dropdown--open')
        if (dp.$datepicker.find('.date-dropdown__close').length === 0) {
            dp.$datepicker
                .find('.datepicker--buttons')
                .append('<span class="date-dropdown__close">Применить</span>')
                .click(function(event) {
                    dp.hide();
                });
        }
    },
    onHide: function() {
        $('.filterdate-dropdown').removeClass('filterdate-dropdown--open')
    },
    clearButton: true,
    dateFormat: 'd M',
    prevHtml: '<span class="filterdate-dropdown__prev-next">arrow_back</span>',
    nextHtml: '<span class="filterdate-dropdown__prev-next">arrow_forward</span>',
    offset: 5,
    navTitles: {
        days: 'MM <i>yyyy</i>',
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