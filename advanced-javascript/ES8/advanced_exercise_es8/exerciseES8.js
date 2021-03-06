// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'

// when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);
// console.log(turtle.padStart(7))
// console.log(rabbit.padStart(7))


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, '=');
// Instead of space being used, the space is being replaced by = but still uses the same number of padding


// #3) Get the below object to go from:
// let obj = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// to this:
// 'my name is Rudolf the raindeer'

let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

console.log(Object.entries(obj).map(value=>
    value.join(" ")).join(' '))
