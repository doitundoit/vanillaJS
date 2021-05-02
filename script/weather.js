const LOCATION_LS = 'location';
const API_KEY = '14a314e64b48a10c41fd5c0ef1d4a9cd';
const weathers = {
	Thunderstorm: '🌩',
	Drizzle: '🌧',
	Rain: '🌧',
	Snow: '☃️',
	Mist: '🌫',
	Smoke: '🌫',
	Haze: '🌫',
	Dust: '🌫',
	Fog: '🌫',
	Sand: '🌫',
	Dust: '🌫',
	Ash: '🌫',
	Squall: '🌫',
	Tornado: '🌫',
	Clear: '☀️',
	Clouds: '☁️',
};

function getWeather(lat, lon) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			const area = json.name;
			const temperature = json.main.temp;
			const weather = json.weather[0].main;
			let icon;

			for (const property in weathers) {
				if (property === weather) {
					icon = weathers[property];
				}
			}

			const span = document.createElement('span');
			const body = document.querySelector('body');
			const clock = document.querySelector('time');
			const clockContainer = clock.parentNode;

			span.innerText = `🌏${area} \u00A0${icon}${weather} \u00A0🌡${temperature}℃`;
			span.classList.add('textbox');
			body.insertBefore(span, clockContainer);
		});
}

function savePosition(obj) {
	const locationString = JSON.stringify(obj);
	localStorage.setItem(LOCATION_LS, locationString);
	getWeather(obj.latitude, obj.longitude);
}

function failed(position) {
	console.log('fail to get current position');
}

function getPosition(position) {
	const locationObj = {
		latitude: position.coords.latitude,
		longitude: position.coords.longitude,
	};
	savePosition(locationObj);
}

function askWeather() {
	navigator.geolocation.getCurrentPosition(getPosition, failed);
}

function loadLocation() {
	const location = localStorage.getItem(LOCATION_LS);
	const parsedLocation = JSON.parse(location);

	if (location === null) {
		askWeather();
	} else {
		getWeather(parsedLocation.latitude, parsedLocation.longitude);
	}
}

function init() {
	loadLocation();
}

init();
