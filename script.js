// const randomNumber = (Math.random());

function getComputerChoice(computerChoice){
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
const computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice(){
    
}
    


