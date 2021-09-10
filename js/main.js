let factInput = document.getElementById('factInput')
let factBtn = document.getElementById('factBtn')
let factDiv = document.getElementById('factDiv')
let factText = document.getElementById('factText')
let factRandom = document.getElementById('factRandom')

factInput.addEventListener('input', getFact)
factRandom.addEventListener('click', randomFact)

function getFact() {
  let fact = factInput.value
  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category='+fact)

  xhr.onload = function() {
    if (this.status === 200) {
      factDiv.style.display = 'block'
      const obj = JSON.parse(this.responseText)
      factText.innerText = obj.value
    }
  }

  xhr.send()
}

function randomFact() {
  factInput.value = ''
  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

  xhr.onload = function () {
    factDiv.style.display = 'block'
    const obj = JSON.parse(this.responseText)
    factText.innerText = obj.value
  }

  xhr.send()
}
