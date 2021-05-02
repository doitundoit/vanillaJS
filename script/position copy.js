// const boxes = document.querySelectorAll('li');
// const maxWidth = document.body.offsetWidth;
// const maxHeight = document.body.offsetHeight;

// function getRandom(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const randomWidth = getRandom(0, maxWidth);
// const randomHeight = getRandom(0, maxHeight);

// boxes[0].style.top = '100';
// console.log(boxes[0].style.position);

function setup() {
	noCanvas();
	const stringBoxes = localStorage.getItem('task');
	const boxes = JSON.parse(stringBoxes);
	console.log(boxes);

	// for (const obj of boxes) {
	// 	obj.position(
	// 		random(0, windowWidth - li.width),
	// 		random(0, windowHeight - li.height)
	// 	);
	// }

	// const taskForm = select('.js-form');
	// taskForm.addEventListener('submit', function (event) {
	//   const newBoxes =
	// 	event.preventDefault();
	// 	boxes = selectAll('li');
}

// boxes.forEach(function (element) {
// 	element.position(random(0, windowWidth), random(0, windowHeight));
// });
