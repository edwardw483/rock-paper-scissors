function computerPlay(){
    let rand = Math.floor(Math.random() * 3);
    if(rand == 0){
        return "rock";
    }else if(rand == 1){
        return "paper";
    }else if(rand == 2){
        return "scissors";
    }
}

function playerPlay(){
    //return window.prompt("What move would you like to play?");
    return "rock";
}

function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return "Draw. Both players played " + playerSelection;
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose, " + computerSelection + " beats " + playerSelection; 
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You win, " + playerSelection + " beats " + computerSelection; 
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win, " + playerSelection + " beats " + computerSelection;  
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose, " + computerSelection + " beats " + playerSelection; 
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You win, " + playerSelection + " beats " + computerSelection;  
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose, " + computerSelection + " beats " + playerSelection; 
    }else{
        return "Not a valid move by player";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(singleRound(playerPlay(), computerPlay()));
    }
}

game();