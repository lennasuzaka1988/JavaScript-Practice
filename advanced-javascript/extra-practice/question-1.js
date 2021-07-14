// Clean the room function
// input [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// Function that organizes these into a proper order
// answer(ArrayFromAbove) should return [[1,1,1,1]],[2,2,2],4,5,10,[20,20],391,392,591
// Bonus: Organize them by types too, such as 1, '2', '3', 2] should return [1,2],['2','3']]

let arraySort = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20].sort((a, b) => a-b);


for (num in arraySort) {
    for ( let num = 0 ; num < arraySort.length; num++ ) {
        console.log(arraySort.map);
}
}

// if there are multiple entries, then sort them into an array[b]