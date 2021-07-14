// Advanced arrays

const array = [1, 2, 10, 16]

// const double = []
// const newArray = array.forEach((num) => {
//     double.push(num * 2);
// })
// console.log(double)


// map, filter, reduce

// Loop over each element and return a new array. Applies function to each element. Expects operation to return. Same as python. Always has a return element.
// const mapArray = array.map((num) => {
//     return num * 2
// })
//
// console.log('map', mapArray)

// When you use a single parameter in a function, you don't need to use brackets
// Simple method
// const mapArray = array.map(num => num * 2);


// filter means that it filters elements that don't meet the conditions listed in the function
// const filterArray = array.filter(num => {
//     return num > 5
// })

// short form
// const filterArray = array.filter(num => num > 5);
// console.log('filter', filterArray)


// reduce (filtering and mapping). Accumulator is something where we can store the information that happens in the body of the function
// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator + num
// }, 5);

// // 5 is the starting number, so you'll end up with [1 (+5) + 2 + 10 + 16] = 34
// console.log('reduce', reduceArray)

// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator * num
// }, 5);
// console.log('reduce', reduceArray)
