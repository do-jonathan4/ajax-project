let factInput = document.getElementById('factInput')
let factBtn = document.getElementById('factBtn')
let factDiv = document.getElementById('factDiv')
let factText = document.getElementById('factText')

factInput.addEventListener('input', getFact)

function getFact() {
  let fact = factInput.value
  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category='+fact)

  xhr.onload = function() {
    if (this.status === 200) {
      const obj = JSON.parse(this.responseText)
      console.log(obj.value)
    }
  }

  xhr.send()
}
