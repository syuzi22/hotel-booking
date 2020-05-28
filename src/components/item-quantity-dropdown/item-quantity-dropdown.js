$(document).ready(function () {

    // const counterClass = 'js-counter';
    // const controlsClass = 'js-iqdropdown-item-controls';

    function setSelectionText (itemCount, totalItems) {
            console.log(itemCount);
            // console.log(totalItems);
            
            if (totalItems === 1) {
                return totalItems + " гость";
            } else if (totalItems > 1 && totalItems < 5) {
                return totalItems + " гостя";
            } else if (totalItems >= 5) {
                return totalItems + " гостей";
            }
            return "Сколько гостей";
    }

    $(".custom-message").iqDropdown({
  
        // onChange: function(id, count, totalItems) {
        //     console.log(id, count, totalItems);
        // },

        setSelectionText: setSelectionText,
        // controls : {
        //     counterCls: 'counter ' + counterClass,
        //     controlsCls: 'iqdropdown-item-controls ' + controlsClass,
        // }
    });

    // let resetBut = document.querySelector(".iqdropdown-reset");
    // let iqdropdownSelection = document.querySelector(".iqdropdown-selection");

    // resetBut.addEventListener('click', function(e) {
    //     const parent = this.closest('.iqdropdown-menu');
    //     if (!parent) {
    //         return;
    //     }
    //     let counters = parent.querySelectorAll('.' + counterClass);
    //     counters.forEach((elem) => (elem.textContent = 0));

    //     iqdropdownSelection.textContent =  setSelectionText(null, 0);
        
    // })

});
