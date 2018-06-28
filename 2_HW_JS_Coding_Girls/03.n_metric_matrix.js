/* Task 3. Write a function that takes an integer N and 
returns a N-metric matrix filled in with the numbers 1 to as many as necessary. */

function nMetricMatrix(args) {
    let n = +args,
        firstEl = 1,
        i,
        j;

    for (i = 0; i < n; i += 1) {
        for (j = 0; j < n; j += 1) {
            if (firstEl < 10) {
                process.stdout.write(firstEl + '  ');
            } else {
                process.stdout.write(firstEl + ' ');
            }
            firstEl += 1;
        }
        console.log();
    }

    console.log();
}

nMetricMatrix(2);
nMetricMatrix(3);
nMetricMatrix(4);
nMetricMatrix(5);
nMetricMatrix(9);
