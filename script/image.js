const body = document.querySelector('body');

function loadImage() {
	const img = new Image();
	const num = Math.floor(Math.random() * 10);

	img.src = `img/${num}.jpeg`;
	img.classList.add('bg');

	body.appendChild(img);
}

function init() {
	loadImage();
}

init();
