const cardArray = [
    {
        name: 'butterfly',
        img: 'img/butterfly.png'
    },
    {
        name: 'dice',
        img: 'img/dice.png'
    },
    {
        name: 'eyes',
        img: 'img/eyes.png'
    },
    {
        name: 'paper',
        img: 'img/paper.png'
    },
    {
        name: 'star',
        img: 'img/star.png'
    },
    {
        name: 'tree',
        img: 'img/tree.png'
    },
    {
        name: 'butterfly',
        img: 'img/butterfly.png'
    },
    {
        name: 'dice',
        img: 'img/dice.png'
    },
    {
        name: 'eyes',
        img: 'img/eyes.png'
    },
    {
        name: 'paper',
        img: 'img/paper.png'
    },
    {
        name: 'star',
        img: 'img/star.png'
    },
    {
        name: 'tree',
        img: 'img/tree.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())
let gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const again = document.getElementById('again')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []
let score = 0

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        card.addEventListener('mouseover',hoverCard)
        again.addEventListener('click',playAgain)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosenIds.push(cardId)
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
        console.log(checkMatch)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')

    if(cardsChosenIds[0] === cardsChosenIds[1])
    {
        cards[cardsChosenIds[0]].setAttribute('src','img/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src','img/blank.png')
    }
    
    if(cardsChosen[0] == cardsChosen[1]){
        alert('match')
        cards[cardsChosenIds[0]].setAttribute('src','img/white.png')
        cards[cardsChosenIds[1]].setAttribute('src','img/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
        score +=5
    }
    else{
        cards[cardsChosenIds[0]].setAttribute('src','img/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src','img/blank.png')
        score--;
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.innerHTML = score;

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML == "gg no re"
        again.style.display="block"
    }
    
}

function playAgain(){
    cardsWon = []
    gridDisplay.innerHTML = ""
    resultDisplay.innerHTML = 0
    score = 0
    createBoard()
}

function hoverCard() {
    this.classList.add('holographic-card')
    console.log('hovered')
}






