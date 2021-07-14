//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];


// const users = []
// array.forEach(user => {
//     let { username } = user;
//     username = username + '!';
//     users.push(username);
// })
// console.log(users)


//Create an array using map that has all the usernames with a "? to each of the usernames
// const mapArray = array.map((user) => {
//     let { username } = user;
//     return username + '?';
// })
// console.log('map', mapArray)


//Filter the array to only include users who are on team: red
// const filterArray = array.filter(user => {
//     return user.team === 'red';
// });
//
// console.log('filter', filterArray)


//Find out the total score of all users using reduce
// const scoreArray = array.reduce((accumulator, user) => {
//        return accumulator + user.score
// }, 0)
// console.log('reduce', scoreArray)


// (1), what is the value of i?
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })


// The pure take
// let arrayNum = [1, 2, 4, 5, 8, 9]
// let newArray = arrayNum.map((num, i) => {
//     return num * 2
// });
// console.log(newArray)



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const userArray = array.map(user => {
    user.items = user.items.map(objectItems => {
        return objectItems + '!'
    })
    return user
})

console.log('map', userArray)
