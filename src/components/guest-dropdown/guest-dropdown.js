$(document).ready(function () {

    function getNoun(number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
            return five;
        }
        n %= 10;
        if (n === 1) {
            return one;
        }
        if (n >= 2 && n <= 4) {
            return two;
        }
        return five;
    }

    function setSelectionText(itemCount, totalItems) {
        if (totalItems === 0) {
            let reset = document.querySelector('.iqdropdown-reset');
            reset.style.display = 'hidden';
            return "Сколько гостей";
        }

        const result = [];
        const infants = itemCount['infant'];
        const adults = totalItems - infants;

        if (adults) {
            result.push(
                adults + " " + getNoun(adults, "гость", "гостя", "гостей")
            );
        }
        if (infants) {
            result.push(
                infants + " " + getNoun(infants, "младенец", "младенца", "младенцев")
            );
        }

        return result.join(", ");
    }

    let resetCls = 'iqdropdown-reset';

    $(".guest-dropdown__message").iqDropdown({
        controls: {
            resetCls: resetCls
        },
        setSelectionText: setSelectionText,
        onUpdateDisplay: ($this, totalItems) => {
            if (totalItems > 0) {
                $this.find(`.${resetCls}`).css("visibility", "visible");
              } else {
                $this.find(`.${resetCls}`).css("visibility", "hidden");
              }
        }
    });
});

