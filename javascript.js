// Initialize game scores
let humanScore = 0, computerScore = 0;

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

// Take user choice of "rock", "paper", or "scissors" and return it
function getHumanChoice() {
    // PROMPT user for appropriate input
    let humanChoice = prompt("Which weapon do you choose?");

    return humanChoice.toLowerCase();
}

// Run one round of rock-paper-scissors
function playRound(humanChoice, computerChoice) {

    // Conditions for human to win
    const humanWins = (
        ( humanChoice === "rock" && computerChoice === "scissors" ) ||
        ( humanChoice === "paper" && computerChoice === "rock" ) ||
        ( humanChoice === "scissors" && computerChoice === "paper" )
    );

    // IF the human and the computer choices are the same
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    }
    else if (humanWins) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
