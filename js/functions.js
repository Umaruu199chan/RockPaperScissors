function getComputerChoice() {
    const generatedNum = Math.floor(Math.random() * 3) + 1;

    switch (generatedNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


function getHumanChoice() {
    const inputText = prompt("Please enter your choice").toLowerCase();
    return inputText;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let winnerText = "You Win!";
    let loserText = "You Lose!";

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(winnerText);
        humanScore++;
    } 
    else {
        console.log(loserText);
        computerScore++;
    }
}


function playGame() {
    for (let i = 1; i <=5; i++) {
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`The score of Human is ${humanScore} and the score of Computer is ${computerScore}`);

    }
    if (humanScore == computerScore) {
        console.log( "TIED");
    }else if (humanScore  > computerScore) {
        console.log ("The Winner of the game is Human");
    }
    else {
        console.log ("The Winner of the game is Computer");
    }
}
playGame()