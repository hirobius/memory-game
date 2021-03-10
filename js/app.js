'use strict';

let difficulty = document.getElementById('difficulty');
let incorrect = document.getElementById('incorrect');
let cardContainer = document.getElementById('card-container');
const cards = document.getElementsByClassName('cards');
let deck = [];
let board = [];
let timeLeftDisplay = document.getElementById('timer');
// let gameOverText = document.getElementById('game-over-text');
let ticker = document.getElementById('ticker');
let score = 0;
let timeLeft = 100;
let playerForm = document.getElementById('playername');
let allPlayers = JSON.parse(localStorage.getItem('players')) || [];
let playerName = '';

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


function timer() {
  setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timeLeft = 0);
      // gameOver();
    }
    timeLeftDisplay.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000);
}

function scoreCounter() {
  score += 1;
  ticker.innerHTML = score;
}

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
        audioController.flip();
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
        audioController.match();
        console.log('the cards match');
        scoreCounter();
        clicks = 0;
        cardOne = null;
        cardOneAlt = null;
        cardTwoAlt = null;
        return cardTwo = null;
      } else if (cardOneAlt !== cardTwoAlt && clicks === 2) {
        audioController.noMatch();
        // cardOne.setAttribute('class', 'incorrect cards');
        // cardOne.classList.toggle('incorrect');
        incorrect.setAttribute('style', 'text-align: center'); // cardOne.cla
        ('incorrect-animation');
        incorrect.textContent = 'incorrect';
        setTimeout(() => {
          // cardOne.classList.setAttribute('class', 'cards');
          // cardOne.classList.remove('incorrect');
          cardOne.classList.toggle('flip');
          incorrect.setAttribute('style', ''); // incorrect.classList.remove
          ('incorrect-animation');
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

function populate() {
  deckShuffler();
  renderCards();
  cardSelected();
}

// window.onload = function () {
// let main = document.createElement('main');
// mediumBoard();
// populate();
// main.setAttribute('class', 'loaded');
// };


/////// TO Do
// function gameOver() {
// audioController.gameOver();
// audioController.stopMusic();
// document.getElementById('game-over-text').classList.add('visibe');
// }


// We can pass the timer argument in this too
function Player(name, score) {
  this.name = name;
  this.score = score;
  // this.timer = timer;
  allPlayers.push(this);
}

function savePlayer() {
  new Player(playerName, score);
  localStorage.setItem('players', JSON.stringify(allPlayers));
}

function handleSubmit(event) {
  event.preventDefault();
  playerName = event.target.player.value;
  console.log(playerName);
  // move this function call to the place where score is final
  savePlayer();
}

function handleDiffculty(e){
  let difficultyChosen = e.target.textContent;
  if (difficultyChosen === 'Easy') {
    audioController.startMusic();
    timer();
    easyBoard();
    populate();
  } else if (difficultyChosen === 'Medium') {
    audioController.startMusic();
    timer();
    mediumBoard();
    populate();
  } else if (difficultyChosen === 'Hard') {
    audioController.startMusic();
    timer();
    hardBoard();
    populate();
  }
  difficulty.removeEventListener('click', handleDiffculty);
}


class AudioController {
  constructor() {
    this.backgroundMusic = new Audio('../music/bg2.mp3');
    this.flipSound = new Audio('../music/flip.wav');
    this.matchSound = new Audio('../music/right.wav');
    this.noMatchsound = new Audio('../music/wrong.wav');
    this.victorySound = new Audio('../music/victory.wav');
    this.gameOverSound = new Audio('../music/gameover.wav');
    this.backgroundMusic.volume = 1;
    this.flipSound.volume = 1;
    this.matchSound.volume = 1;
    // this.noMatchSound.volume = 1;
    // this.gameOverSound.volume = 1;
    // this.vitorySound.volume = 1;
    this.backgroundMusic.loop = true;
  }
  startMusic() {
    this.backgroundMusic.play();
  }
  stopMusic() {
    this.backgroundMusic.pause();
    this.backgroundMusic.currentTime = 0;
  }
  flip() {
    this.flipSound.play();
  }
  match() {
    this.matchSound.play();
  }
  noMatch() {
    this.noMatchsound.play();
  }
  victory() {
    this.stopMusic();
    this.victorySound.play();
  }
  gameOver() {
    this.stopMusic();
    this.gameOverSound.play();
  }
}

let audioController = new AudioController();

playerForm.addEventListener('submit', handleSubmit);
difficulty.addEventListener('click', handleDiffculty);



































































































































































































