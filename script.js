'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LM123', undefined, 1000);

// const flight = 'LH234';
// const josh = {
//   name: 'Joshua Li',
//   passport: 2395823434,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'Lh999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 2395823434) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// console.log(flight);
// console.log(josh);
// checkIn(flight, josh);
// console.log(flight);
// console.log(josh);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = josh;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(josh);
// checkIn(flight, josh);
// console.log(flight);
// console.log(josh);

// higher order functions

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaSciprt is the best!', oneWord);

// const high5 = function () {
//   console.log('wave');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Josh');
// greeterHey('Steven');
// const greeterPotato = greet('Hey Potato');
// greeterPotato('Josh');
// greeterPotato('Steven');

// greet('Hello')('Josh');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Josh');

const lufthansa = {
  airline: 'Lufthanse',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Joshua Li');
lufthansa.book(239, 'John Smith');

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// call method

// book(23, 'Sarah Williams');
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 582, 'Mary Cooper');
console.log(swiss);

// apply method
const flightData = [582, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);
