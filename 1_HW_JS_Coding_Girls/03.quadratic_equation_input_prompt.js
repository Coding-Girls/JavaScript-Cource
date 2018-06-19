/* White a program that creates 3 variables a, b and c and through them 
solve the square equation of the type a*x^2 + b*x + c = 0. 
In order to find the solution x, we have to find the discriminant D that is equal to b^2-4*a*c. 
If D > 0, we have two solutions to the equation: x1/2 = (- b ± √D) / 2*a, where D is the discriminant. 
If D = 0, the solution is only one: x = (- b) / 2*a. 
If D < 0, then we have no solution to the equation.  */

function quadraticEquation() {
    let a = prompt('a = '), 
        b = prompt('b = '),
        c = prompt('c = '),
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

quadraticEquation();
