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
    //console.log(decideWinner(playerSelection, computerSelection));
    const outcome = document.getElementById('outcome');
    outcome.textContent = decideWinner(playerSelection, computerSelection);
    //console.log(`${computerSelection} vs ${playerSelection}`);
    return;
}

function decideWinner(playerChoice, computerChoice){
    let message;
    let win = 2;
    if (playerChoice === computerChoice) {
        message = `${playerChoice} = ${computerChoice}. It's a tie!`;
        removeColor();
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
        addPoint('player', 'computer');
    }
    else if (win === 0) {
        message = `${computerChoice} beats ${playerChoice}. You Lose!`;
        addPoint('computer', 'player');
    }
    return message;
}

function addPoint(winner, loser) {
        const element = winner + "Score";
        const currentScore = document.getElementById(element).textContent;
        let newScore = parseInt(currentScore) + 1;
        document.getElementById(element).textContent = newScore;
        addColor(winner, loser);

        return;
}

function addColor(winner,loser){
    const elementWin = winner + "Score";
    const elementLose = loser + "Score";
    document.getElementById(elementWin).classList.add("winner");
    document.getElementById(elementWin).classList.remove("loser");
    document.getElementById(elementLose).classList.add("loser");
    document.getElementById(elementLose).classList.remove("winner");
    return;
}
function removeColor(){
    document.getElementById('playerScore').classList.remove('winner','loser');
    document.getElementById('computerScore').classList.remove('winner','loser');
}


function game() {
const container = document.getElementById('button-container');

container.addEventListener('click', (e) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton){
        return;
    }
    const selection = e.target.textContent;
    let check = startStop();
if (check == 0 ) {return;}
else {
    playRound(selection);
    startStop();
    }
    return;
})
}

function startStop() {
    const playerScore = document.getElementById('playerScore').textContent;
    const computerScore = document.getElementById('computerScore').textContent;
    if (playerScore == 5 || computerScore == 5){
        if (playerScore ==5){
            const outcome = document.getElementById('outcome');
            outcome.textContent = "Congratulations! You've won the game!"
        }
        else {
            const outcome = document.getElementById('outcome');
            outcome.textContent = "Better luck next time. Computer wins!"
        }
    }
    else {
        return 1;
    }
    return 0;
}

game();