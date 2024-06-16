// Dates 

let date = new Date()

console.log(date.toDateString());
console.log(date.toLocaleDateString());

console.log(date.toString());
console.log(date.toLocaleString());

console.log(date.toTimeString());
console.log(date.toLocaleTimeString());

console.log(date.toISOString());

console.log(typeof date);

let myDate = new Date("2007-01-10")

console.log(myDate.toDateString());
console.log((myDate.getTime() / 1000).toFixed(2));

let myTimeStamp = Date.now()

console.log(myTimeStamp);

let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getTime());
console.log(newDate.getMonth().toLocaleString());
console.log(newDate.getMinutes());