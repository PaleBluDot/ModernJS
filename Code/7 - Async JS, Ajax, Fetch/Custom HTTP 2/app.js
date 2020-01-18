const http = new EasyHTTP();

// __GET Users
http.get('https://jsonplaceholder.typicode.com/users')
	.then(data => console.log('Got Data!', data))
	.catch(err => console.log(err));

// __User data
const data = {
	name: 'Pavel Sanchez',
	username: 'PaleBluDot',
	email: 'pavel@bluedot.dev',
};
// __Post data
const postData = {
	title: 'Updated Post',
	body: 'This post has now been updated by Pavel',
};

// __POST user
http.post('https://jsonplaceholder.typicode.com/users/', data)
	.then(data => console.log('Post Data!', data))
	.catch(err => console.log(err));

// __PUT post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
	.then(data => console.log('Updated Data!', data))
	.catch(err => console.log(err));

// __DELETE post
http.delete('https://jsonplaceholder.typicode.com/users/2')
	.then(data => console.log(data))
	.catch(err => console.log(err));
