const data = [
  {
    img: 'img/grace-hilty-0F-y8CZ9Fi8-unsplash.jpg',
    text: "The WonderWidget has completely transformed my daily routine. It's user-friendly, reliable, and incredibly versatile. I can't imagine going back to life without it. Highly recommended to anyone looking for a game-changing gadget!",
    name: 'WonderWidget',
  },
  {
    img: 'img/katelyn-warner-gct-LwWQXkg-unsplash.jpg',
    text: 'Working with Stellar Web Solutions was a fantastic experience. Their team was responsive, creative, and delivered a stunning website that exceeded our expectations. The whole process was smooth and stress-free. I would highly recommend them to anyone in need of web design services.',
    name: ' Stellar Web Solutions',
  },
  {
    img: 'img/michael-hamments-4RM1yC4-Rcc-unsplash.jpg',
    text: 'John Doe has been an exceptional financial advisor. His insightful advice and meticulous attention to detail have significantly improved my financial planning. I feel more confident about my future knowing John is guiding my investments. Highly recommend his services!',
    name: 'John Doe, Financial Advisor',
  },
]

const imgEl = document.querySelector('img')
const textEl = document.querySelector('.text')
const nameEl = document.querySelector('.name')

let idx = 0

function updateTestimonial() {
  const { img, text, name } = data[idx]
  imgEl.src = img
  textEl.innerText = text
  nameEl.innerText = name
  idx++
  if (idx === data.length) {
    idx = 0
  }
  setTimeout(() => {
    updateTestimonial()
  }, 5000)
}
updateTestimonial()
