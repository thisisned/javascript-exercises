const palindromes = function (phrase) {
    const regEx = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
    const a = phrase.toLowerCase().replace(regEx, '');
    const b = a.split('').reverse().join('');
    return a === b ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
