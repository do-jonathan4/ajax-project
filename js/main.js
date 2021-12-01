const factInput = document.getElementById('factInput')
const factBtn = document.getElementById('factBtn')
const factDiv = document.getElementById('factDiv')
const factErr = document.getElementById('factErr')
const factText = document.getElementById('factText')
const factRandom = document.getElementById('factRandom')
let timeout = null

const sentHttpRequest = (method, url) => {
  let xhr = new XMLHttpRequest()

  xhr.open(method, url)

  xhr.onload = () => {
    if (xhr.status === 200) {
      factDiv.style.display = 'block'
      factErr.style.display = 'none'
      const obj = JSON.parse(xhr.responseText)
      factText.innerText = obj.value
    } else {
      factDiv.style.display = 'none'
      factErr.style.display = 'block'
    }
  }

  xhr.send()
}
const getFact = () => {
  const fact = factInput.value
  clearTimeout(timeout)

  timeout = setTimeout(() => {
    if (fact === '') {
      factDiv.style.display = 'none'
      factErr.style.display = 'none'
      return
    }
    sentHttpRequest('GET', 'https://api.chucknorris.io/jokes/random?category=' + fact)
  }, 1000)
}

const randomFact = () => {
  factInput.value = ''
  sentHttpRequest('GET', 'https://api.chucknorris.io/jokes/random')
}

factInput.addEventListener('input', getFact)
factRandom.addEventListener('click', randomFact)
