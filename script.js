let playerScore = 0;
let computerScore = 0;

// Event listeners for choices
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
document.getElementById('reset').addEventListener('click', resetGame);

// Generate computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Core game logic
function playGame(playerChoice) {
    if (playerScore >= 3 || computerScore >= 3) return; // Stop game if already over

    const computerChoice = getComputerChoice();

    document.getElementById("player").textContent = choiceEmoji(playerChoice);
    document.getElementById("computer").textContent = choiceEmoji(computerChoice);

    const resultText = determineWinner(playerChoice, computerChoice);
    document.getElementById("result").textContent = resultText;

    // Update scores on screen
    document.getElementById("playerScore").textContent = `🥸: ${playerScore}`;
    document.getElementById("computerScore").textContent = `🤖: ${computerScore}`;

    // End game message
    if (playerScore === 3 || computerScore === 3) {
        const finalResult = playerScore === 3 ? "🥳 You are the RPS God!" : "😓 Try harder next time!";
        document.getElementById("result").textContent = finalResult;
    }
}

// Decide winner of the round
function determineWinner(player, computer) {
    if (player === computer) return "It's a draw!";

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winConditions[player] === computer) {
        playerScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

// Convert choice to emoji
function choiceEmoji(choice) {
    switch (choice) {
        case "rock": return "✊";
        case "paper": return "🤚";
        case "scissors": return "✌️";
        default: return "";
    }
}

// Reset everything
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("player").textContent = "";
    document.getElementById("computer").textContent = "";
    document.getElementById("playerScore").textContent = "🥸: 0";
    document.getElementById("computerScore").textContent = "🤖: 0";
}
