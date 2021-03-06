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

let cardContainer = document.getElementById('card-container');
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

function shuffle() {
  return Math.floor(Math.random() * board.length);
}
// let randomCard = shuffle();
let randomArray = [];
function deckShuffler() {
  while (randomArray.length < board.length) {
    let cardRandom = shuffle();
    while (!randomArray.includes(cardRandom)) {
      randomArray.push(cardRandom);
    }
  }
}
function filledBoard() {
  for (let i = 0; i < 12; i++) {
    board.push(deck[i]);
    board.push(deck[i]);
  }
  console.log(board);
}
filledBoard();
deckShuffler();

// const cards = document.querySelectorAll(‘.card’);
// let hasFlippedCard = false;
// let firstCard, secondCard;
// function flipcard() {
//   this.classList.add(‘flip’);
//   if (!hasFlippedCard) {
//     //first click
//     hasFlippedCard = true;
//     firstCard = this;
//   } else {
//     //second click
//     hasFlippedCard = false;
//     secondCard = this;
//     //do cards match?
//     if (firstCard.xxx.xxx === secondCard.xxx.xxx) {
//       //its a match
//       firstCard.removeEventListener(‘click’, flipcard);
//       secondCard.removeEventListener(‘click’, flipcard);
//     } else {
//       //its not a match
//       setTimeout(() => { }
//       firstCard.classList.remove(‘flip’);
//       secondCard.classList.remove(‘flip’);
//     }
//   }
// }
// board.forEach(card => card.addEventListener(‘click’, flipcard));
function renderCards() {
  for (let i = 0; i < randomArray.length; i++) {

    let card = document.createElement('img');
    card.setAttribute('src', `${board[randomArray[i]].src}`);
    card.setAttribute('class', 'cards');
    card.setAttribute('alt', `${board[randomArray[i]].src}`);
    cardContainer.appendChild(card);

  }

}
renderCards();
console.log(board);

// easy render

// medium render

// hard render
