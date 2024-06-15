const score = 100;
console.log(score);

const balance = new Number(100.2080390399999)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.1896
let number = otherNumber.toPrecision(6)
console.log(number);

const zeros = 100000000

console.log(zeros.toLocaleString("en-IN"));

// -------------------------------------------------------------------------------

// Maths

console.log(Math.ceil(Math.random()*10));

const min = 10
const max = 20

let random = Math.random() * ( max - min + 1 )
console.log(Math.floor(random + min));