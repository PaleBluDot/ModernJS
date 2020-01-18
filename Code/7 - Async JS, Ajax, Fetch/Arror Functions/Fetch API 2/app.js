const getText = document.getElementById('button1');
const getJson = document.getElementById('button2');
const getApi = document.getElementById('button3');
const output = document.getElementById('output');

// __GET: Text
getText.addEventListener('click', e => {
	e.preventDefault();
	console.log('Text');

	fetch('test.txt')
		.then(res => res.text())
		.then(data => (output.innerHTML = data))
		.catch(err => console.log(err));
});

// __GET: JSON
getJson.addEventListener('click', e => {
	e.preventDefault();
	console.log('JSON');

	fetch('posts.json')
		.then(res => res.json())
		.then(data => {
			let dataOut = '';
			data.forEach(post => {
				dataOut += `
					<h3>${post.title}</h3>
					<p>${post.body}</p>

				`;
			});

			output.innerHTML = dataOut;
		})
		.catch(err => console.log(err));
});

// __GET: API
getApi.addEventListener('click', e => {
	e.preventDefault();
	console.log('API');

	fetch('https://api.github.com/users')
		.then(res => res.json())
		.then(data => {
			let dataOut = '';
			data.forEach(user => {
				dataOut += `
					<p><strong>${user.login}</strong><br />
					<a href="${user.html_url}">${user.html_url}</a></p>
				`;
			});

			output.innerHTML = dataOut;
		})
		.catch(err => console.log(err));
});
