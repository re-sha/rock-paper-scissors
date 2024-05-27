// let playerSelection = "";
function getComputerChoice (a) {
     a = Math.floor(Math.random() * 3)+1;
     console.log("Computer made its choice!")
    if (a===1) {
        return "rock";
    }
    else if (a===2) {
        return "paper";
    }
    else if (a===3) {
        return "scissors";
    }
}

function getHumanChoice (playerSelection) {
    console.log(`You selected ${playerSelection}`);
    return playerSelection;
}
    
    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Its a tie!");
        }
        else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors") 
        ) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
        console.log("\n");
    }

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        let playerSelection = getHumanChoice("rock");
        let computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection);
        if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore++;
        }
        else if (playerSelection == "rock" && computerSelection == "scissors") {
            humanScore++;
        }
    });

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        let playerSelection = getHumanChoice("paper");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (playerSelection == "paper" && computerSelection == "rock") {
            humanScore++;
        }
        else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
        }
    });

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
    playRound("scissors",getComputerChoice());
    });

    if (humanScore>computerScore) {
        console.log(`You won with ${humanScore} points!`)
    }
    else if(humanScore < computerScore) {
        console.log(`The computer won with ${computerScore} points`)
    }
}
playGame();
