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
    const inputText = prompt("Please enter your choice");
    return inputText;
}
console.log(getHumanChoice());