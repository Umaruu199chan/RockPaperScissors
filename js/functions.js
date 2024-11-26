function getComputerChoice() {
    const generatedNum = Math.floor(Math.random() * 3) + 1;

    switch (generatedNum) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return'scissors';
    }
}
console.log(getComputerChoice());