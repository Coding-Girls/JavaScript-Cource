/* Task 4*. Write a function that takes an array as parameter and 
returns the same array sorted in ascending order. 

Using Selection Sort algorithm:
1) Finds the smallest element in the array by comparing the first element to all the others
2) It exchanges it with the item on the first position
3) Repeat the above two steps for each subsequent element
*/

function sortArray(arr) {
    let i,
        j,
        minNumber,
        n = arr.length;

    for (i = 0; i < n - 1; i += 1) {
        minNumber = +arr[i];
        for (j = i + 1; j < n; j += 1) {
            if (+arr[j] < minNumber) {
                minNumber = arr[j];
                arr[j] = arr[i];
                arr[i] = minNumber;
            }
        }
    }

    for (let i = 0; i < n; i += 1) {
        process.stdout.write(arr[i] + '  ');
    }

    console.log();
}

sortArray([3, 4, 1, 5, 2, 6]);
sortArray([36, 10, 1, 34, 28, 38, 31, 27, 30, 20]);
