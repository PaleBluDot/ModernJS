const getText = document.getElementById('button1');
const getJson = document.getElementById('button2');
const getApi = document.getElementById('button3');
const output = document.getElementById('output');

// __GET: Text
getText.addEventListener('click', function(e) {
	e.preventDefault();
	console.log('Text');

	fetch('test.txt')
		.then(function(res) {
			return res.text();
		})
		.then(function(data) {
			output.innerHTML = data;
		})
		.catch(function(err) {
			console.log(err);
		});
});

// __GET: JSON
getJson.addEventListener('click', function(e) {
	e.preventDefault();
	console.log('JSON');

	fetch('posts.json')
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			let dataOut = '';
			data.forEach(function(post) {
				dataOut += `
					<h3>${post.title}</h3>
					<p>${post.body}</p>

				`;
			});

			output.innerHTML = dataOut;
		})
		.catch(function(err) {
			console.log(err);
		});
});

// __GET: API
getApi.addEventListener('click', function(e) {
	e.preventDefault();
	console.log('API');

	fetch('https://api.github.com/users')
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			let dataOut = '';
			data.forEach(function(user) {
				dataOut += `
					<p><strong>${user.login}</strong><br />
					<a href="${user.html_url}">${user.html_url}</a></p>
				`;
			});

			output.innerHTML = dataOut;
		})
		.catch(function(err) {
			console.log(err);
		});
});
