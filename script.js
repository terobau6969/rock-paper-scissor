// random mnumber 1,2,3 being rock paper and scissors
// computer displays play rock paper scissors ui and then throw upt 1 or 2 or 3 by random number
// user gets option to choose between 1 2 or 3 being rock paper and scissors respectively
//if computer and user has the same choice, its a draw if not user will win or lose.
let playerScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
});
document.getElementById('paper').addEventListener("click", function() {
    playGame('paper');
});
document.getElementById('scissors').addEventListener("click", function() {
    playGame('scissors');
});
document.getElementById('reset').addEventListener("click", function() {
    resetGame();
});

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if  (randomNumber === 1)
        return ("rock");
    else if (randomNumber === 2)
        return ("paper");
    else
        return ("scissors");
}


function playGame(playerChoice) {
    let computerChoice = getComputerChoice();

    document.getElementById("player").textContent = choiceEmoji(playerChoice);
    document.getElementById("computer").textContent = choiceEmoji(computerChoice);

    let resultText = determineWinner(playerChoice, computerChoice);

    document.getElementById("result").textContent = resultText;

    document.getElementById("playerScore").textContent = `🥸: ${playerScore}`;
    document.getElementById("computerScore").textContent = `🤖: ${computerScore}`;
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        return "It's a draw!";
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")){
            playerScore++;
            return "You win!";
        }
    else {
        computerScore++;
        return "Computer wins!";
    }
}

function choiceEmoji(choice) {
    switch (choice) {
        case "rock": return "✊";
        case "paper": return "🤚";
        case "scissors": return "✌️";
        default: return "";
    }
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("player").textContent = "";
    document.getElementById("computer").textContent = "";
    document.getElementById("playerScore").textContent = "🥸: 0";
    document.getElementById("computerScore").textContent = "🤖: 0";
}

