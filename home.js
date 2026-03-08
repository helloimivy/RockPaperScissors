"use strict";
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  // Math floor & random methods to produce num between 0 and 2
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let input = prompt("Please choose rock, paper, or scissors: ");
  return "" + input.toLowerCase();
}

function playRound(compChoice, humChoice) {
  let winningMessage = "";
  if (compChoice === humChoice) winningMessage = "it's a tie";
  if (compChoice === "rock" && humChoice === "paper") {
    winningMessage = "Computer chose rock & you chose paper. You win!";
  } else if (compChoice === "rock" && humChoice === "scissors") {
    winningMessage =
      "Computer chose rock and you chose scissors. Computer wins.";
  } else if (compChoice === "paper" && humChoice === "rock") {
    winningMessage = "Computer chose paper and you chose rock. Computer wins.";
  } else if (compChoice === "paper" && humChoice === "scissors") {
    winningMessage = "Computer chose paper and you chose scissors. You win!";
  } else if (compChoice === "scissors" && humChoice === "rock") {
    winningMessage = "Computer chose scissors and you chose rock. You win!";
  } else if (compChoice === "scissors" && humChoice === "paper") {
    winningMessage =
      "Computer chose scissors and you chose paper. Computer wins.";
  }
  return winningMessage;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let numRounds = 0;

  while (numRounds < 5) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    let roundPlayed = playRound(computerChoice, humanChoice);
    if (roundPlayed.includes("tie")) {
    } else {
      roundPlayed.includes("Computer wins.") ? ++computerScore : ++humanScore;
    }
    console.log(roundPlayed);
    console.log("computer score", computerScore, "human score", humanScore);
    numRounds++;
  }
}

console.log(playGame());
