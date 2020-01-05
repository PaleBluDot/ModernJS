// Book Constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book to List
UI.prototype.addBookToList = function(book) {
	const list = document.getElementById('book-list');

	// Create element
	const row = document.createElement('tr');

	// Instert Cols
	row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete">X</a></td>
	`;

	// Append to list
	list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function(message, className) {
	// Creat div
	const div = document.createElement('div');
	// Add classes
	div.className = `alert ${className}`;
	// Add Text
	div.appendChild(document.createTextNode(message));
	// Get Parent
	const container = document.querySelector('.container');
	const form = document.querySelector('#book-form');
	// Insert Alert
	container.insertBefore(div, form);

	// Timeout after 3 sec
	setTimeout(function() {
		document.querySelector('.alert').remove();
	}, 3000);
};

// Delete Book
UI.prototype.deleteBook = function(target) {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
};

// Clear Fields
UI.prototype.clearFields = function() {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
};

// Add Book Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
	// Get Values
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;

	// Instantiate Book
	const book = new Book(title, author, isbn);

	// Instantiate UI
	const ui = new UI();

	// Validate
	if (title === '' || author === '' || isbn === '') {
		// Error Alert
		ui.showAlert('Please fill all fields', 'error');
	} else {
		// Add book to list
		ui.addBookToList(book);

		// Show Sucess
		ui.showAlert('Book added!', 'success');

		// Clear Fields
		ui.clearFields();
	}

	e.preventDefault();
});

// Delete Event Listerner
document.getElementById('book-list').addEventListener('click', function(e) {
	// Instantiate UI
	const ui = new UI();

	// Delete book from list
	ui.deleteBook(e.target);

	// Show Sucess
	ui.showAlert('Book removed!', 'success');

	e.preventDefault();
});
