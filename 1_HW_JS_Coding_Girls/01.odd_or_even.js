/* Task 1. Write a program that check whether a number is even or odd with conditional statements using prompt() function.

prompt(text, defaultText)
Parameter 	    Type 	Description
text 	        String 	Required. The text to display in the dialog box
defaultText 	String 	Optional. The default input text */

function evenOrOdd() {
    let number = prompt('Enter a number:');
    if (number % 2 == 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

evenOrOdd();
