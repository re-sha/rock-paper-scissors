function getComputerChoice (a) {
     a = Math.floor(Math.random() * 3)+1;
    if (a===1) {
        a="rock";
    }
    else if (a===2) {
        a="paper";
    }
    else if (a===3) {
        a="scissors";
    }
    console.log("\n");
    console.log("Computer made its choice, now its your turn")
    return a;
}


function getHumanChoice (b) {
    b = prompt("Enter your choice","rock | paper | scissors").toLowerCase();
    if (b==="rock") {
        console.log("You chose rock");
    }
    else if (b==="paper") {
        console.log("You chose paper");
    }
    else if (b==="scissors") {
        console.log("You chose scissors");
    }
    else {
        console.log("Enter a vaild choice");
    }
    return b;
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Its a tie!");
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock")
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats scissors")
            computerScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper")
            computerScore++;
        }
        else if (computerChoice === "rock" && humanChoice === "paper") {
            console.log("You win!")
            humanScore++;
        }
        else if (computerChoice === "scissors" && humanChoice === "rock") {
            console.log("You win!")
            humanScore++;
        }
        else if (computerChoice === "paper" && humanChoice === "scissors") {
            console.log("You win!")
            humanScore++;
        } 
    }
    if (humanScore>computerScore) {
        console.log(`You won with ${humanScore} points!`)
    }
    else if(humanScore < computerScore) {
        console.log(`The computer won with ${computerScore} points`)
    }
    else if (computerScore === humanScore) {
        console.log("Its a tie you guys!")
    }
}
playGame();
