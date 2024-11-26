function getComputerChoice() {
    const generatedNum = Math.floor(Math.random() * 3) + 1;

    switch (generatedNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    const inputText = prompt("Please enter your choice").toLowerCase();
    return inputText;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let winnerText = "You Win!";
    let loserText = "You Lose!";

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return winnerText;
    } else {
        computerScore++;
        return loserText;
    }
}
