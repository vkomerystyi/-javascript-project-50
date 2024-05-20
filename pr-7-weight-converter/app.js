const number = document.querySelector('#number')
const weight = document.querySelector('#weight')
const error = document.querySelector('#error')

let setTimeoutStop

function weightConverter() {
  if (number.value < 0 || isNaN(number.value)) {
    error.innerText = 'Your error weight...'
    clearTimeout(setTimeoutStop)
    setTimeoutStop = setTimeout(() => {
      error.innerText = ''
      number.value = ''
    }, 2000)
  } else {
    weight.innerText = (+number.value / 2.2).toFixed(2)
  }
}
number.addEventListener('input', weightConverter)
