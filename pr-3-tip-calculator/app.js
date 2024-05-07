const bill = document.querySelector('#bill')
const tip = document.querySelector('#tip')
const calculate = document.querySelector('#calculate')
const total = document.querySelector('#total')

function calculateValue() {
  const billValue = bill.value
  const tipValue = tip.value

  const totalValue = billValue * (1 + tipValue / 100)
  total.textContent = totalValue.toFixed(2)
}

calculate.addEventListener('click', calculateValue)
