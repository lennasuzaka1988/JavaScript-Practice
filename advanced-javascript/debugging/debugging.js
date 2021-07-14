// Steps of debugging

// const flattened = [[0,1], [2,3], [4,5]].reduce((accumulator, b)) => accumulator.concat(b), []);
// 1. Read the code aloud and figure out what it wants to do


// 2. Change names to something more readable (such as [b] to array)
// const flattened = [[0,1], [2,3], [4,5]].reduce((accumulator, array) => accumulator.concat(array), []);


// 3. Want the accumulator to start off with an empty array. So change to this.
// const flattened = [[0,1], [2,3], [4,5]].reduce((accumulator, array) => [].concat(array), []);


//4. Formatting! And opening up the function of course
// const flattened = [[0,1], [2,3], [4,5]].reduce(
//     (accumulator, array) => {
//         console.log('array', array);
//         console.log('accumulator', accumulator)
//         return accumulator.concat(array)
//     }, []);


//5. Using Javascript's debugger
const flattened = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array)
    }, []);

console.log(flattened)
// debugger only seems to work in the browser...


