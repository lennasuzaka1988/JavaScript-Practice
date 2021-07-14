// const first = () => {
//     const greet = 'Hi';
//     const second = () => {
//         alert(greet);
//     }
//     return second;
// }
//
// const newFunc = first();
// newFunc();

//Closures = function runs, function executed, and will never run again. BUT it's going to remember that there are references to those variables
//So the child scope always has access to the parent scope

//Currying
const multiply = (a, b) => a * b;

//Currying here
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(5))

//Any time you multiply by 5, b takes the input number
curriedMultiply(3)(4)

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

//With compose
compose(sum, sum)(5)

//Side effect: any action happening in the function that affects the outside code. Avoid!
var a = 1;
function b() {
    a = 2;
}

//Functional purity or determinism: avoid side effects and always want to return a value