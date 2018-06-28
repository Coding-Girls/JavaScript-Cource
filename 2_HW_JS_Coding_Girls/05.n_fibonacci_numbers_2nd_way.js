/* Task 5*. Write a function that takes an integer number as a parameter and 
prints an appropriate number of Fibonacci numbers. If possible, use a recursion. */

function nFibonacciNumbers2ndWay(args) {
    let n = +args,
        current,
        previous = 1,
        beforePrevious = 0,
        i,
        arrFibonacci = [];

    for (i = 1; i <= n; i += 1) {
        if (i == 1) {
            current = beforePrevious;
        } else if (i == 2) {
            current = previous;
        } else {
            current = beforePrevious + previous;
            beforePrevious = previous;
            previous = current;
        }

        arrFibonacci.push(current);
    }

    console.log(arrFibonacci.join(', '));
}

// Input:                         Output:
nFibonacciNumbers2ndWay(1);   //  0
nFibonacciNumbers2ndWay(2);   //  0, 1
nFibonacciNumbers2ndWay(3);   //  0, 1, 1
nFibonacciNumbers2ndWay(10);  //  0, 1, 1, 2, 3, 5, 8, 13, 21, 34
nFibonacciNumbers2ndWay(14);  //  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
