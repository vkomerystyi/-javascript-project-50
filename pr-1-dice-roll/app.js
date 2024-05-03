const dice = document.querySelector('#dice')
const btn = document.querySelector('#btn')
const rollHistory = document.querySelector('#roll-history')

function randomNumber() {
  return Math.floor(Math.random() * 6) + 1
}
function diceUser(num) {
  let result
  switch (num) {
    case 1:
      return (result = '&#9856;')
    case 2:
      return (result = '&#9857;')
    case 3:
      return (result = '&#9858;')
    case 4:
      return (result = '&#9859;')
    case 5:
      return (result = '&#9860;')
    case 6:
      return (result = '&#9861;')

    default:
      return ''
  }
}
let arr = []
btn.addEventListener('click', () => {
  dice.classList.remove('roll-animation')
  const numberDice = randomNumber()
  const result = diceUser(numberDice)
  dice.innerHTML = `${result}`
  arr.push(result)

  setTimeout(() => {
    dice.classList.add('roll-animation')

    setTimeout(() => {
      rollHistory.innerHTML = ''
      arr.forEach((el, i) => {
        const li = document.createElement('li')
        li.innerHTML = `roll ${i + 1}: <span>${el}</span>`
        rollHistory.appendChild(li)
      })
    }, 1000)
  }, 100)
})
