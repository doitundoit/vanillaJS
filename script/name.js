const form = document.querySelector('.js-name');
const input = form.querySelector('input');
// const clockContainer = document.querySelector('.js-clock-container');

const USERNAME_LS = 'username';

function saveName(event) {
	event.preventDefault();
	localStorage.setItem(USERNAME_LS, input.value);
	printName(input.value);
	input.value = '';
}

function askForName() {
	form.addEventListener('submit', saveName);
}

function printName(username) {
	input.classList.add('hide');
	input.classList.remove('show');

	const span = document.createElement('span');
	const clock = document.querySelector('time');
	const clockContainer = clock.parentNode;

	span.innerText = `👤${username} \u00A0 `;
	span.classList.add('username');

	clockContainer.insertBefore(span, clock);
}

function loadName() {
	const username = localStorage.getItem(USERNAME_LS);

	if (username !== null) {
		printName(username);
	} else {
		input.classList.add('show');
		input.classList.remove('hide');
		askForName();
	}
}

function init() {
	loadName();
}

init();
