/* Task 2. White a program that chooses a stone, scissors or paper using conditional statements and a random number. 

Math.random(); returns a random number between 0 (inclusive) and 1 (exclusive).

setInterval() => method that calls a function or evaluates an expression at specified intervals (in milliseconds); continues calling the function until clearInterval() is called, or the window is closed.
Return Value => Number, representing the ID value of the timer that is set; used with the clearInterval() method to cancel the timer
1000 ms = 1 second.
*/

setInterval(function () {
    let randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber == 1) {
        console.log('Stone');
    } else if (randomNumber == 2) {
        console.log('Scissors');
    } else {
        console.log('Paper');
    }
}, 500);
