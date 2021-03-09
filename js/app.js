'use strict';

// // Functions to Create

// // 1. Global Variables
// // --- empty card array
// let emptyCard = [];
// // --- leaderboard array
// let topTen = [];
// // --- click counter
// let clicks = [];
// // --- timer
// // --- reset button

// // 2. Create board function (rendering board)
// // - click - play button

// // 3. Arrange card function
// // - click - easy/med/hard

// // 4. Flip card function
// // - click - card flip

// // 5. Check match/equiality function
// // - IF INCORRECT, flip back over
// // - remove click - card flip (IF MATCHED)

// // 6. MODAL play again function
// // - click - play button

// // 7. Render to leaderboard IF IN TOP 10
// // --- congratulations notification
// // --- sort scores from HIGH/LOW

// let moves = 0;
// moves++;

let incorrect = document.getElementById('incorrect');
let cardContainer = document.getElementById('card-container');
const cards = document.getElementsByClassName('cards');
let deck = [];
let board = [];

function Card(name) {
  this.name = name;
  this.src = `img/${name}.png`;
  deck.push(this);
}
new Card('allosaurus');
new Card('ankylosaurus');
new Card('ceratosaurus');
new Card('dinosaurs-1');
new Card('dinosaurs');
new Card('diplodocus');
new Card('egg');
new Card('elasmosaurus');
new Card('gallimimus');
new Card('guanlong');
new Card('ichthyosaurus');
new Card('indominus-rex');
new Card('island');
new Card('kentrosaurus');
new Card('meat');
new Card('metriacanthosaurus');
new Card('microceratus');
new Card('mosasaurus');
new Card('ouranosaurus');
new Card('pachycephalosaurus');
new Card('palm-tree');
new Card('parasaurolophus-1');
new Card('parasaurolophus');
new Card('phuwiangosaurus');
new Card('plesiosaurus');
new Card('pliosaurus');
new Card('pterosaurus');
new Card('spinosaurus');
new Card('stegosaurus');
new Card('styracosaurus');
new Card('suchomimus');
new Card('triceratops');
new Card('troodon');
new Card('tyrannosaurus-rex');
new Card('velociraptor');
new Card('volcano');

function filledBoard() {
  for (let i = 0; i < 12; i++) {
    board.push(deck[i]);
    board.push(deck[i]);
  }
}

function shuffle() {
  return Math.floor(Math.random() * board.length);
}

let randomArray = [];
function deckShuffler() {
  while (randomArray.length < board.length) {
    let cardRandom = shuffle();
    while (!randomArray.includes(cardRandom)) {
      randomArray.push(cardRandom);
    }
  }
}

function renderCards() {
  for (let i = 0; i < randomArray.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src', '../img/grey.png');
    card.setAttribute('class', 'cards');
    card.setAttribute('id', i);
    card.setAttribute('alt', `${board[randomArray[i]].
      src}`);
    cardContainer.appendChild(card);
  }
}

//checking for matched cards
function cardSelected() {
  let cardOne, cardTwo, cardOneAlt, cardTwoAlt;
  let clicks = 0;
  cardContainer.addEventListener('click', function (e) {
    if (e.target.alt !== undefined) {
      clicks++;
      if (clicks === 1) {
        cardOne = e.target;
        cardOneAlt = e.target.alt;
        e.target.classList.toggle('flip');
        e.target.src = board[randomArray[+e.target.id]].src;
      } else if (clicks === 2) {
        cardTwo = e.target;
        cardTwoAlt = e.target.alt;
        e.target.classList.toggle('flip');
        e.target.src = board[randomArray[+e.target.id]].src;
      }
      console.log(cardOne, cardTwo);
      if (cardOneAlt === cardTwoAlt) {
        console.log('the cards match');
        clicks = 0;
        cardOne = null;
        cardOneAlt = null;
        cardTwoAlt = null;
        return cardTwo = null;
      } else if (cardOneAlt !== cardTwoAlt && clicks === 2) {
        // cardOne.setAttribute('class', 'incorrect cards');
        cardOne.classList.toggle('incorrect');
        incorrect.setAttribute('style', 'background-color: red; font-size: 100px'); // cardOne.classList.add('incorrect-animation');
        incorrect.textContent = 'incorrect';
        setTimeout(() => {
          // cardOne.classList.setAttribute('class', 'cards');
          cardOne.classList.remove('incorrect');
          cardOne.classList.toggle('flip');
          incorrect.setAttribute('style', ''); // incorrect.classList.remove('incorrect-animation');
          incorrect.textContent = '';
          cardOne.src = '../img/grey.png';
          cardTwo.classList.toggle('flip');
          cardTwo.src = '../img/grey.png';
          console.log('no match');
          clicks = 0;
          cardOne = null;
          cardOneAlt = null;
          cardTwoAlt = null;
          return cardTwo = null;
        }, 1500);
      }
    }
  });
}

// function myFunction() {
// var x = document.getElementById('cards');
// if (x.style.display === 'none') {
// x.style.display = 'block';
// } else {
// x.style.display = 'none';
// }
// }

console.log(cards);
filledBoard();
deckShuffler();
renderCards();
cardSelected();
// myFunction();


console.log(deck);
console.log(board);
console.log(randomArray);

//function gameTimer();


// 


// Start by assigning properties. Google Sort Array JS MDN, find the one that sorts based on object properties