// const randomNumber = (Math.random());
const computerChoice = getComputerChoice();
console.log(computerChoice);

function getComputerChoice(){
    const randomNumber = (Math.random());
    console.log(randomNumber);

    if (randomNumber <= 0.33){
        return "rock";
    }
    else if (randomNumber > 0.66){
        return "scissors";
    }
    else {
        return "paper";
    }
}


let humanInput = prompt("What do you choose? Rock, Paper, or Scissors", "");
//console.log(humanChoice); 

function getHumanChoice(humanInput){
    if (humanInput == "Rock"){
        return "rock";
    }
    else if (humanInput == "Paper"){
        return "paper";
    }
    else if (humanInput == "Scissors"){
        return "scissors";
    } 
}

let humanChoice = getHumanChoice(humanInput);
console.log(humanChoice);

