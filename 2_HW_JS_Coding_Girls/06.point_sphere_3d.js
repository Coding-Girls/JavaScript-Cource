/* Task 6**. Write a function that accepts 3 parameters (2 arrays and a number). 
The first array contains 3 numbers: X, Y and Z - coordinates of a point in a 3-dimensional Euclidean space. 
The second array contains 3 numbers: CX, CY and CZ, which define the center of a sphere in the 3-dimensional space. 
The third parameter will be the radius of the sphere. 
The function must check whether the point is 
inside the sphere, lies on it or is located outside it. Prints the result appropriately.

Output: "inside|on|outside (distance =  distance-between-points)"

https://en.wikipedia.org/wiki/Distance
 */

function pointSphere3D(arrCoordPoint, arrCoordCenter, radius) {
    let x = +arrCoordPoint[0],
        y = +arrCoordPoint[1],
        z = +arrCoordPoint[2],
        cx = +arrCoordCenter[0],
        cy = +arrCoordCenter[1],
        cz = +arrCoordCenter[2],
        distance;

    //console.log(`${x} ${y} ${z} ${cx} ${cy} ${cz} ${radius}`);

    distance = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy) + (z - cz) * (z - cz));

    if (distance < radius) {
        console.log(`inside (distance = ${distance})`);
    } else if (distance == radius) {
        console.log(`on (distance =  ${distance})`);
    } else {
        console.log(`outside (distance =  ${distance})`);
    }

}

// Input:                                         Output:           Distance:
pointSphere3D([5, 6, 7], [1, 1, 1], 9);         //inside            sqrt(77) = 8,774964387392122    d<r
pointSphere3D([3, -2, -4], [5, 6, -5], 8.4);    //inside            sqrt(69) = 8,306623862918075    d<r
pointSphere3D([0, 2, 3], [1, 4, 1], 3);         //on                3                               d=r
pointSphere3D([5, -2, 2], [-1, 6, 2], 10);      //on                10                              d=r
pointSphere3D([5, 6, 8], [2, 3, 5], 5);         //outside           sqrt(27) = 5,196152422706632    d>r
pointSphere3D([7, 0, 5], [-2, 3, 0], 10.7);     //outside           sqrt(115) = 10,72380529476361   d>r
