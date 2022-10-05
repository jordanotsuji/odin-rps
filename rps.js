// Rock Paper Scissors code
// Functions: getComputerChoice()
//            playerSelectiOn()
//            playRound(player choice, computer choice)

let playerScore = 0;
let computerScore = 0;
let inRound = false;
const choices = ["rock", "paper", "scissors"];

// DOM elements
const playerChoiceBoxes = document.querySelectorAll('.player .choice-box')
const winsText = document.querySelector('.wins')
const lossesText = document.querySelector('.losses')


function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerSelection(e) {
  if (inRound) return;   // If in the middle 
  // now in the middle of a round
  inRound = true;
  // Handle classes that deal with selection animation
  e.target.classList.add('selected')
  playerChoiceBoxes.forEach(box => box.classList.remove('hover'))

  let playerChoice = e.target.id;
  startRound(playerChoice);

  // After round is over, restore classes and selection rights
  e.target.classList.remove('selected');
  playerChoiceBoxes.forEach(box => box.classList.add('hover'))
  inRound = false;
}

function playRound(player, computer) {
  player = player.toLowerCase();
  computer = computer.toLowerCase();

  if (player == computer) {
    return "draw"
  }
  else if (player == "rock") {
    if (computer == "paper") {
      return "lose"
    } else if (computer == "scissors") {
      return "win"
    }
  }
  else if (player == "paper") {
    if (computer == "scissors") {
      return "lose"
    } else if (computer == "rock") {
      return "win"
    }
  }
  else {
    if (computer == "rock") {
      return "lose"
    } else if (computer == "paper") {
      return "win"
    }
  }
}

function startRound(playerChoice) {
  // slot machine animation

  let result = playRound(playerChoice, getComputerChoice())

  if (result === "win") {
    winsText.textContent = `Wins: ${++playerScore}`
  } else if (result === "lose") {
    lossesText.textContent = `Losses: ${++computerScore}`
  }
}


// Animations Area
playerChoiceBoxes.forEach(playerChoiceBox => playerChoiceBox.addEventListener('click', playerSelection))

// Gameplay Area

// console.log("Welcome to Rock Paper Scissors!");
// let games = prompt("How many games would you like to play?")


// for (let i = 0; i < games; i++) {
//   let playerChoice = playerSelection();
//   console.log(playRound(playerChoice, getComputerChoice()));
// }
