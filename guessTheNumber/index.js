let computerNumber
let userNumbers = []
let tentativas = 0
let maxTentativas = 10

function newgame() {
    window.location.reload()
}

function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1)
  console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers 

    if (tentativas < maxTentativas) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número está alto'
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('tentativas').innerHTML = tentativas
        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número está baixo'
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('tentativas').innerHTML = tentativas
        }
        else {
            document.getElementById('textOutput').innerHTML = 'Parabéns! Você acertou! :)'
            tentativas++
            document.getElementById('tentativas').innerHTML = tentativas
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else{
        document.getElementById('textOutput').innerHTML = 'Você não conseguiu! O número do computador era: ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
         

}
