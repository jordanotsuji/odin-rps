// Rock Paper Scissors code

// Gameplay Variables
let playerScore = 0;
let computerScore = 0;
let inRound = false;
const choices = ["rock", "paper", "scissors"];


function getGameResult(playerChoice, computerChoice) {
  console.log(playerChoice + " " + computerChoice)
  if (choices.indexOf(playerChoice.toLowerCase()) == -1) return undefined; // if not a choice
  if (choices.indexOf(computerChoice.toLowerCase()) == -1) return undefined;
  let result = playRound(playerChoice, computerChoice)
  return result
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

function isGameOver() {
  return playerScore == 5 || computerScore == 5
}

function resetGameVars() {
  playerScore = 0;
  computerScore = 0;
}


//
// Animations Area
//

// DOM elements
const playerChoiceBoxes = document.querySelectorAll('.player .choice-box')
const winsText = document.querySelector('.wins')
const lossesText = document.querySelector('.losses')
const compChoiceImg = document.getElementById('computer-box')
const endModal = document.getElementById('endgame-modal')
const restartButton = document.getElementById('restart-button')
const overlay = document.querySelector('.overlay')
const choiceImgs = ["images/rock.jpg", "images/paper.jpg", "images/scissors.jpg"]

playerChoiceBoxes.forEach(playerChoiceBox => playerChoiceBox.addEventListener('click', clickHandler))
restartButton.addEventListener('click', restartGame)

function clickHandler(e) {
  if (inRound) return;
  inRound = true;
  // gameplay variables needed for animations or to pass to game code
  let playerChoice = e.target.id.toLowerCase();
  let computerChoice = getComputerChoice();
  let result = getGameResult(playerChoice, computerChoice);

  selectionAnimationToggle(e);
  computerChoiceAnimation(computerChoice)
  updateScore(result)
  selectionAnimationToggle(e);
  inRound = false;

  if (isGameOver()) {
    toggleEndGameModal()
  }
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

function computerChoiceAnimation(computerChoice) {
  // let cycles = 20;
  // let choice = 0;
  // for (let i = 0; i < cycles; i++) {
  //   setTimeout(() => {
  //     compChoiceImg.src = choiceImgs[choice % 3]
  //   }, 1000 * i);
  //   choice++
  // }
  // setTimeout(() => {
  //   compChoiceImg.src = "images/" + computerChoice + ".jpg"
  // }, 1000 * cycles)
  compChoiceImg.src = "images/" + computerChoice + ".jpg"
}


function toggleEndGameModal() {
  endModal.classList.toggle("active")
  overlay.classList.toggle("active")
}

function restartGame() {
  resetGameVars()
  resetGameVisual()
  toggleEndGameModal()
}

function resetGameVisual() {
  winsText.textContent = `Wins: 0`
  lossesText.textContent = `Losses: 0`
  compChoiceImg.src = "images/xi.jpg"
}

