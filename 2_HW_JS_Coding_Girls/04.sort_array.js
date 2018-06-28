/* Task 4*. Write a function that takes an array as parameter and 
returns the same array sorted in ascending order. */

function sortArray(arr) {
    arr.sort();

    console.log(arr.join('  '));
}

sortArray([3, 4, 1, 5, 2, 6]);
sortArray([36, 10, 1, 34, 28, 38, 31, 27, 30, 20]);
