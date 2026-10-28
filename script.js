
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

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper or Scissors:");

    if (choice === null) {
        return null;
    }

    return choice.trim().toLowerCase();
}

let humanScore = 0;
let comupterScore = 0;

function playRound(comupterChoice, humanChoice) {
    console.log("Computer:", comupterChoice);
    console.log("Human:", humanChoice);

        if (!["rock", "paper", "scissors"].includes(humanChoice)) {
        return "Invalid choice";
    }

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

for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);

    const humanSelection = getHumanChoice();

    if (humanSelection === null) {
        console.log("Game cancelled");
        break;
    }

    const computerSelection = getComupterChoice();
    const result = playRound(computerSelection, humanSelection);

    if (result === "Invalid choice") {
        console.log("Invalid choice! Try again next round.");
        continue;
    }

    if (result === "Human wins") {
        humanScore++;
    } else if (result === "Computer wins") {
        comupterScore++;
    }

    console.log("Result:", result);
    console.log("Score:", humanScore, "-", comupterScore);
}

console.log("FINAL SCORE");
console.log("Human:", humanScore);
console.log("Computer:", comupterScore);

if (humanScore > comupterScore) {
    console.log("You won the game!");
} else if (comupterScore > humanScore) {
    console.log("Computer won the game!");
} else {
    console.log("The game is a draw!");
}


