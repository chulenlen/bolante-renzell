// a. Calculate the square root of a given number.
const squareRoot = num => num * num;

console.log('Square Root: ', squareRoot(3));

// b. Generate a random number between 1 and 10.
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log('Random Number: ', randomNumber);

// c. Convert a string representation of a number to an actual number.
const stringNumber = '48';

// d. Check if a value is not a number.
console.log('Converted Number: ', typeof stringNumber);

// e. Convert a number to a string.
const number = parseInt(stringNumber);
console.log('Number: ', number);
console.log('Type: ', typeof number);
