// .flat() Array Method <--
const array = [1,2,3,4,5]
console.log(array.flat())

// what flat is useful for
const array2 = [1,[2,3],[4,5]]
console.log(array2.flat())

// another example
const array3 = [1,2,[3,4,[5]]]
console.log(array3.flat())
// It's not completely 1 level. You can tell it how many layers to flatten
console.log(array3.flat(2))

// For extremely deep arrays, you can just throw a greater amount of depth
console.log(array3.flat(50))

// Can also do the bottom when you have a lot of entries
const entries = ['bob', 'sally',,,,,,,,'cindy']
console.log(entries.flat())


// .flatMap() Allows us to use flat and Map functions on an array
// const jurassicParkChaos = jurassicPark.flatMap(creature => creature + 'T-Rex')
// Gives all creatures in an array a T-Rex neighbor using this


// Bad email?
const userEmail = '       eddytheeagle@gmail.com'
const userEmail2 = 'johnnydangerous@gmail      '

// The answer?
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())
// Removes all the unneeded spaces


// fromEntries Transforms a list into key/value pairs in an object
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]
// This isn't useful. Time to convert to an object to work with them
console.log(Object.fromEntries(userProfiles))
// Object.entries() does the opposite of Object.fromEntries(), meaning it transforms keys to an array


// try {
//     catch {
//
//     }
// }
// Try a piece of code and catch them if any errors
try {
    bob + 'hi'
} catch {
    console.log('you messed up')
}
// The above throws an error, this is similar to try and except in Python
