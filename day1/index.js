const path = require('path');
const readInput = require('../readInput');

const input = readInput(path.resolve(__dirname, 'input.txt'));

const lines = input.split('\n');

const numbers = lines.map(s => Number(s));

const divideByThree = n => n / 3;
const roundDown = n => Math.floor(n);
const minusTwo = n => n - 2;
const sum = (a, b) => a + b;

const calculateFuelForMass = n => minusTwo(roundDown(divideByThree(n)));

const calculateMassIncludingFuel = n => {
  let totalFuel = 0;
  let mass = n;
  while ((mass = calculateFuelForMass(mass)) > 0) {
    totalFuel += mass;
  }

  return totalFuel;
};

console.log(numbers.map(calculateMassIncludingFuel).reduce(sum));
