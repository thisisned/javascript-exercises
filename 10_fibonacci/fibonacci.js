const fibonacci = function (index) {
    if (index < 0) return "OOPS";
    let prev = 0;
    let current = 1;
    let next = 0;
    for (let i = 0; i < index; i++) {
        next = current + prev;
        prev = current;
        current = next;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;