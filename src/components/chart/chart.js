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

let chartNumNode = document.querySelector('.chart__num');
if (chartNumNode) {
    let chartNum = + chartNumNode.textContent;
    let chart__label = document.querySelector('.chart__label');
    chart__label.innerHTML = getNoun(chartNum, 'голос', 'голоса', 'голосов');
}

