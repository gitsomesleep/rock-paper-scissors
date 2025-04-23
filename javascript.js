// Initialize game scores
let humanScore = 0, computerScore = 0;


// Return random computer Selection of either "Rock", "Paper", or "Scissors"
function getComputerSelection() {

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


// Take user Selection of "Rock", "Paper", or "Scissors" and return it
function getHumanSelection(clickedButton) {
    // Identify which button was clicked
    const clickedId = clickedButton.id;
    console.log('Clicked button: ' + clickedId);
    return clickedId;
}


// Run one round of Rock-Paper-Scissors
function playRound(humanSelection, computerSelection) {

    // Conditions for human to win
    const humanWins = (
        ( humanSelection === "Rock" && computerSelection === "Scissors" ) ||
        ( humanSelection === "Paper" && computerSelection === "Rock" ) ||
        ( humanSelection === "Scissors" && computerSelection === "Paper" )
    );

    // Possible outcomes for the round
    if (humanSelection === computerSelection) {
        console.log(`It's a tie! You both chose ${humanSelection}.`);
    }
    else if (humanWins) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
        computerScore++;
    }
}


// Play a full game
function playGame() {

    document.querySelectorAll('.game-button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const humanSelection = getHumanSelection(this);
            const computerSelection = getComputerSelection();

            // console.log(`ROUND ${i + 1}`); //print what round we are on
            playRound(humanSelection, computerSelection);

            // Check if someone has won the game
            if (humanScore >= 5 || computerScore >= 5) {
                declareWinner();
                humanScore = 0, computerScore = 0; // reset scores
            }
        })
    });    
}


// Display scores and declare winner
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


// Introduce and run the console-based game
console.log("Welcome to Rock-Paper-Scissors!");

playGame();