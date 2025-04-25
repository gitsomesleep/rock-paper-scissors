// Initialize game scores
let humanScore = 0, computerScore = 0;


// Return random computer Selection of either "Rock", "Paper", or "Scissors"
function getComputerSelection() {

    // Generate random number between one and three
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // Return option according to value of randomNumber
    if (randomNumber === 1) {
        btn = document.getElementById("Rock");
        btn.classList.add("chosen-by-computer");
        return "Rock";
    }
    if (randomNumber === 2) {
        btn = document.getElementById("Paper");
        btn.classList.add("chosen-by-computer");
        return "Paper";
    }
    if (randomNumber === 3) {
        btn = document.getElementById("Scissors");
        btn.classList.add("chosen-by-computer");
        return "Scissors";
    }
}


// Take user Selection of "Rock", "Paper", or "Scissors" and return it
function getHumanSelection(clickedButton) {
    // Identify which button was clicked
    const clickedId = clickedButton.id;
    console.log('Clicked button: ' + clickedId);
    clickedButton.classList.add("chosen-by-human");
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
        btn = document.getElementById(humanSelection);
        btn.classList.remove("chosen-by-computer", "chosen-by-human");
        btn.classList.add("tied");
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

            // Pause long enough to view selections before resetting selection colors
            setTimeout(
                () => {
                    document.querySelectorAll('.game-button').forEach(btn => {
                        btn.classList.remove("tied", "chosen-by-computer", "chosen-by-human");
                    })
                }
            , 2000); // In the future it would be nice to also temporarily disable the buttons (and hover) here too
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