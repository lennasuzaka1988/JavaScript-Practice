// 2017
// String padding

// .padStart()
// .padEnd()

'Turtle'.padStart(10);
// 10 spaces before it including string

'Turtle'.padEnd(10);
// 10 spaces after it including string


const fun = (a, b, c, d,) => {
    console.log(a);
}

fun(1,
    2,
    3,
    4,)
// Trailing commas work now. When you make changes it makes the differences a lot cleaner for Github. Good for long parameter lists


// Object.values
// Object.entries
// Replaces Object.keys


let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch'
}
// Can't map or filter or reduce since it's not an array
// Keys used to make them an array instead, like so:
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
})


// This is with Object.entries
Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value =>
    {console.log(value)
})


// Async Await
