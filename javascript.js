console.log("Welcome to Rock-Paper-Scissors!");

// Return random computer choice of either "rock", "paper", or "scissors"
function getComputerChoice() {
    // Initialize a temp variable and set its value to a random number between one and three
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // Return option according to value of randomNumber
    if (randomNumber === 1) {
        return "rock";
    }
    if (randomNumber === 2) {
        return "paper";
    }
    if (randomNumber === 3) {
        return "scissors";
    }
}