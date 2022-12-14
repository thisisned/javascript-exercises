const removeFromArray = function(array, ...removals) {
    const result = array;
    for (remove of removals) {
        let index = result.indexOf(remove);
        if (index > -1) {
            result.splice(index, 1);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;