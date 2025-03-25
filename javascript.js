// Initialize game scores
let humanScore = 0, computerScore = 0;

console.log("Welcome to Rock-Paper-Scissors!");

// Return random computer choice of either "rock", "paper", or "scissors"
function getComputerChoice() {

    // Generate random number between one and three
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // Return option according to value of randomNumber
    if (randomNumber === 1) {
        return "Rock";
    }
    if (randomNumber === 2) {
        return "Paper";
    }
    if (randomNumber === 3) {
        return "Scissors";
    }
}

// Take user choice of "rock", "paper", or "scissors" and return it
function getHumanChoice() {

    // PROMPT user for appropriate input
    let humanChoice = prompt("Which weapon do you choose?");

    // Capitalize first letter, lowercase the rest
    humanChoice = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1,).toLowerCase();

    return humanChoice;
}

// Run one round of rock-paper-scissors
function playRound(humanChoice, computerChoice) {

    // Conditions for human to win
    const humanWins = (
        ( humanChoice === "Rock" && computerChoice === "Scissors" ) ||
        ( humanChoice === "Paper" && computerChoice === "Rock" ) ||
        ( humanChoice === "Scissors" && computerChoice === "Paper" )
    );

    // Possible outcomes for the round
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


// Play a full game
function playGame() {

    // Get choices and play a round 5 times
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Declare winner
    declareWinner();  
}


// Declare winner
function declareWinner() {

    console.log("FINAL TALLIES");
    console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);

    // Possible outcomes for the game
    if (humanScore === computerScore) {
        console.log(`The game's a TIE!!`);
    }
    else if (humanScore > computerScore) {
        console.log(`You are the WINNER!!!`);
    }
    else {
        console.log(`You LOSE!`);
    }
}

playGame();