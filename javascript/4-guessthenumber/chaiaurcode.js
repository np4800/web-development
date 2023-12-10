const submit = document.getElementById('subt')
let randomNum = parseInt(Math.random()*100+1)

const userInput = document.getElementById('guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

const prevGuess = []
let numGuess = 1
let playGame = true

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuesses(guess)
    })
}

function validateGuesses(guess){
    if (isNaN(guess)){
        alert('Enter valid number, please!')
    }else if (guess < 1) {
        alert('Not a valid number. Enter greater than or equal to 1')
    }else if (guess>100) {
        alert('Enter less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNum) {
        displayMessage("Voila! You guessed is right!")
        endGame()
    } else if (guess < randomNum) {
        displayMessage("Oops! Number is too low!")
    } else if (guess > randomNum) {
        displayMessage("Oops! Number is too High")
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess = numGuess + 1;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newButton = document.querySelector('#newGame')
    newButton.addEventListener('click', function(e){
        randomNum = parseInt(Math.random()*100+1)
        prevGuess = []
        newGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - newGuess}, `
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = "<h2 id='newGame'>Start New Game</h2>"
    startOver.appendChild(p)
    playGame = false
    alert('Hello')
    newGame()
}