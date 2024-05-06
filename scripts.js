let humanScore = 0;
let computerScore = 0;

function getComputerChoice (a) {
     a = Math.floor(Math.random() * 3)+1;
    if (a===1) {
        console.log("rock");
    }
    else if (a===2) {
        console.log("paper");
    }
    else {
        console.log("scissors");
    }
}
getComputerChoice();

function getHumanChoice (b) {
    let humanChoice = prompt("Enter your choice","rock | paper | scissors");
    if (humanChoice==="rock") {
        console.log("rock");
    }
    else if (humanChoice==="paper") {
        console.log("paper");
    }
    else if (humanChoice==="scissors") {
        console.log("scissors");
    }
    else {
        console.log("Enter a vaild choice");
    }
}
getHumanChoice();
