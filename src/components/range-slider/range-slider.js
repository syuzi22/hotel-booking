let $rangeInput = $('.range-slider__input')
let $rangeFrom = $('.range-slider__from');
let $rangeTo = $('.range-slider__to');

$rangeInput.ionRangeSlider({
    type: "double",
    min: 0,
    max: 17000,
    from: 5000,
    to: 10000,
    step: 100,
    hide_min_max: true,
    hide_from_to: true,
    skin: "hotel",
    onStart: function(data) {
        let $formatFrom = new Intl.NumberFormat('ru-RU', { 
            style: 'currency', 
            currency: 'RUB', 
            currencyDisplay: 'symbol',
            minimumFractionDigits: 0
        }).format(data.from);

        let $formatTo = new Intl.NumberFormat('ru-RU', { 
            style: 'currency', 
            currency: 'RUB', 
            currencyDisplay: 'symbol',
            minimumFractionDigits: 0
        }).format(data.to);

        $rangeFrom.text($formatFrom + ' - ')
        $rangeTo.text($formatTo)
    },
    onChange: function(data) {
        let $formatFrom = new Intl.NumberFormat('ru-RU', { 
            style: 'currency', 
            currency: 'RUB', 
            currencyDisplay: 'symbol',
            minimumFractionDigits: 0
        }).format(data.from);

        let $formatTo = new Intl.NumberFormat('ru-RU', { 
            style: 'currency', 
            currency: 'RUB', 
            currencyDisplay: 'symbol',
            minimumFractionDigits: 0
        }).format(data.to);

        $rangeFrom.text($formatFrom + ' - ')
        $rangeTo.text($formatTo)
    }
});


