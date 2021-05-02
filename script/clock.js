const clock = document.querySelector('.js-clock');

function loadDate() {
	const date = new Date();
	const s = date.getSeconds();
	const m = date.getMinutes();
	const h = date.getHours();
	const d = date.toDateString();

	clock.innerText = `📆${d} \u00A0⏱${h < 10 ? `0${h}` : h}:${
		m < 10 ? `0${m}` : m
	}:${s < 10 ? `0${s}` : s}`;
}

function init() {
	setInterval(loadDate, 1000);
}

init();
