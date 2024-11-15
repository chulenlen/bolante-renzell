function greet() {
  console.log('Hello World!');
}

greet();

function add(num1, num2) {
  return num1 + num2;
}

const sum = add(5, 3);

console.log('Sum: ', sum);

function multiply(num1, num2) {
  return num1 * num2;
}

const product = multiply(4, 2);

console.log('Product: ', product);

function isEven(num) {
  return num % 2 === 0;
}

const even = isEven(6);

console.log('Even: ', even);

function square(num) {
  return num * num;
}

const squaredValue = square(3);

console.log('Squared Value: ', squaredValue);

function fullName(firstName, lastName) {
  let fullName = firstName + ' ' + lastName;

  return fullName;
}

const name = fullName('John', 'Doe');

console.log('Name: ', name);

function capitalize(string) {
  return string.toUpperCase();
}

const capitalizedString = capitalize('javascript');

console.log('Capitalized String: ', capitalizedString);
