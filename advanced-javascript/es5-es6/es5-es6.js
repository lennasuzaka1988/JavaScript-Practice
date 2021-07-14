// let + const

// const player = 'bobby';
// let experience = 100;
// let wizardLevel = false;
//
// if (experience > 90) {
//     let wizardLevel = true;
// }
//
// experience = 80

// const won't let you update variable

// const obj = {
//     player: 'bobby',
//     experience: 100,
//     wizardLevel: false
// }

// to change a property within an object but cannot reassign the variable

// obj.wizardLevel = true;

// Destructuring

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;
//
// const { player, experience } = obj;
// let { wizardLevel } = obj;

// const name = 'john snow';
//
// const obj = {
//     [name]: 'hello',
//     ['ray' + 'smith']: 'hihi'
// }

const a = "Simon";
const b = true;
const c = {};

const obj = {
    a,
    b,
    c
}

// Only do the above is property and value are the same

// Template strings

// const name = "Sally";
// const age = 34;
// const pet = "horse";
// const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;

// Default arguments

// function greet(name='', age=30, pet='cat') {
//     return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;
// }

// greet("john", 50, "monkey");

// Symbol

// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');
//
// sym2 === sym3

// Creates a unique type so no conflict

// arrow functions

// const add = (a, b) => a + b;

// If a single return you can put it all on one line, otherwise create it within brackets