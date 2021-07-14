// type coercion means operands (left and right of operator) will be changed in types to match
// Javascript has a heavy type coercion

// 1 == 1
// Happens with == sign So it tries to coerce
// 1 === '1' don't try and coerce the values with ===
// Always use === instead of ==
// Doesn't always include = sign. If statement also involves it

// if (1) {
//     console.log(5)
// }

// Turns 1 into a boolean meaning false so output is false
// Use these references:
//     https://dorey.github.io/JavaScript-Equality-Table/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// https://262.ecma-international.org/5.1/#sec-11.9.3

// -0 === +0
// These are read as true so instead do Object.is(-0, +1)

// NaN == NaN
// This is false but:
// NaN === NaN
// Outputs true
