const birth = document.getElementById('birth')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', () => {
  const birthValue = birth.value
  const birthDate = new Date(birthValue)
  const birthDay = birthDate.getDate()
  const birthMonth = birthDate.getMonth() + 1
  const birthYear = birthDate.getFullYear()
  if (birthValue == '') {
    return (result.innerText = `Please enter your birth date.`)
  }
  userYear(birthDay, birthMonth, birthYear)
})

function userYear(day, month, year) {
  const currentDate = new Date()
  let userDay = currentDate.getDate() - day
  let userMonth = currentDate.getMonth() + 1 - month
  let userYear = currentDate.getFullYear() - year

  if (
    year > currentDate.getFullYear() ||
    (year === currentDate.getFullYear() && month > currentDate.getMonth()) ||
    (year === currentDate.getFullYear() && month > currentDate.getMonth() && day > currentDate.getDate())
  ) {
    result.innerText = `You've entered a future birth date! Please enter a valid one.`
    return
  }

  if (userDay < 0) {
    userMonth--
    const prevMonthDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
    userDay += prevMonthDay
  }
  if (userMonth < 0) {
    userMonth += 12
    if (userYear != 0) {
      userYear--
    }
  }

  result.innerText = `Your ${userDay} day ${userMonth} month ${userYear} year`
}
