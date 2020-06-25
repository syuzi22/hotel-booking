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
    classes: 'date-dropdown__elem',
    clearButton: true,
    prevHtml: '<span class="date-dropdown__prev-next">arrow_back</span>',
    nextHtml: '<span class="date-dropdown__prev-next">arrow_forward</span>',
    offset: 5.5,
    navTitles: {
        days: 'MM yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    },
    onRenderCell: function(date, cellType) {
        if (cellType == 'day') {
            let myclasses = 'date-dropdown__cell';
            let dateArray = $myDatepicker.selectedDates;
            let dateFrom = -1;
            let dateTo = -1;
            let currentCell = date.getTime();
            let dayOfWeek = date.getDay();
            if (dateArray.length >= 2) {
                dateFrom = dateArray[0].getTime();
                dateTo = dateArray[1].getTime();
            }
            if (currentCell >= dateFrom && currentCell <= dateTo) {
                myclasses += ' date-dropdown__in-range';
                if (dayOfWeek === 0) {
                    myclasses += ' date-dropdown__rounded-right';
                } else if (dayOfWeek === 1) {
                    myclasses += ' date-dropdown__rounded-left';
                }
            }

            if (dayOfWeek === 0) {
                myclasses += ' date-dropdown__rounded-right';
            }else if (dayOfWeek === 1) {
                myclasses += ' date-dropdown__rounded-left';
            }

            if ( (currentCell === dateFrom && dayOfWeek === 0) || (currentCell === dateTo && dayOfWeek === 1)) {
                myclasses += ' date-dropdown__not-rounded ';
            }

            return {
                classes: myclasses,
                html: `<div class="date-dropdown__date">${date.getDate()}</div>`
            }
        }
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


