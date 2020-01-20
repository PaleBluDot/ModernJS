class Weather {
	constructor(city, state) {
		this.apiKey = '15d44e30b237dd357345d674a1de9a77';
		this.city = city;
		this.state = state;
	}

	async getWeather() {
		const response = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&&units=imperial`
		);

		const responseData = await response.json();
		return responseData;
	}

	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}
