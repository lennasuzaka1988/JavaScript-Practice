// // change everything below to the newer Javascript!
//
// // let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';

// let a = 'test';
// const b = true;
// const c = 789;
// a = 'test2';
// console.log(a, b, c)

// // Destructuring
// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };
//
// const { firstName, lastName, age, eyeColor } = person;


// Object properties
// const a = 'test';
// const b = true;
// const c = 789;
//
// const okObj = {
//     a,
//     b,
//     c
// };
//
// console.log(okObj)


// Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// const firstName = 'Taini';
// const city = 'NYC';
// const greeting = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer, no???`;
//
// console.log(greeting)


// default arguments
// default age to 10;
// function isValidAge(age) {
//     return age
// }

// function isValidAge(age=10) {
//     return age
// }
//
// console.log(isValidAge('18'))



// Symbol
// Create a symbol: "This is my first Symbol"

// let sym1 = Symbol('This is my first symbol');
// console.log(sym1)


// Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

const whereAmI = (userName, location) => {
    if (userName && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

console.log(whereAmI())