const basket = ['apples', 'oranges', 'grapes'];

//Review

//1
// for ( let i = 0; i < basket.length; i++ ) {
//     console.log(basket[i]);
// }


//2
// basket.forEach(item => {
//     console.log(item);
// })


// Two more loop methods

// We're iterating over this array using iterables

// 1. for of
// Similar to the above, it's like combining the two
for (item of basket) {
    console.log(item);
}
//if you change to 'basket' string, then the letters are iterated. Both arrays and strings are iterable


// 2. for in
// This works with objects

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for (item in detailedBasket) {
    console.log(item)
}
// Still gets apples oranges and grapes. For in allows to see the object properties. This is NOT iterating because this is an object. We're instead enumerating. And properties of objects are enumerable (apples, oranges and grapes are the properties)
// Arrays are objects since they have 0 1 and 2 so output for enumerating would be the index. For in enumerates over properties.