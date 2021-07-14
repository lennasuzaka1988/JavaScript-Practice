// Solve the below problems:


// #1) Check if this array includes the name "John".
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// dragons.includes('John') /*false*/


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// console.log(dragons.filter(name => name.includes('John')));


// #3) Create a function that calculates the power of 100 of a number entered as a parameter
const hundredEx = (x) => x**100
console.log(hundredEx(1))


// #4) Using your function from #3, put in the parameter 10000. What is the result?
// Research for yourself why you get this result
console.log(hundredEx(10000))
// It's infinity and not possible to compute such a high number using PC anyways
