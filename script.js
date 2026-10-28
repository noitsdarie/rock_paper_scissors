
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let number = getRandomInt(3);

function getComupterChoice(number) {
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let getHumanChoice = prompt("Choose Rock, Paper or Scissors:");
if (getHumanChoice === null) {
    console.log("Game cancelled");
} else {
    getHumanChoice = getHumanChoice.trim().toLowerCase();
}

let humanScore = 0;
let comupterScore = 0;

function playRound(comupterChoice, humanChoice) {
    console.log("Computer:", comupterChoice);
    console.log("Human:", humanChoice);

    if (comupterChoice === "paper" && humanChoice === "paper") {
        return "EVEN!"
    } else if (comupterChoice === "paper" && humanChoice === "scissors") {
        return "Human wins"
    } else if (comupterChoice === "paper" && humanChoice === "rock") {
        return "Computer wins"
    } else if (comupterChoice === "scissors" && humanChoice === "scissors") {
        return "EVEN!"
    } else if (comupterChoice === "scissors" && humanChoice === "paper") {
        return "Computer wins"
    } else if (comupterChoice === "scissors" && humanChoice === "rock") {
        return "Human wins"
    } else if (comupterChoice === "rock" && humanChoice === "rock") {
        return "EVEN!"
    } else if (comupterChoice === "rock" && humanChoice === "scissors") {
        return "Computer wins"
    } else if (comupterChoice === "rock" && humanChoice === "paper") {
        return "Human wins"
    } else {
        return "wrong data";
    }

}

const humanSelection = getHumanChoice;
const computerSelection = getComupterChoice(number);

console.log(playRound(computerSelection, humanSelection));
