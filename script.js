playerScore = 0;
computerScore = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', playerPlay);
});

function computerPlay(){
    let rand = Math.floor(Math.random() * 3);
    const image = document.querySelector(".moves .computer img");
    if(rand == 0){
        image.setAttribute("src", "./images/rock.png");
        return "rock";
    }else if(rand == 1){
        image.setAttribute("src", "./images/paper.png");
        return "paper";
    }else if(rand == 2){
        image.setAttribute("src", "./images/scissors.png");
        return "scissors";
    }
}

function playerPlay(e){
    //return window.prompt("What move would you like to play?");
    singleRound(this.id, computerPlay());
    const image = document.querySelector(".moves .player img");
    if(this.id == "rock"){
        image.setAttribute("src", "./images/rock.png");
    }else if(this.id == "paper"){
        image.setAttribute("src", "./images/paper.png");
    }else if(this.id == "scissors"){
        image.setAttribute("src", "./images/scissors.png");
    }
}

function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    const pScore = document.querySelector(".player p");
    const cScore = document.querySelector(".computer p");
    if(playerSelection == computerSelection){
        console.log("Draw. Both players played " + playerSelection);
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        console.log("You lose, " + computerSelection + " beats " + playerSelection); 
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        console.log("You win, " + playerSelection + " beats " + computerSelection); 
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        console.log("You win, " + playerSelection + " beats " + computerSelection);  
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        console.log("You lose, " + computerSelection + " beats " + playerSelection); 
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        console.log("You win, " + playerSelection + " beats " + computerSelection);  
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        console.log("You lose, " + computerSelection + " beats " + playerSelection); 
    }else{
        console.log("Not a valid move by player");
    }
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
    

}

function game(){
    for(let i = 0; i < 5; i++){
        console.log("hello world");
    }
}

game();