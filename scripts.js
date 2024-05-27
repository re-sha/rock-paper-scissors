function getComputerChoice () {
    const computerSelectn = document.querySelector(".computer-selection");
    const choice = ["rock", "paper", "scissors"];
     a = Math.floor(Math.random() * 3)+1;
     computerSelectn.textContent = `Computer made its choice`;
     return choice[a - 1];
}

function getHumanChoice (playerSelection) {
    const playerSelectn = document.querySelector(".player-selection")
    playerSelectn.textContent = `You selected ${playerSelection}`;
    return playerSelection;
}
    
    function playRound (humanChoice, computerChoice) {
        const resultDiv = document.querySelector("#results")
        if (humanChoice === computerChoice) {
            resultDiv.textContent = "Its a tie!";
        }
        else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors") 
        ) {
            resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        }
        else {
            resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        }
    }

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    const compScore = document.querySelector("#computer-score");
    const humScore = document.querySelector("#player-score");
    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        let playerSelection = getHumanChoice("rock");
        let computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection);
        if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore++;
            compScore.textContent = computerScore;
        }
        else if (playerSelection == "rock" && computerSelection == "scissors") {
            humanScore++;
            humScore.textContent = humanScore;
        }
        checkWinner(humanScore, computerScore);
    });

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        let playerSelection = getHumanChoice("paper");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (playerSelection == "paper" && computerSelection == "rock") {
            humanScore++;
            humScore.textContent = humanScore;
        }
        else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
            compScore.textContent = computerScore;
        }
        checkWinner(humanScore, computerScore);
    });

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        let playerSelection = getHumanChoice("scissors");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (playerSelection == "scissors" && computerSelection == "paper") {
            humanScore++;
            humScore.textContent = humanScore;
        }
        else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++;
            compScore.textContent = computerScore;
        }
        checkWinner(humanScore, computerScore);
    });
}
function checkWinner (humanScore, computerScore) {
    const score = document.querySelector("#score");
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore>computerScore) {
            score.textContent = `You won!`;
        }
        else if(humanScore < computerScore) {
            score.textContent = `The computer won!`;
        }
    }
}
playGame();
