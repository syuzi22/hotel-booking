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
            return "Сколько комнат";
        }
        let result = [];
        for (let key in itemCount) {
            if (itemCount[key]) {
                if (key === "bedroom") {
                    result.push(
                        itemCount[key] +
                            " " +
                            getNoun(
                                itemCount[key],
                                "спальня",
                                "спальни",
                                "спален"
                            )
                    );
                } else if (key === "bed") {
                    result.push(
                        itemCount[key] +
                            " " +
                            getNoun(
                                itemCount[key],
                                "кровать",
                                "кровати",
                                "кроватей"
                            )
                    );
                } else if (key === "bathroom") {
                    result.push(
                        itemCount[key] +
                            " " +
                            getNoun(
                                itemCount[key],
                                "ванная комната",
                                "ванные комнаты",
                                "ванных комнат"
                            )
                    );
                }
            }
        }

        return result.join(", ");
    }

    $(".room-dropdown__message").iqDropdown({
        setSelectionText: setSelectionText,
    });
});
