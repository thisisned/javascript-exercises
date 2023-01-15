const palindromes = function (phrase) {
    const a = phrase.toLowerCase().replace(/[^a-z]/g, '');
    return a === a.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
