var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

// end of the expression

for (var i=0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}

// var todosLength = todos.length;
// for (var i=0; i < todos.length; i++) {
// 	todos.pop()
// }

// var counterOne = 0
// while (counterOne < 10) {
// 	console.log(counterOne);
// 	counterOne++
// }

// var counterOne = 10
// while (counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne--;
// }

// var counterTwo = 10
// do {
// 	console.log(counterTwo);
// 	countTwo--;
// } while (counterTwo > 0)

// do runs whatever first then checks the condition

var todosLength = todos.length;
for (var i=0; i < todos.length; i++) {
    console.log(todos, i);
}

// forEach simplifies the for loop
todos.forEach(function(todo, i) {
    console.log(todo, i);
})

// more readable version
function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(log);
