// how does javascript work?
// video for review
// https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/9427570#overview

// What is a program?
// allocate memory
// parse and execute scripts

// Engine v8 consists of memory heap and call stack
// call stack executes program
// Memory heap is allocated memory

// Memory leak
// Limited space but leaks are caused by dead memory items (e.g. unused variables)
// Remember to pick up after yourselves!

// Call stack
console.log('1');
console.log('2');
console.log('3');
// Call stack reads and executes the code in the memory, then removes and replaces with the next line/function/object
// More complex
const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

console.log('4')
two()
one()
// They're lined up to be read and called, then empties


// JS is a single-threaded language that is non-block
// Can only do 1 call stack
// Reason ? One thing to worry about. Multithreaded can have deadlocks
// Synchronous: line 1, then line 2, then line 3. The latter can't start before the first finishes
// Stack overflow means when a stack overflows, similar to a memory leak.
// How is the above possible?
function foo() {
    foo()
}
foo()
// Keeps looping and adds to call stack causing a stack overflow
// If one line, such as line two(), has too much in it compared to the other lines, it will take a forever to execute because synchronous. It causes the line to hang up
// Asynchronous behavior: the solution to synchronous, similar to buffet restaurant

console.log('1');
setTimeout(() => {
    console.log('2')
}, 2000)
console.log('3')
// 1 -> 3 -> 2

// Need a javascript runtime environment, in the browser, that includes Web APIs, DOM, AJAX, or Timeout

// console.log(1)
// CALL STACK


// at console.log('2'), setTimeout is next but it triggers the web api saying setTimeout was called, so it's popped out of the call stack.
// WEB API


// Because stack is empty and open, console.log('3') is run
// Once setTimeout finished, it can be callback(), saying it's ready to be put back into the stack
// callback()
// CALLBACK QUEUE


// At this point, it's checked to see if there's anything else left in the heap to do. So it goes from the queue -> stack
// EVENT LOOP

// At 0 the process still happens, the timeOut API is called. This is in an interview!
// Event listeners are asynchronous