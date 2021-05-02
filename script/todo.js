const formTask = document.querySelector('.js-task');
const formInput = formTask.querySelector('input');
const ul = document.querySelector('ul');

const TASK_LS = 'task';
const colors = ['cyan', 'magenta', 'yellow'];
let taskList = [];

function removeTask(event) {
	const btn = event.target.parentNode;
	const li = btn.parentNode;
	const newTaskList = taskList.filter(function (element) {
		return element.id !== parseInt(li.id);
	});
	li.remove();
	taskList = newTaskList;
	saveTask();
}

function switchTask(event) {
	const li = event.target.parentNode;
	const task = taskList.find(function (element) {
		return element.id === parseInt(li.id);
	});
	task.isFinished = !task.isFinished;

	const span = li.childNodes[0];
	if (task.isFinished) {
		span.style.backgroundColor = 'lime';
		span.style.textDecoration = 'line-through';
	} else {
		const random = Math.floor(Math.random() * 3);
		span.style.backgroundColor = colors[random];
		span.style.textDecoration = 'none';
	}

	saveTask();
}

function saveTask() {
	const strTaskList = JSON.stringify(taskList);
	localStorage.setItem(TASK_LS, strTaskList);
}

function updateTask(text, boolean) {
	// 리스트 만들기
	const li = document.createElement('li');
	const span = document.createElement('span');
	const btn = document.createElement('button');
	const icon = document.createElement('img');

	span.classList.add('textbox');
	span.innerText = text;

	const random = Math.floor(Math.random() * 3);
	span.style.backgroundColor = colors[random];

	icon.src = '../img/icon.png';
	icon.classList.add('icon');
	li.id = taskList.length + 1;

	li.appendChild(span);
	btn.appendChild(icon);
	li.appendChild(btn);
	ul.appendChild(li);

	// 오브젝트로 저장
	const taskObj = {
		id: taskList.length + 1,
		text: text,
		isFinished: boolean,
	};

	taskList.push(taskObj);
	saveTask();

	btn.addEventListener('click', removeTask);
	span.addEventListener('click', switchTask);
}

function handleSubmit(event) {
	event.preventDefault();
	const text = formInput.value;
	updateTask(text, false);
	formInput.value = '';
}

function loadTask() {
	const task = localStorage.getItem(TASK_LS);
	const parsedTask = JSON.parse(task);

	if (task !== null) {
		parsedTask.forEach(function (element) {
			updateTask(element.text, element.isFinished);
		});
	}
}

function init() {
	formTask.addEventListener('submit', handleSubmit);
	loadTask();
}

init();
