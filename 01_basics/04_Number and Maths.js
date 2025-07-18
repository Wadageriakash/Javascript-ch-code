const score = 400
console.log(score);
console.log(typeof score);

const balance = new Number(100)
console.log(balance) // [Number: 100]
console.log(typeof balance) // object

console.log(balance.toString()); // 100
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.897;
console.log(otherNumber.toPrecision(3)) // 124

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); // 1,00,00,000
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,000

console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

//*************************Maths**************************** */

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 6, 7, 0)); // 0
console.log(Math.max(4, 6, 7, 0)); // 7

console.log(Math.random());
console.log((Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 20
