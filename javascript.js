function getComputerChoice() {
    const computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else if (computerChoice === 3) {
        return "scissors";
    }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const btnContainer = document.getElementById("buttonContainer");

// function getHumanChoice() {
//     const humanChoice = prompt("Rock Paper Scissors?").toLowerCase();
//     if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
//         return humanChoice
//     } else {
//         return prompt("Invalid input, please try again. Rock Paper Scissors?")
//     }
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {

        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You lose! Paper beats Rock");
            // console.log(humanScore);
            // console.log(computerScore);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You win! Rock beats scissors");
            // console.log(humanScore);
            // console.log(computerScore);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You lose! Scissors beats paper");
            // console.log(humanScore);
            // console.log(computerScore);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You win! Paper beats rock");
            // console.log(humanScore);
            // console.log(computerScore);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You lose! Rock beats scissors")
            // console.log(humanScore);
            // console.log(computerScore);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You win! scissors beats paper");
            // console.log(humanScore);
            // console.log(computerScore);
        } else {
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("It's a draw!")
            // console.log(humanScore);
            // console.log(computerScore);
        }  
    }

btnContainer.addEventListener("click", (event => {
    let target = event.target;
    let humanPick = "";

    switch(target.id) {
        case "rock":
            humanPick = "rock";
            playRound(humanPick,getComputerChoice());
            break;
        case "paper":
            humanPick = "paper";
            playRound(humanPick,getComputerChoice());
            break;
        case "scissors":
            humanPick = "scissors";
            playRound(humanPick,getComputerChoice());
            break;
            }
        }));

// rockBtn.addEventListener("click", () => {
//     let humanPick = "rock";
//     playRound(humanPick,getComputerChoice());
// })

// paperBtn.addEventListener("click", () => {
//     let humanPick = "paper";
//     playRound(humanPick,getComputerChoice());
// })

// scissorsBtn.addEventListener("click", () => {
//     let humanPick = "scissors";
//     playRound(humanPick,getComputerChoice());
// })



// function playGame() {
//     playRound(getHumanChoice(),getComputerChoice());
//     playRound(getHumanChoice(),getComputerChoice());
//     playRound(getHumanChoice(),getComputerChoice());
//     playRound(getHumanChoice(),getComputerChoice());
//     playRound(getHumanChoice(),getComputerChoice());
//     console.log(`Human Score: ${humanScore}`);
//     console.log(`Computer Score: ${computerScore}`);
//     if (humanScore > computerScore) {
//         console.log("GGEZ kids");
//     } else if ( humanScore < computerScore) {
//         console.log("computer is definitely cheating");
//     } else {
//         console.log("Your code is probably broken");
//     }
// }

