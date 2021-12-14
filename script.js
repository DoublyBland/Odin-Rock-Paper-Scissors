function computerPlay(){
    let randomNum = getRandom();
    let computerChoice;
    switch (randomNum){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            computerChoice= "Error";
            break;
    }
    return computerChoice;
}

function getRandom(){
    return Math.floor(Math.random() * (3 - 1 +1)) ;
}

function playerPlay(){
    let playerChoice = prompt("Please select: Rock, Paper, or Scissors?", "No choice");
    playerChoice = formatInput(playerChoice);
    if (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissors"){//edit
        playerChoice = playerPlay();
    }
    return playerChoice;
}

function formatInput(input){
    let formattedText = input.toLowerCase();
    let firstLetter = input.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    formattedText = firstLetter + formattedText.slice(1, formattedText.length);
    return formattedText;
}


function playRound(){
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    decideWinner(playerSelection, computerSelection);
    console.log(`${computerSelection} vs ${playerSelection}`);
}

function decideWinner(playerChoice, computerChoice){
    let message;
    if playerChoice === computerChoice {
        message = `${playerChoice} = ${computerChoice}. It's a tie!`;
    }
    else {
    switch (playerChoice){
        case "Rock":
            if computerChoice = "Paper"{
                message
            }
            break;
        case "Paper":
            break;
        case "Scissors":
            break;
    }
}

    return message;
}

playRound();