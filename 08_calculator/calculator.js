const add = function(a, b) {
	return a + b;
};

const subtract = function(a ,b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, current) => total + current, 0);
};

const multiply = function(numbers) {
  return numbers.length ? numbers.reduce((total, current) => total * current) : 0; 
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	return num === 0 ? 1 : [...Array(num+1).keys()] // Creates an array from 0 to num
  .slice(1) // Removes the 0
  .reduce((total, current) => total * current); // Multiplies all array elements
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
