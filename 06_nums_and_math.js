const score = 100;
const balance = new Number(299);
console.log(score); //output: 100
console.log(balance); //output: [Number: 299]
console.log( balance.toFixed(2) ); //output: 299.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //output: 23.9
//what id does? it rounds off the number to 3 digits

const num1 = 1234567886543
console.log(num1.toLocaleString('en-IN'))

//maths library
console.log(Math.PI);
console.log(Math.abs(-100)); //output: 100
console.log(Math.round(4.1)); //output: 4
console.log(Math.ceil(4.1)); //output: 5
console.log(Math.floor(4.9)); //output: 4
console.log(Math.sqrt(81)); //output: 9
console.log(Math.min(1, 2, 3, 4, 5)); //output: 1

console.log(Math.random()); //output: 0.123456789
console.log(Math.random() * 10); //output: 1.23456789
console.log((Math.random() * 10) + 1); //output: 1.23456789

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))
