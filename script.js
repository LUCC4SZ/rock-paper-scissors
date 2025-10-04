function getComputerChoice(){
    return Math.floor(Math.random() * 3 + 1);
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

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 1; i <=5; i++) {
        let computerChoice = getComputerChoice();
        
        let humanChoice = getHumanChoice();
        
        let result = playRound(computerChoice, humanChoice);
        
        if (result == 1) {
            humanScore++;
        } else if (result == 2){
            computerScore++;
        }
        
        console.log("Computer: " + computerScore);
        console.log("You: " + humanScore);
    }

}

playGame();