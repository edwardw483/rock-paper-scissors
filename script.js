//global variables
playerScore = 0;
computerScore = 0;

//set up event listeners for each potential move
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', playerPlay);
});

function computerPlay(){
    //pick move
    let rand = Math.floor(Math.random() * 3);
    //update image and return move
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
    //play the round
    singleRound(this.id, computerPlay());
    //update image
    const image = document.querySelector(".moves .player img");
    if(this.id == "rock"){
        image.setAttribute("src", "./images/rock.PNG");
    }else if(this.id == "paper"){
        image.setAttribute("src", "./images/paper.PNG");
    }else if(this.id == "scissors"){
        image.setAttribute("src", "./images/scissors.png");
    }
}

function singleRound(playerSelection, computerSelection){
    //convert to lowercase to make comparison case insensitive
    playerSelection = playerSelection.toLowerCase();
    //comparisons and update result
    const result = document.querySelector(".info h3");
    if(playerSelection == computerSelection){
        result.textContent = `Draw. Both players played ${playerSelection}`;
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        result.textContent = `You lose, ${computerSelection} beats ${playerSelection}`; 
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        result.textContent = `You win, ${playerSelection} beats ${computerSelection}`; 
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        result.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        result.textContent = `You lose, ${computerSelection} beats ${playerSelection}`; 
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        result.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        result.textContent = `You lose, ${computerSelection} beats ${playerSelection}`; 
    }else{
        console.log("Not a valid move by player");
    }
    //update scores
    const pScore = document.querySelector(".player p");
    const cScore = document.querySelector(".computer p");
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
    
    //check for winners
    if(playerScore >= 5 || computerScore >= 5){
        //disable RPS moves, add play again button
        const body = document.querySelector("body");
        const playAgain = document.createElement("button");
        playAgain.addEventListener("click", restart)
        playAgain.classList.add("playAgain");
        playAgain.textContent = "Play Again!";
        body.appendChild(playAgain);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        //announce winner
        const announceWin = document.querySelector(".info h2");
        if(playerScore >= 5){
            announceWin.textContent = `You win!`;
        }else{
            announceWin.textContent = `The computer wins!`;
        }
    }
}

function restart(event){
    //reset images
    const computerImg = document.querySelector(".moves .computer img");
    computerImg.setAttribute("src", "./images/unknown.png");
    const playerImg = document.querySelector(".moves .player img");
    playerImg.setAttribute("src", "./images/unknown.png");
    //re-enable buttons
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    //update scores
    playerScore = 0;
    computerScore = 0;
    const pScore = document.querySelector(".player p");
    const cScore = document.querySelector(".computer p");
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
    //update result text
    const result = document.querySelector(".info h3");
    result.textContent = `Make your move`;
    //update winner text
    const announceWin = document.querySelector(".info h2");
    announceWin.textContent = `First to reach 5 points wins`
    //remove button
    const body = document.querySelector("body");
    body.removeChild(this);
}