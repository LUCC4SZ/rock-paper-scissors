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

function getHumanChoice(){
    return window.prompt("1. Rock | 2. Paper | 3. Scissors");
}

parseChoice(getComputerChoice());

console.log(getHumanChoice());