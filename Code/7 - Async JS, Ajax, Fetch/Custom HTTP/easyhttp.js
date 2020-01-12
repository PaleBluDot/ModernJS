function easyHTTP() {
	this.http = new XMLHttpRequest();
}

// __Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
	this.http.open('GET', url, true);

	let self = this;
	this.http.onload = function() {
		if (self.http.status === 200) {
			callback(null, self.http.responseText);
		} else {
			callback('Error: ' + self.http.status);
		}
	};

	this.http.send();
};

// __Make an HTTP POST Request

// __Make an HTTP PUT Request

// __Make an HTTP DELETE Request
