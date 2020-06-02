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

    $(".guest-custom-message").iqDropdown({
        setSelectionText: setSelectionText,
        onChange: function(id, count, totalItems) {
            console.log(id, count, totalItems);   
        },
    });
});
