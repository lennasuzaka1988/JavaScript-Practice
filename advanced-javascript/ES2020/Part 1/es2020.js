// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.

// BigInt is a new type
// typeof 1n
// Output is 'BigInt'
// BigInt is for helping when you encounter JS's max safe integer
// Number.MAX_SAFE_INTEGER + 1 /*works*/
// Number.MAX_SAFE_INTEGER + 10 /*doesn't work*/

// Number.MAX_SAFE_INTEGERn +10n /*does work*/

// *************

// Optional Chaining Operator ?.

// let will_pokemon = {
//     pikachu: {
//         species: 'Mouse Pokemon',
//         height: 0.4,
//         weight: 6
//     }
// }
//
// let andrei_pokemon = {
//     raichu: {
//         species: 'Mouse Pokemon',
//         height: 0.8,
//         weight: 30
//     }
//
// }
//
// // let weight = will_pokemon.pikachu.weight
// // console.log('weight:', weight)
//
//
//
// if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
//     let weight2 = andrei_pokemon.pikachu.weight
//     console.log(weight2)
// } else {
//     let weight2 = undefined
//     console.log(weight2)
// }
// // Too much and annoying!!!
//
//
//
// let weight3 = andrei_pokemon?.pikachu?.weight
// console.log(weight3)
// Much better! This is optional chaining operator

// let andrei_pokemon = {
//     raichu: {
//         species: 'Mouse Pokemon',
//         height: 0.8,
//         weight: 30,
//         power: 'lightning'
//     }
// }

let andrei_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 'lightning'
    }
}

// let power = andrei_pokemon?.pikachu?.power // 'no power'
// console.log(power)

// What if empty string in power? You'll get no power again. // is the or operator. Checks if truthy, otherwise returns no power

// What if pikachu doesn't have a power because it's evolving? You'll want to use the nullish coalescing operator, which doesn't check if a value is false, but instead checks if it's null or undefined

let power = andrei_pokemon?.pikachu?.power ?? 'no power'
console.log(power)