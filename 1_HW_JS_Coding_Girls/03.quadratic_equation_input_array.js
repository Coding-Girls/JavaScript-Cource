/* Task 3. Write a script that reads the coefficients a, b and c of a quadratic equation a*x^2 + bx + c = 0 and solves it (prints its real roots). 

Input: Аn array containing three values `a`, `b` and `c` represented as strings.
Output: А single line containing the real roots:
  - Prints numbers with 2 digits of precision after the floating point
  - If there are two roots then `x1 < x2`

The Number() function converts the object argument to a number that represents the object's value:
  - Return Value is a Number. 
  - If the value cannot be converted to a legal number, NaN is returned. 
  - If no argument is provided, it returns 0.
  - Note: If the parameter is a Date object, the Number() function returns the number of milliseconds since midnight January 1, 1970 UTC.  
*/

function quadraticEquation(args) {
    let a = Number(args[0]), // a = +args[0], b = +args[1], c = +args[2], ...
        b = Number(args[1]),
        c = Number(args[2]),
        D = b * b - 4 * a * c, // Discriminant
        x1,
        x2;

    if (D > 0) {
        x1 = (-b - Math.sqrt(D)) / (2 * a);
        x2 = (-b + Math.sqrt(D)) / (2 * a);

        if (x1 < x2) {
            console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2));
        } else {
            console.log('x1=' + x2.toFixed(2) + '; x2=' + x1.toFixed(2));
        }
    } else if (D === 0) {
        x1 = x2 = -b / (2 * a);
        console.log('x1=x2=' + x1.toFixed(2));
    } else {
        console.log('no real roots');
    }
}

// Input                                       Output
quadraticEquation(['2', '5', '-3']);        // x1=-3.00; x2=0.50
quadraticEquation(['-1', '3', '0']);        // x1=0.00; x2=3.00
quadraticEquation(['-0.5', '4', '-8']);     // x1=x2=4.00
quadraticEquation(['5', '2', '8']);         // no real roots
quadraticEquation(['0.2', '9.572', '0.2']); // x1=-47.84; x2=-0.02
