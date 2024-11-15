const squareRoot = num => {
  return num * num;
};
console.log('Square Root: ', squareRoot(3));

const person = {
  firstName: 'Renzell Vince',
  lastName: 'Bolante',
  age: 32,
  gender: 'male',
};
const full_name = person.firstName + ' ' + person.lastName;
console.log(`Happy Birthday ${full_name}! You're now ${person.age} years old.`);

const { firstName, lastName, age, gender } = person;

const arr1 = [5, 6, 3, 1];
const arr2 = [10, 99, 22, 33, 55];
const mergeArray = [...arr1, ...arr2];
console.log('Merge Array: ', mergeArray);

const area = (length = 1, width = 1) => {
  return length * width;
};
console.log('Default Area: ', area());
console.log('Area: ', area(5, 7));

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce = () => {
    console.log(
      `Hello! Nice to meet you. My name is ${this.name} and I am now ${this.age} years old.`
    );
  };
}

const human = new Person('Chulen', 32);

human.introduce();
