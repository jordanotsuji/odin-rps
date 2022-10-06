// Rock Paper Scissors code

// Gameplay Variables
let playerScore = 0;
let computerScore = 0;
let inRound = false;
const choices = ["rock", "paper", "scissors"];


function playerSelection(playerChoice) {
  if (choices.indexOf(playerChoice.toLowerCase()) == -1) return undefined; // if not a choice
  let computerChoice = getComputerChoice();
  let result = playRound(playerChoice, computerChoice)
  return result;
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
  player = player.toLowerCase();
  computer = computer.toLowerCase();

  if (player == computer)
    return "draw"
  else if (player == "rock") {
    if (computer == "paper")
      return "lose"
    else if (computer == "scissors")
      return "win"
  }
  else if (player == "paper") {
    if (computer == "scissors")
      return "lose"
    else if (computer == "rock")
      return "win"
  }
  else if (player == "scissors")
    if (computer == "rock")
      return "lose"
    else if (computer == "paper")
      return "win"
}


//
// Animations Area
//

// DOM elements
const playerChoiceBoxes = document.querySelectorAll('.player .choice-box')
const winsText = document.querySelector('.wins')
const lossesText = document.querySelector('.losses')

playerChoiceBoxes.forEach(playerChoiceBox => playerChoiceBox.addEventListener('click', clickHandler))

function clickHandler(e) {
  if (inRound) return;
  inRound = true;

  let playerChoice = e.target.id.toLowerCase();
  selectionAnimationToggle(e);
  let result = playerSelection(playerChoice);
  console.log(result);
  // slot machine animation 
  updateScore(result);
  selectionAnimationToggle(e);

  inRound = false;
}

function selectionAnimationToggle(e) {
  // Handle classes that deal with selection animation
  e.target.classList.toggle('selected')
  playerChoiceBoxes.forEach(box => box.classList.toggle('hover'))
}

function updateScore(result) {
  if (result === "win") {
    winsText.textContent = `Wins: ${++playerScore}`
  } else if (result === "lose") {
    lossesText.textContent = `Losses: ${++computerScore}`
  }
}
