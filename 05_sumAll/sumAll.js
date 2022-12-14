const sumAll = function(first, second) {
    if (typeof first != 'number' || typeof second != 'number') return 'ERROR';
    if (first < 0 || second < 0) return 'ERROR';
    let total = 0;
    if (first > second) {
        const temp = first;
        first = second;
        second = temp;
    }
    for (i = first; i <= second; i++) {
        total += i;
    }
    return total;
}

// Do not edit below this line
module.exports = sumAll;