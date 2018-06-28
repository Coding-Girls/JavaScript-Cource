/* Task 5*. Write a function that takes an integer number as a parameter and 
prints an appropriate number of Fibonacci numbers. If possible, use a recursion. */

function nFibonacciNumbers(args) {
    let n = +args,
        memberN,
        memberNplus1,
        memberNplus2,
        i;

    if (n > 0) {
        process.stdout.write('0'); // prints the first member of the Fibonacci sequence
    }

    if (n > 1) {
        process.stdout.write(', 1'); // prints the second member of the Fibonacci sequence    
    }

    if (n > 2) {
        memberN = 0;
        memberNplus1 = 1;
        for (i = 3; i <= n; i += 1) {
            memberNplus2 = memberN + memberNplus1;
            process.stdout.write(`, ${memberNplus2}`); // prints the i-member of the Fibonacci sequence
            memberN = memberNplus1;
            memberNplus1 = memberNplus2;
        }
    }

    console.log();
}

// Input:                   Output:
nFibonacciNumbers(1);   //  0
nFibonacciNumbers(2);   //  0, 1
nFibonacciNumbers(3);   //  0, 1, 1
nFibonacciNumbers(10);  //  0, 1, 1, 2, 3, 5, 8, 13, 21, 34
nFibonacciNumbers(14);  //  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
