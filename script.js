// const randomNumber = (Math.random());
const computerChoice = getComputerChoice();
console.log("Computer Choice: " + computerChoice);

function getComputerChoice(){
    const randomNumber = (Math.random());
    console.log(randomNumber);

    if (randomNumber <= 0.33){
        return "Rock";
    }
    else if (randomNumber > 0.66){
        return "Scissors";
    }
    else {
        return "Paper";
    }
}


let humanInput = prompt("What do you choose? Rock, Paper, or Scissors", "");

function getHumanChoice(humanInput){
    if (humanInput == "rock"){
        return "Rock";
    }
    else if (humanInput == "paper"){
        return "Paper";
    }
    else if (humanInput == "scissors"){
        return "Scissors";
    } 
}

let humanChoice = getHumanChoice(humanInput);
console.log("Your Choice: " + humanChoice);



function playRound(computerChoice,humanChoice){
    if ((computerChoice == "Rock" && humanChoice =="Paper") || (computerChoice == "Paper" && humanChoice =="Scissors") || (computerChoice == "Scissors" && humanChoice =="Rock")){
        return ("You win! " + humanChoice + " beats " + computerChoice + ".");
    }
    else if (computerChoice == humanChoice ){
        return ("Draw! Try again.");
    }
    else {
        return ("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }
    //else if ((computerChoice == "rock" && humanChoice =="scissors") || (computerChoice == "paper" && humanChoice =="rock") || (computerChoice == "scissors" && humanChoice =="paper")){
        return ("You lose! Rock beats Scissors.");
}
    
    

let roundScore = playRound(computerChoice,humanChoice);
console.log(roundScore);

//let humanScore = 0;
//let computerScore = 0;

