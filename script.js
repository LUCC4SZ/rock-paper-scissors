function getComputerChoice(){
    return Math.floor(Math.random() * 3 + 1);
}

function playRound(computerChoice, humanChoice){
    if (computerChoice === humanChoice) {
        console.log("It's a draw!");
        return 0;
    } else {
        switch (computerChoice) {
            case 1:
                if (humanChoice == 2) {
                    console.log("You win! Paper beats Rock.");
                    return 1;
                } else {
                    console.log("You lose! Rock beats Scissors.");
                    return 2;
                }
            case 2:
                if (humanChoice == 3) {
                    console.log("You win! Scissors beats Paper.");
                    return 1;
                } else {
                    console.log("You lose! Paper beats Rock.");
                    return 2;
                }
            case 3:
                if (humanChoice == 1) {
                    console.log("You win! Rock beats Scissors.");
                    return 1;
                } else {
                    console.log("You lose! Scissors beats Paper.");
                    return 2;
                }
        }
    }
}

const body = document.querySelector("body");

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

rockBtn.innerText = "Rock";
paperBtn.innerText = "Paper";
scissorBtn.innerText = "Scissors";

const btnList = document.createElement("div");
const scoreDisplayer = document.createElement("div");

btnList.appendChild(rockBtn);
btnList.appendChild(paperBtn);
btnList.appendChild(scissorBtn);

let playerScoreMessage = document.createElement("p");
let computerScoreMessage = document.createElement("p");
let drawCounterMessage = document.createElement("p");

let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;

playerScoreMessage.innerText = `Player score: ${playerScore}`;
computerScoreMessage.innerText = `Computer score: ${computerScore}`;
drawCounterMessage.innerText = `Total draws: ${drawCounter}`;

scoreDisplayer.appendChild(playerScoreMessage);
scoreDisplayer.appendChild(computerScoreMessage);
scoreDisplayer.appendChild(drawCounterMessage);

body.appendChild(btnList);
body.appendChild(scoreDisplayer);

rockBtn.addEventListener("click", () => {
    const result = playRound(getComputerChoice(), 1);
    switch (result) {
        case 0:
            drawCounter++;
            break;
        case 1:
            playerScore++;
            break;
        case 2:
            computerScore++;
            break;
    }
    drawCounterMessage.innerText = `Total draws: ${drawCounter}`;
    playerScoreMessage.innerText = `Player score: ${playerScore}`;
    computerScoreMessage.innerText = `Computer score: ${computerScore}`;
});

paperBtn.addEventListener("click", () => {
    const result = playRound(getComputerChoice(), 2);
    switch (result) {
        case 0:
            drawCounter++;
            break;
        case 1:
            playerScore++;
            break;
        case 2:
            computerScore++;
            break;
    }
    drawCounterMessage.innerText = `Total draws: ${drawCounter}`;
    playerScoreMessage.innerText = `Player score: ${playerScore}`;
    computerScoreMessage.innerText = `Computer score: ${computerScore}`;
});

scissorBtn.addEventListener("click", () => {
    const result = playRound(getComputerChoice(), 3);
    switch (result) {
        case 0:
            drawCounter++;
            break;
        case 1:
            playerScore++;
            break;
        case 2:
            computerScore++;
            break;
    }
    drawCounterMessage.innerText = `Total draws: ${drawCounter}`;
    playerScoreMessage.innerText = `Player score: ${playerScore}`;
    computerScoreMessage.innerText = `Computer score: ${computerScore}`;
});

