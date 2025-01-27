const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generatedComputerChoice()
    getResult()
}))

function generatedComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) //or you can use possibleChoices.lenght

    switch (randomNumber) {
        case (0):
            computerChoice = 'rock'
            break;
        case (1):
            computerChoice = 'scissors'
            break;
        case (2):
            computerChoice = 'paper'
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Defeat'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Defeat'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Win'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Defeat'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Win'
    }

    resultDisplay.innerHTML = result;
}




