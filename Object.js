let sym = Symbol("Hey!")

const user = {
    name: "Adwait",
    [sym]: Symbol("Heyo!"),
    age: 15,
    gender: "Male",
    isStudent: true
}

console.log(typeof user[sym]);