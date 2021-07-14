// History of javascript modules reference: https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde

// Climbing the mountain of modules
// Inline script (js within html)
// There are problems: massive JS file, lack of code reusability, and pollution of the global namespace (can never use a again in variable and you may cause collisions)


// After inline scripts came script tags: <script type="text/javascript" scr="./.js"></script>
// Issues here are that you'll still have to copy the script to another page which you don't want to do,
// and lack of dependency resolution, meaning you're responsible that the scripts load in proper order,
// and it still pollutes the global namespace


// 3rd attempt: IIFE - Immediately Invoked Function Expression
// Wraps a function in brackets for evaluation, then runs the function. Looks like:
// var myApp = {}
// (function(){
//     myApp.add = function(a, b) {
//     return a + b;
//     }
// })();
// All the files wrapped in the IIFE have their own scope and everything is added to myApp as a property or a method.
// Reduces global namespace to 1. However, the order still remains important
// allows us to use in jQuery as $


// 4th attempt: browserify
// CommonJS + Browserify

// js1 called add
// module.exports = function add(a, b) {
//    return a+b;
//}


// js2
// var add = require('./add');
// js1 is a module bundler, which runs before you put the website online
// reads through the javascript files and syntax and bundles into a single file, it's usually called something like bundle.js


// With es6:
//js1
// export const add = (a, b) => a + b;
//or
// export default function add() {
//     return a + b
// }
// can only export one thing if using default, then use second option in js2

// js2
// import { add } from './add';
// or
// import add from './add';
// browsers don't support everything yet, but this is what webpack for! It's a module bundler.
// It traverses the dependency tree into a single file or even multiple files. Can even use es6 in all browsers

// the webpack config file!
module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}

// add to bundle.js in the script