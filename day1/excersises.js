// Q1:Get user to input a number using prompt(“Enter a number: ”). Check if the number is a multiple of 5 or not.
// Get user input
let number = prompt("Enter a number: ");

// Convert string input to number
number = Number(number);

// Check if it's a multiple of 5
if (number % 5 === 0) {
    alert(number + " is a multiple of 5");
} else {
    alert(number + " is not a multiple of 5");
}
//----------------------------------------------------------------------
//  Q2: Print all even numbers from 0 to 100.

// Method 1: Using a for loop with increment of 2
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

//-----------------------------------------------------------------------------
// Q3 Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.


const gameNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;
let attempts = 0;

// Keep asking until the correct number is guessed
while (true) {
    // Get user's guess
    userGuess = prompt("Guess the number (between 1 and 100): ");
    
    // Convert to number
    userGuess = Number(userGuess);
    attempts++;
    
    // Check the guess
    if (userGuess === gameNumber) {
        alert(`Congratulations! You guessed it right in ${attempts} attempts!\nThe number was ${gameNumber}`);
        break;
    } else if (userGuess < gameNumber) {
        alert("Too low! Try a higher number.");
    } else {
        alert("Too high! Try a lower number.");
    }
}