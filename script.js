let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function getHumanChoice(){
    let option =  window.prompt("Choose: Rock | Paper | Scissors");
    option = option.toLowerCase();
    if (option == "rock") {
        return 1;
    } else if (option == "paper") {
        return 2;
    } else {
        return 3;
    }
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
                    console.log("You win! Rock beats Scissors.");
                } else {
                    console.log("You lose! Scissors beats Paper.");
                }
        }
    }
}

