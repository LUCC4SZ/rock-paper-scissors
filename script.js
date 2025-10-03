console.log("Hello World!");

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function parseChoice(option){
    switch (option) {
        case 0:
            console.log("Rock");
            break;
        case 1:
            console.log("Paper");
            break;
        case 2:
            console.log("Scissors");
            break;
    }
}

parseChoice(getComputerChoice());