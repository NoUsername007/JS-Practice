// !-------------------------------Anime nerd Alert!-------------------------------! //

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const heroes = ["Deadpool", "Loki", "Batman", "Flash", "Spiderman"]
const characters = new Array("Thorfinn", "Gintoki", "Sanji", "Kurapika")

characters.push("Luffy")
characters.push("Shunsui")

characters.unshift("Ichigo")

characters.shift()

console.log(characters.indexOf("Sanji"));

const newArray = characters.join(", ")

console.log(newArray);

console.log("Adwait", characters);

console.log("Original: ", characters);

const slice = characters.slice(1, 3)

console.log("A", characters);
console.log(slice);

const splice = characters.splice(1, 3)

console.log("B", characters);
console.log(splice);

let concat = heroes.concat(characters)

console.log(concat);

let all = [...heroes, ...characters]

console.log(all);

console.log(heroes[5][3]);

const another = [1, 2, 3 ,[4, 5, [6], [7, 8, 9]]]

let beReal = another.flat(Infinity)

console.log(beReal);

console.log(Array.from({name: `Adwait`, age : 15})) // Seems Interesting

let player1 = "Adwait"
let player2 = "Akshad"
let player3 = "Atharva"

console.log(Array.from((player1 + player2 + player3)));