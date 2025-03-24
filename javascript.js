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

// Run a round of rock-paper-scissors game given the human and computer choices
function playRound(humanChoice, computerChoice) {
  // IF the human and the computer choices are the same
  //   - It's a tie, PRINT tie-round announcement
  // ELSE IF the human chooses "rock" and the computer chooses "scissors"
  // OR the human chooses "paper" and the computer chooses "rock"
  // OR the human chooses "scissors" and the computer chooses "paper"
  //   - The human wins, PRINT round-winner announcement
  //   - INCREMENT human score
  // ELSE
  //   - The computer wins, PRINT round-loser announcement
  //   - INCREMENT computer score
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
