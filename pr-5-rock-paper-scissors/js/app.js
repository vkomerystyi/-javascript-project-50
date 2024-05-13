const buttons = document.querySelectorAll('button')
const userScore = document.querySelector('#user-score')
const computerScore = document.querySelector('#computer-score')
const result = document.querySelector('#result')
let countUser = 0
let countComp = 0
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const user = button.id
    const comp = computerGame()
    playGame(user, comp)
    userScore.textContent = countUser
    computerScore.textContent = countComp
  })
})

function computerGame() {
  let arr = ['rock', 'paper', 'scissors']
  let indexNumber = Math.floor(Math.random() * buttons.length)
  return arr[indexNumber]
}

function playGame(user, comp) {
  if (user == comp) {
    result.textContent = `Draw`
  } else if (
    (user == 'rock' && comp == 'scissors') ||
    (user == 'scissors' && comp == 'paper') ||
    (user == 'paper' && comp == 'rock')
  ) {
    countUser++
    result.textContent = `You Win! You ${user} beats ${comp}`
  } else {
    countComp++
    result.textContent = `You Lose! Computer ${comp} beats ${user}`
  }
}
