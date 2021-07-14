// Reference type

// var object1 = {value: 10};
// var object2 = object1;
// var object3 = {value: 10}
//
// object1.value = 15;
// object2.value = 15;
// object3.value = 10

// Javascript (built-in types) are primitive types
// Reference types are created by the programmer
// The objects above are reference types
// [] === [];
// Data structure one/data structure 2


// Context
// Scope is within curly brackets remember
// function b() {
//     let a = 4;
// }

// Context is where we are within the function
// console.log(this)
// console.log(this === window)
// this.alert('hello')

// Best way to think about: what is to the left of the DOM? References the object inside of
// function a() {
//     console.log(this)
// }

// This still refers to the function
// To create a new value for this = const object4 = { a: function() {console.log(this)}};
// this now indicates object


// Instantiation
// You're making copies of an object using class
// class Player {
//     constructor(name, type) {
//         console.log('player', this);
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
//     }
// }
// // First that gets run is constructor which creates properties for the class
//
// class Wizard extends Player {
//     constructor(name, type) {
//         super(name, type);
//         console.log('wizard', this)
//     }
//     play() {
//         console.log(`Wheeeee! I'm a ${this.type}`);
//     }
// }
//
// const wizard1 = new Wizard('Bianca', 'Healer');
// const wizard2 = new Wizard('Shawn', 'Dark Magic');

// Wizard to extend to whatever player has
// You want to use super so that you have access to the Player class
// New means new, in this case, new Wizard with two parameters, and goes to the Wizard class which extends to the Player
// thanks to super, then goes to the constructor, which attaches to the wizard function which then runs the play function
// Quick version:
// 1. New keyword with 2 params -> Wizard class
// 2. Wizard class -> super with params
// 3. Super -> Player constructor with params
// 4. Constructor now = Wizard func
// 5. Wizard fun runs play func

// wizard1.play()
// wizard2.play()
// wizard1.introduce()
// wizard2.introduce()

