'use strict';

let allPlayers = JSON.parse(localStorage.getItem('players')) || [];
let scoreboard = document.getElementById('scoreboard');

allPlayers.push({
  name: 'Tony',
  score: 11,
});

allPlayers.push({
  name: 'John',
  score: 8,
});

allPlayers.sort(function(a, b) {
  return b.score - a.score;
});
console.log(allPlayers);

function renderLeaderBoard() {
  for (let i = 0; i < allPlayers.length; i++) {
    let li = document.createElement('li');
    console.log('I am here', allPlayers[i]);
    li.textContent = `${allPlayers[i].name}:  ${allPlayers[i].score}`;
    scoreboard.appendChild(li);
  }
}

renderLeaderBoard();

// console.log(allPlayers);

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