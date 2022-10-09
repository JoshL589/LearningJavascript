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

const flight = 'LH234';
const josh = {
  name: 'Joshua Li',
  passport: 2395823434,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2395823434) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

console.log(flight);
console.log(josh);
checkIn(flight, josh);
console.log(flight);
console.log(josh);

// Is the same as doing...
const flightNum = flight;
const passenger = josh;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(josh);
checkIn(flight, josh);
console.log(flight);
console.log(josh);
