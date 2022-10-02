// Rock Paper Scissors code
// Functions: getComputerChoice()
//            playerSelectiOn()
//            playRound(player choice, computer choice)

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerSelection() {
  let choice = prompt("Rock, Paper, Scissors, Shoot: ");
  while (!choices.includes(choice.toLowerCase())) {
    console.log("Please choose a valid option")
    choice = prompt("Rock, Paper, Scissors, Shoot: ");
  }
  return choice.toLowerCase();
}

function playRound(player, computer) {
  player = player.toLowerCase();
  computer = computer.toLowerCase();

  if (player == computer) {
    return "draw!"
  }
  else if (player == "rock") {
    if (computer == "paper") {
      return "You Lose!"
    } else if (computer == "scissors") {
      return "You Win!"
    }
  }
  else if (player == "paper") {
    if (computer == "scissors") {
      return "You Lose!"
    } else if (computer == "rock") {
      return "You Win!"
    }
  }
  else {
    if (computer == "rock") {
      return "You Lose!"
    } else if (computer == "paper") {
      return "You Win!"
    }
  }
}

// Gameplay Area

console.log("Welcome to Rock Paper Scissors!");
let games = prompt("How many games would you like to play?")

for (let i = 0; i < games; i++) {
  let playerChoice = playerSelection();
  console.log(playRound(playerChoice, getComputerChoice()));
}
