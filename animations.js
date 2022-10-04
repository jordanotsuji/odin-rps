// javascript file that handles gameplay visual transformations and sounds

const playerChoiceBoxes = document.querySelectorAll('.player .choice-box')

playerChoiceBoxes.forEach(playerChoiceBox => playerChoiceBox.addEventListener('click', playerSelection))
