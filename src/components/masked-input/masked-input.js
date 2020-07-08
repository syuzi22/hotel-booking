import '@inputmask';
import './masked-input.scss';

$(document).ready(function(){
    $(".masked-input__inp").inputmask("datetime", {
        "placeholder": "ДД.ММ.ГГГГ",
        inputFormat: 'dd.mm.yyyy',
        displayFormat: 'dd.mm.yyyy',
    });
});