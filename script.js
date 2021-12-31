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


function playRound(playerSelection){
    let computerSelection = computerPlay();
    //let playerSelection = playerPlay();
    console.log(decideWinner(playerSelection, computerSelection));
    //console.log(`${computerSelection} vs ${playerSelection}`);
}

function decideWinner(playerChoice, computerChoice){
    let message;
    let win = 2;
    if (playerChoice === computerChoice) {
        message = `${playerChoice} = ${computerChoice}. It's a tie!`;
    }
    else {
    switch (playerChoice){
        case "Rock":
            if (computerChoice == "Paper"){
                win = 0;
            }
            else if (computerChoice == "Scissors"){
                win = 1;
            }
            break;
        case "Paper":
            if (computerChoice == "Scissors"){
                win = 0;
            }
            else if (computerChoice == "Rock"){
                win = 1;
            }
            break;
        case "Scissors":
            if (computerChoice == "Rock"){
                win = 0;
            }
            else if (computerChoice == "Paper"){
                win = 1;
            }
            break;
        default:
            console.log("error");
            break;
    }
}
    if (win === 1) {
        message = `${playerChoice} beats ${computerChoice}. You Win!`;
    }
    else if (win === 0) {
        message = `${computerChoice} beats ${playerChoice}. You Lose!`;
    }
    return message;
}

function game() {
    for (let i = 1; i<6; i++){
        console.log(`Round ${i}:`);
        playRound();
    }
}

const container = document.getElementById('button-container');

container.addEventListener('click', (e) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton){
        return;
    }
    const selection = e.target.textContent;
    playRound(selection);

})