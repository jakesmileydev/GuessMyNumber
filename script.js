'use strict';

// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Functions
const setMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

//// EVENT LISTENERS

// Check button - game functionality
document.querySelector('.check').addEventListener('click', function () {
	let guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		setMessage('You must enter a number!');
	} else if (guess !== secretNumber) {
		if (score > 1) {
			setMessage(guess > secretNumber ? 'Too high!' : 'Too low');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.score').textContent = 0;
			setMessage('💥 Game Over');
			document.querySelector('body').style.backgroundColor = '#ff0000';
		}
	} else if (guess === secretNumber) {
		setMessage('✨ Correct Number!');
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('.big-header').textContent = 'You Win!!!';

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
	}
});

// Again button - reset game
document.querySelector('.again').addEventListener('click', function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	document.querySelector('.score').textContent = score;
	document.querySelector('.guess').value = '';
	setMessage('Start guessing...');
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.big-header').textContent = 'Guess My Number!';
});
