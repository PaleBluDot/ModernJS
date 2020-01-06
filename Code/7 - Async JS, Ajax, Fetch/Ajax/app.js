const output = document.getElementById('output');

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
	// Create an XHR Object
	const xhr = new XMLHttpRequest();

	// Open
	xhr.open('GET', 'data.txt', true);

	// Optional - used for spinners/loaders
	xhr.onprogress = function() {
		console.log('READYSTATE', xhr.readyState);
	};

	xhr.onload = function() {
		console.log('READYSTATE', xhr.readyState);
		if (this.status === 200) {
			output.innerHTML = `<h3>${this.responseText}</h3>`;
		}
	};

	xhr.onerror = function() {
		console.log('Request Error...');
	};

	xhr.send();
}
