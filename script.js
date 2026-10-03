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

function getHumanChoice(humanInput){
    if (humanInput.toLowerCase() == "rock"){
        return "Rock";
    }
    else if (humanInput.toLowerCase() == "paper"){
        return "Paper";
    }
    else if (humanInput.toLowerCase() == "scissors"){
        return "Scissors";
    } 
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    
    while (humanScore < 3 && computerScore < 3){
        let computerChoice = getComputerChoice();
         let humanInput = prompt(humanScore + " : " + computerScore +  "\nWhat do you choose? Rock, Paper, or Scissors", "");
         let humanChoice = getHumanChoice(humanInput);        
        console.log("Your Choice: " + humanChoice);
        console.log("Computer Choice: " + computerChoice);
        let roundScore = playRound(computerChoice,humanChoice);
        console.log(roundScore);
        console.log(humanScore + " : " + computerScore);
        
    }

    function playRound(computerChoice, humanChoice){
        
        if ((computerChoice == "Rock" && humanChoice =="Paper") 
            || (computerChoice == "Paper" && humanChoice =="Scissors") 
            || (computerChoice == "Scissors" && humanChoice =="Rock")){
            humanScore++;
            return ("You win! " + humanChoice + " beats " + computerChoice + ".");
        }
        else if (computerChoice == humanChoice ){
            return ("Draw! Try again.");
        }
        else {
            computerScore++;
            return ("You lose! " + computerChoice + " beats " + humanChoice + ".");
        }
    }
  
    function gameEnd(humanScore, computerScore){

        if (humanScore > computerScore){
            return("You win!");
        }
        else {
            return ("You lose!");
        }
    }

    let endPrompt = gameEnd(humanScore, computerScore);
    console.log(endPrompt);
    prompt(humanScore + " : " + computerScore + "\n" + endPrompt);
    
}
playGame();   

 
