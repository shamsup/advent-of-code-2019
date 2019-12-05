const path = require('path');
const readInput = require('../readInput');

const input = readInput(path.resolve(__dirname, 'input.txt'));

const lines = input.split('\n');

const numbers = lines.map(s => Number(s));

const divideByThree = n => n / 3;
const roundDown = n => Math.floor(n);
const minusTwo = n => n - 2;
const sum = (a, b) => a + b;

console.log(
  numbers
    .map(divideByThree)
    .map(roundDown)
    .map(minusTwo)
    .reduce(sum)
);
