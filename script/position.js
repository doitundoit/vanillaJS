function setup() {
	noCanvas();

	let boxes = selectAll('li');

	for (const li of boxes) {
		li.position(
			random(0, windowWidth - li.width),
			random(0, windowHeight - li.height)
		);
	}

	const taskForm = document.querySelector('.js-task');
	taskForm.addEventListener('submit', function (event) {
		event.preventDefault();
		// boxes[boxes.length + 1].position(
		// 	random(0, windowWidth - li.width),
		// 	random(0, windowHeight - li.height)
		// );
	});
}
