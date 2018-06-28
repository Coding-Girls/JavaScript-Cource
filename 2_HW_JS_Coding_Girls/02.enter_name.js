// Task 2. Write a function that enters an user name until the name is between 2 and 10 characters long. 

function enterName() {
    let name;

    do {
        name = prompt('Enter a name between 2 and 10 characters: ');
    } while (name.length < 2 || name.length > 10);

    console.log(name);
}

enterName();
