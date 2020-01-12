const http = new easyHTTP();

// __Get Post
http.get('https://jsonplaceholder.typicode.com/posts1', function(err, posts) {
	if (err) {
		console.log(err);
	} else {
		console.log(posts);
	}
});
