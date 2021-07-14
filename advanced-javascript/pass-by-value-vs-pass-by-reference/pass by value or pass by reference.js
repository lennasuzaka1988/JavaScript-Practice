var a = 5;
var b = a;

// permanent memory so pass by value as they're primitive types

b++;

console.log(a)
console.log(b)

// Copied the primitive type val 5 as if b = 5 so now val b = 5 which is now in a new memory space so pass by value it means copy and place it somewhere else in memory

let obj1 = {name: 'Yao', password: '123'}
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)

// Ob1 and obj2 have been updated, so we don't copy the values but when assigned obj1 to obj2 it says this is where it is in memory, it points somewhere in memory that contains the shelf of the value. Says that this is the address of the memory of whatever the value is located. So when changing the password, change the obj1 and pass.
// It's nice because it's one object that saves space. But bad because it changes the property of the referenced value

// var c = [1, 2, 3, 4, 5];
// var d = c;
// d.push(134897423);
// console.log(d)
// Because of this d changes c to update via push
// Sometimes we want to simply copy, but for an array:

// var c = [1, 2, 3, 4, 5];
// var d = [].concat(c);
// d.push(134897423);
// console.log(c)
// D is cloned this way


let obj = {a: 'a', b: 'b', c: 'c'};
// How to put it into another memory? Clone via object.assign

// let clone = Object.assign({}, obj);
// obj.c = 5
// console.log(clone)

// Cloned object wasn't affected even though c = 5
// Another way: spread operator


let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5
console.log(obj)
console.log(clone)
console.log(clone2)

// Clone hasn't been modified as well as clone2

// What about obj inside an obj

let obj = {a: 'a',
    b: 'b',
    c: {deep: 'try and copy me'}}

obj.c.deep = 'hahahaha';
console.log(obj)
console.log(console)
console.log(clone2)

// Shallow clone means only the first level, so everything is cloned instead meaning that the second object inside won't be affected

let superClone = JSON.parse(JSON.stringify((obj)))
// The above turns everything into a string
obj.c.deep = 'hahahaha';
console.log(obj)
console.log(console)
console.log(clone2)
console.log(superClone)

// This fixes it, but the deep clone officially has try and copy me
