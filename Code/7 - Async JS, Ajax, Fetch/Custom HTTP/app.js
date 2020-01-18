const http = new easyHTTP();

// __GET: Multiple Post
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(posts);
// 	}
// });

// __GET: Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// __POST: Creat Data
const data = {
	title: 'Custom Post',
	body: 'This is a custom post',
};

// __POST: Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
// 	err,
// 	post
// ) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// __PUT: Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
// 	err,
// 	post
// ) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// __DELETE: Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(
	err,
	post
) {
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
});
