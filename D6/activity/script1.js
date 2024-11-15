const students = [
  {
    name: 'Renzell Vince Bolante',
    age: 32,
    grade: 86,
  },
  {
    name: 'Dency Asia',
    age: 26,
    grade: 92,
  },
  {
    name: 'Alexis Reyes',
    age: 32,
    grade: 93,
  },
];

console.log('2nd Student Name: ', students[1].name);

students.push({
  name: 'Juan Sipag',
  age: 18,
  grade: 81,
});

for (let i = 0; i < students.length; i++) {
  console.log(
    `Student Name: ${students[i].name}, Grade: ${students[i].grade} `
  );
}

const book = {
  title: 'Atomic Habits',
  author: 'James Clear',
  year: 2018,
};

console.log(`Book Title: ${book.title}`);

book.year = 1930;
// console.log(`Book Year: ${book.year}`);

book.getSummary = function () {
  let bookInfo = `Book Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;

  return bookInfo;
};

console.log(book.getSummary());

const library = [];
library.push(book);

console.log('Library: ', library);

const car = {
  brand: 'Toyota',
  model: '86',
  year: 2013,
};

console.log(`Car Model: ${car.model}`);

car.year = 2023;
// console.log(`Car Year: ${car.year}`);

car.startEngine = function () {
  console.log("Car's Engine is Starting!!!");
};

car.startEngine();

const garage = [];
garage.push(car);

console.log('Garage: ', garage);

const person = {
  name: 'Jec Co',
  age: 33,
  city: 'Malabon',
};

console.log(`Age: ${person.age}`);
