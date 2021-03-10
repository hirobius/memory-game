'use strict';

// let tries/moves = [];
// let resetButton;
// let congratulations = document.getElementById;
// let tries = 0;
// tries++;
// function gameTimer();
// insert method / set timeout to disable flip "cheating"

// LEADERBOARD

// let topTenEasy = [];
// let topTenMedium = [];
// let topTenHard = [];

// let topPlayer = document.getElementById('leaderboard');
// for (let i = 0; i < allPlayers.length; i++) {
//   let child = document.createElement('li');
//   let currentPlayer = allPlayers[i];
//   child.textContent = currentPlayer.name;
//   topPlayer.appendChild(child);
// }
// function topTenSorter(playerOne, playerTwo) {
//   if (playerOne.tries > playerTwo.tries) {
//     return -1;
//   }
//   if (playerOne.tries < playerTwo.tries) {
//     return 1;
//   }
//   if (playerOne.tries === playerTwo.tries) {
//     return 0;
//   }
// };
// topTenSorter();

let difficulty = document.getElementById('difficulty');
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

function easyBoard() {
  board = [];
  for (let i = 0; i < 8; i++) {
    board.push(deck[i]);
    board.push(deck[i]);
  }
}

function mediumBoard() {

  board = [];
  for (let i = 0; i < 12; i++) {
    board.push(deck[i]);
    board.push(deck[i]);
  }
}

function hardBoard() {
  board = [];
  for (let i = 0; i < 18; i++) {
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
        // cardOne.classList.toggle('incorrect');
        incorrect.setAttribute('style', 'text-align: center'); // cardOne.classList.add('incorrect-animation');
        incorrect.textContent = 'incorrect';
        setTimeout(() => {
          // cardOne.classList.setAttribute('class', 'cards');
          // cardOne.classList.remove('incorrect');
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

function populate(){
  deckShuffler();
  renderCards();
  cardSelected();
}

window.onload = function () {
  let main = document.createElement('main');
  mediumBoard();
  populate();
  main.setAttribute('class', 'loaded');
};

difficulty.addEventListener('click', function (e) {
  let difficultyChosen = e.target.textContent;
  if (difficultyChosen === 'Easy') {
    easyBoard();
    populate();
  } else if (difficultyChosen === 'Medium') {
    mediumBoard();
    populate();
  } else if (difficultyChosen === 'Hard') {
    hardBoard();
    populate();
  }
});
