// Initialize game scores
let humanScore = 0, computerScore = 0;
const humanScoreBoard = document.querySelector("#human-player");
const computerScoreBoard = document.querySelector("#computer-player");
const winLoseMsg = document.getElementById("instruct-play").querySelector("h2");
const gameMessage = document.getElementById("game-message-section").querySelector("h2");
const pauseTime = 1500;


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
        btn.classList.add("tied");
        console.log(`It's a tie! You both chose ${humanSelection}.`);
        winLoseMsg.classList.add("tied-text");
        winLoseMsg.textContent = `It's a tie!`;
        gameMessage.textContent = `You both chose ${humanSelection}.`;
    }
    else if (humanWins) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
        winLoseMsg.classList.add("win-text");
        winLoseMsg.textContent = `You win this round!`;
        gameMessage.textContent = `${humanSelection} beats ${computerSelection}.`;
        humanScore++;
        humanScoreBoard.querySelector(".player-score").textContent = humanScore;

        // Weapon selected by computer shows to losing image
        changeImage(computerSelection, pauseTime);
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
        winLoseMsg.classList.add("lose-text");
        winLoseMsg.textContent = `You lose this round!`;
        gameMessage.textContent = `${computerSelection} beats ${humanSelection}.`;
        computerScore++;
        computerScoreBoard.querySelector(".player-score").textContent = computerScore;

        // Weapon selected by human shows losing image
        changeImage(humanSelection, pauseTime);
    }
}


// Play a full game
function playGame() {
    const originalInstruct = winLoseMsg.textContent;
    const originalGameMsg = gameMessage.textContent;

    document.querySelectorAll('.game-button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            disableClicks();
    
            const humanSelection = getHumanSelection(this);
            const computerSelection = getComputerSelection();

            // console.log(`ROUND ${i + 1}`); //print what round we are on
            playRound(humanSelection, computerSelection);

            // Check if someone has won the game
            setTimeout (
                () => {
                    // Remove borders designating what was selected
                    document.querySelectorAll('.game-button').forEach(btn => {
                        btn.classList.remove("tied", "chosen-by-computer", "chosen-by-human");
                    });

                    // Check if winner and reset scores
                    if (humanScore >= 5 || computerScore >= 5) {
                        declareWinner();
                        humanScore = 0, computerScore = 0;
                        humanScoreBoard.querySelector(".player-score").textContent = 0, computerScoreBoard.querySelector(".player-score").textContent = 0;
                        // gameMessage.textContent = originalGameMsg;
                    }

                    winLoseMsg.classList.remove("tied-text", "win-text", "lose-text");
                    winLoseMsg.textContent = originalInstruct;
                    gameMessage.textContent = originalGameMsg;
                }
            , pauseTime);
        })
    });    
}


// Display scores and declare winner
function declareWinner() {

    console.log("FINAL TALLIES");
    console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);

    // Possible outcomes for the game
    if (humanScore === computerScore) {
        console.log(c);
        alert(`The game's a TIE!!\n\nClick \'Okay\' to restart game.`);
    }
    else if (humanScore > computerScore) {
        console.log(`You are the WINNER!!!`);
        alert(`You are the WINNER!!!\n\nClick \'Okay\' to restart game.`);
    }
    else {
        console.log(`You LOSE!`);
        alert(`You LOSE!\n\nClick \'Okay\' to restart game.`);
    }
}


function changeImage(losingSelection, resetTime) {
    const losingButton = document.getElementById(losingSelection);
    const img = losingButton.querySelector('img');

    if (img) {
        const originalSrc = img.src;
        const originalAlt = img.alt;

        // Change button img to losing img
        img.src = "images/" + losingSelection.toLowerCase() + "_lose.png";

        switch(losingSelection) {
            case "Rock":
                img.alt = "Rock wrapped up in paper";
                break;
            case "Paper":
                img.alt = "Paper shredded by scissors";
                break;
            case "Scissors":
                img.alt = "Scissors bashed by rock";
                break;
        }

        setTimeout(() => {
            img.src = originalSrc;
            img.alt = originalAlt;
        }, resetTime)
    }
}


// Toggling off and on click events

function disableClicks() {
    document.querySelectorAll('.game-button').forEach(btn => {
        btn.style.pointerEvents = 'none';
    });
    setTimeout(enableClicks, pauseTime); // Re-enable after 1 seconds
}

function enableClicks() {
    document.querySelectorAll('.game-button').forEach(btn => {
        btn.style.pointerEvents = 'auto';
    });
}

// element.addEventListener('click', disableClick);



// Introduce and run the console-based game
console.log("Welcome to Rock-Paper-Scissors!");

playGame();