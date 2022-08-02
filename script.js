let diceEl = document.querySelector('.dice');
let scorePlayer0 = document.querySelector('#score--0');
let scorePlayer1 = document.querySelector('#score--1');

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let temp = 0;

let playing = true;

// init
diceEl.classList.add('hidden');
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;

const swap = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    randDice = Math.round(Math.random() * 5) + 1;
    console.log(randDice);
    if (randDice !== 1) {
      diceEl.src = `dice-${randDice}.png`;
      diceEl.classList.remove('hidden');
      currentScore += randDice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      if (score[activePlayer] + currentScore >= 20) {
        playing = false;
        score[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent =
          score[activePlayer];
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
      }
    } else {
      swap();
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    currentScore = 0;
    swap();
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  diceEl.classList.add('hidden');
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentScore = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  if (!document.querySelector(`.player--0`).classList.contains('player--active')) {
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
  }
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  score = [0, 0];
  playing = true;
  activePlayer=0
});
