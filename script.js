let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function getHumanChoice(){
    return window.prompt("1. Rock | 2. Paper | 3. Scissors");
}

function playRound(computerChoice, humanChoice){
    if (computerChoice === humanChoice) {
        console.log("It's a draw!");
    } else {
        switch (computerChoice) {
            case 1:
                if (humanChoice == 2) {
                    console.log("You win! Paper beats Rock.");
                } else {
                    console.log("You lose! Rock beats Scissors.");
                }
                break;
            case 2:
                if (humanChoice == 3) {
                    console.log("You win! Scissors beats Paper.");
                } else {
                    console.log("You lose! Paper beats Rock.");
                }
                break;
            case 3:
                if (humanChoice == 1) {
                    console.log("You win! Rock beats Scissors.")
                } else {
                    console.log("You lose! Scissors beats Paper.")
                }
        }
    }
}

playRound(getComputerChoice(), getHumanChoice());