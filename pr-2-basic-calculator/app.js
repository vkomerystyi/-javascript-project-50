const resultInput = document.querySelector('#result')
const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent
    if (buttonValue === 'C') {
      clearResult()
    } else if (buttonValue === '=') {
      calculateResult()
    } else {
      appendValue(buttonValue)
    }
  })
})

function clearResult() {
  resultInput.value = ''
}
function calculateResult() {
  resultInput.value = eval(result.value)
}
function appendValue(buttonValue) {
  resultInput.value += buttonValue
}
