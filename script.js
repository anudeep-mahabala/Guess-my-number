'use strict';
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const scoreMessage = document.querySelector('.score');
const again = document.querySelector('.again');
let score = 20;
let random = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
console.log(random);
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔ No number entered';
  } else if (guess === random) {
    number.textContent = random;
    message.textContent = '🎉 Congratulation you have found it';
    body.style.backgroundColor = 'green';
    console.log(score);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > random) {
    if (score > 1) {
      message.textContent = '📈 Too High';
      score--;
      scoreMessage.textContent = score;
    } else {
      checkscore();
    }
  } else if (guess < random) {
    if (score > 1) {
      message.textContent = '📉 Too Low';
      score--;
      scoreMessage.textContent = score;
    } else {
      checkscore();
    }
  }
});
again.addEventListener('click', function () {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start Guessing...';
  scoreMessage.textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  console.log(random);
  body.style.backgroundColor = '#222';
});
function checkscore() {
  message.textContent = 'You lost the game';
  scoreMessage.textContent = 0;
}
