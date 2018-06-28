// Task 1. Write a function that takes an array of numbers and returns the largest number of the array.

function largestNumberInArray(args) {
    //let biggestNum = Number(args[0]),
    let biggestNum = +args[0],
        i;

    for (i = 1; i < args.length; i += 1) {
        if (+args[i] > biggestNum) {
            biggestNum = args[i];
        }
    }

    console.log(biggestNum);
}

// Input                                                Output
largestNumberInArray([5, 2, 4, 1]);                   //5
largestNumberInArray([-2, -22, 1, 0]);                //1
largestNumberInArray([-2, 4, 3, 2, 0]);               //4
largestNumberInArray([0, -2.5, 1, 5, 4]);             //5
largestNumberInArray([-3, -0.5, -1.1, -2, -0.1]);     //-0.1
