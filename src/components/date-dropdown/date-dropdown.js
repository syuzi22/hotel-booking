let $start = $('.date-dropdown__start');
let $end = $('.date-dropdown__end');
let $myDatepicker = $start.datepicker().data('datepicker');

$start.datepicker({ 
    onShow: function(dp) {
        $('.date-dropdown').addClass('date-dropdown--open')
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
        $('.date-dropdown').removeClass('date-dropdown--open')
    },
    onSelect: function (fd) { 
      $start.val(fd.split("-")[0]);
      $end.val(fd.split("-")[1]);
    },
    clearButton: true,
    prevHtml: '<span class="date-dropdown__prev-next">arrow_back</span>',
    nextHtml: '<span class="date-dropdown__prev-next">arrow_forward</span>',
    offset: 5,
    navTitles: {
        days: 'MM <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    }
});

$end.click(function() {
    $myDatepicker.show();
});

$('.date-dropdown__micons').click(function() {
    let isOpen =  $start.data('isOpen');
    if(isOpen) {
        $myDatepicker.hide();  
    }else {
        $myDatepicker.show();  
    }
    isOpen = !isOpen;
    $start.data('isOpen', isOpen);
});
