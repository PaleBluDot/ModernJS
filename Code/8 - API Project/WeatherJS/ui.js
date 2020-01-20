class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.temp = document.getElementById('w-string');
		this.humidity = document.getElementById('w-humidity');
		this.feelsLike = document.getElementById('w-feels-like');
		this.clouds = document.getElementById('w-dewpoint');
		this.wind = document.getElementById('w-wind');
		this.details = document.getElementById('w-details');
		this.icon = document.getElementById('w-icon');
	}

	paint(weather) {
		this.location.textContent = weather.name + ', ' + weather.sys.country;
		this.desc.textContent = weather.weather[0].description;
		this.temp.textContent = `${weather.main.temp} \u00B0`;
		this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}\u0025`;
		this.clouds.textContent = `Clouds: ${weather.clouds.all}`;
		this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} \u00B0`;
		this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
		this.icon.setAttribute(
			'src',
			`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
		);
	}
}
