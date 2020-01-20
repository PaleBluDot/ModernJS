// __INIT Github
const github = new Github();

// __INIT UI
const ui = new UI();

// __Searcg input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', function(e) {
	// __Get input test
	const userText = e.target.value;

	if (userText !== '') {
		github.getUser(userText).then(data => {
			if (data.profile.message === 'Not Found') {
				// __Show alert
				setTimeout(() => {
					ui.showAlert('User not found', 'alert alert-danger');
				}, 500);
			} else {
				// __Show profile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
	} else {
		// __Clear profile
		ui.clearProfile();
	}
});
