"use strict";
// practicing using DOM; usually would create more inside of HTML document
const container = document.getElementById("container");

const results = document.createElement("div");
results.style.minHeight = "100px";
results.style.backgroundColor = "pink";
const resultsScoreBoard = document.createElement("div");
resultsScoreBoard.style.backgroundColor = "lightBlue";
resultsScoreBoard.style.minHeight = "20px";
const resultsMessage = document.createElement("div");
resultsMessage.style.minHeight = "20px";
results.appendChild(resultsMessage);
results.insertBefore(resultsScoreBoard, resultsMessage);
container.appendChild(results);

const buttons = document.querySelectorAll("button");
// Configure value of each button to reflect text content.
buttons.forEach((btn) => {
  btn.value = btn.textContent;
});

container.addEventListener("click", (event) => {
  if (event.target.value === "rock") {
    playRound("rock");
  } else if (event.target.value === "paper") {
    playRound("paper");
  } else if (event.target.value === "scissors") {
    playRound("scissors");
  }
  // console.log(event.target.value);
});

let humanScore = 0;
let computerScore = 0;
let numRounds = 0;
resultsScoreBoard.textContent = `
  human score: ${humanScore}
  computer score: ${computerScore}
  `;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  // Math floor & random methods to produce num between 0 and 2
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humChoice) {
  // let compChoice = getComputerChoice();
  const winningMessage = determineWinner(getComputerChoice(), humChoice);

  if (winningMessage.includes("tie")) {
  } else {
    winningMessage.includes("Computer wins.") ? ++computerScore : ++humanScore;
  }
  // Update resultsMessge and resultsScoreboard
  resultsMessage.textContent = winningMessage;
  updateScoreBoard(humanScore, computerScore);
  numRounds++;
  if (humanScore === 5 || computerScore === 5) {
    // disable clickEvent
    buttons.forEach((btn) => {
      btn.style.pointerEvents = "none";
    });
    // determine winner
    if (humanScore === 5) {
      resultsMessage.textContent = `You win! Good job!`;
    } else {
      resultsMessage.textContent = `Computer wins. Try again!`;
    }
    // make a restart game button appear and disappear
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    results.appendChild(playAgainButton);
    playAgainButton.addEventListener("click", () => {
      resultsMessage.textContent =
        "You have decided to play again. Make your selection";
      humanScore = 0;
      computerScore = 0;
      updateScoreBoard(humanScore, computerScore);
      buttons.forEach((btn) => {
        btn.style.pointerEvents = "auto";
      });
      playAgainButton.remove();
    });
  }
}

function determineWinner(compChoice, humChoice) {
  if (compChoice === humChoice) return "it's a tie";
  if (compChoice === "rock" && humChoice === "paper") {
    return "Computer chose rock & you chose paper. You win!";
  } else if (compChoice === "rock" && humChoice === "scissors") {
    return "Computer chose rock and you chose scissors. Computer wins.";
  } else if (compChoice === "paper" && humChoice === "rock") {
    return "Computer chose paper and you chose rock. Computer wins.";
  } else if (compChoice === "paper" && humChoice === "scissors") {
    return "Computer chose paper and you chose scissors. You win!";
  } else if (compChoice === "scissors" && humChoice === "rock") {
    return "Computer chose scissors and you chose rock. You win!";
  } else if (compChoice === "scissors" && humChoice === "paper") {
    return "Computer chose scissors and you chose paper. Computer wins.";
  }
  return winningMessage;
}

function updateScoreBoard(humanScore, computerScore) {
  resultsScoreBoard.textContent = `
        human score: ${humanScore}
        computer score: ${computerScore}
        `;
}
