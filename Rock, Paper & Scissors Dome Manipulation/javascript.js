const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gamerGrid = document.getElementById('game')
gamerGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']

var userChoice
var computerChoice

const handelClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
  generateComputerChoice ()
  playRound()
}
const generateComputerChoice = () => {
  const randomChoice = choices [Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = 'Computer choice: ' + randomChoice
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  button.id = choices[i]
  button.innerHTML = choices[i]
  button.addEventListener('click', handelClick)
  gamerGrid.appendChild(button)
}

const playRound = () => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = "You Win!"
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = "You Lose!"
      break
    case 'paperpaper':
    case 'rockrock':
    case 'scissorsscissors':
      resultDisplay.innerHTML = "Its a draw!"
      break
  }
}

