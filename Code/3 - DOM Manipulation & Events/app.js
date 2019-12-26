// // ! INITINALIZE VARIABLE
// let val;
// let scripts = document.scripts;
// let scriptsArray = Array.from(scripts);

// // * DOCUMENT
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// // * CAN BE USED AS A SELECTOR BUT NOT RECOMENDED
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// // * lINKS
// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];

// // * IMAGES
// val = document.images;

// // * SCRIPTS
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// // scripts.forEach(function(script) {
// // 	console.log(script);
// // }); //? Cant use forEach in this case

// scriptsArray.forEach(function(script) {
// 	console.log(script.getAttribute('src'));
// });

// // ! LOG TO CONSOLE
// console.log(val);

// let taskTitle = document.getElementById('task-title');

// // * Get Things from element
// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// // * CHANGE STYLING
// taskTitle.style.background = 'teal';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// // * CHANGE CONTENT
// taskTitle.textContent = 'Task';
// taskTitle.innerText = 'My Task';
// taskTitle.innerHTML = '<span>The Tasks</span>';

// // * QUERY SElECTOR
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'pink';
// document.querySelector('li:last-child').style.color = 'blue';
// document.querySelector('li:nth-child(3)').style.color = 'coral';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';

// // //! MULTIPLE SELECTOS
// // const items = document.getElementsByClassName('collection-item');
// // console.log(items);
// // console.log(items[2]);
// // items[1].style.color = 'pink';

// // const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// // console.log(listItems);

// // * Tag Names
// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[1].style.color = 'pink';

// // * QUERY SELECTOR ALL
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index) {
// 	item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index) {
// 	li.style.background = 'pink';
// });

// for (let i = 0; i < liEven.length; i++) {
// 	liEven[i].style.background = 'coral';
// }

// console.log(items);

// // ! Traversing The DOM
// let val;
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item');

// val = list;
// val = listItem;

// // * GET CHILD NODE
// val = list.childNodes;
// val = list.children;

// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// // First child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

// // ! Creating Element
// const li = document.createElement('li');

// li.className = 'collection-item';
// li.id = 'collection';
// li.setAttribute('title', 'New Item');
// li.appendChild(document.createTextNode('hello world'));

// document.querySelector('ul.collection').appendChild(li);

// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';
// li.appendChild(link);

// console.log(li);

// // * Create Element
// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));

// // * Replace Element
// const oldHeading = document.getElementById('task-title');
// const cardAction = document.querySelector('.card-action');
// cardAction.replaceChild(newHeading, oldHeading);

// // * Remove Element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');
// lis[0].remove();
// list.removeChild(lis[3]);

// // * Classes
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];
// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[1];
// val = link.classList.add('test');
// val = link.classList.remove('test');
// val = link;

// // * Attrributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'https:pavelsanchez.com');
// val = link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// val = link.removeAttribute('title');
// val = link;

// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
// 	console.log('Hello World');

// 	e.preventDefault(); // ! prevents default browser behavior
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
// 	e.preventDefault();
// 	let val;
// 	val = e;
// 	val = e.target;
// 	val = e.target.id;
// 	val = e.target.className;
// 	val = e.target.classList;

// 	e.target.innerText = 'Sike';

// 	val = e.type;
// 	val = e.timeStamp;
// 	val = e.clientY;
// 	val = e.clientX;
// 	val = e.offsetY;
// 	val = e.offsetX;

// 	console.log(val);
// }

// // ! Mouse Event
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);
// card.addEventListener('mousemove', runEvent);

// // * Event Handler
// function runEvent(e) {
// 	e.preventDefault();
// 	console.log(`EVENT TYPE: ${e.type}`);

// 	heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
// 	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// // ! Keyboard & Inputs
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// taskInput.value = '';
// form.addEventListener('submit', runEvent);

// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('copy', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);

// function runEvent(e) {
// 	e.preventDefault();
// 	console.log(`EVENT TYPE: ${e.type}`);
// 	console.log(taskInput.value);
// 	heading.innerText = e.target.value;
// 	console.log(e.target.value);
// }

// // * EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', function() {
// 	console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function() {
// 	console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function() {
// 	console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
// 	console.log('col');
// });

// // * EVENT DELGATION
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
// 	if (e.target.parentElement.className === 'delete-item') {
// 		console.log('delete item');
// 	}

// 	if (e.target.parentElement.classList.contains('delete-item')) {
// 		console.log('delete item');
// 		e.target.parentElement.parentElement.remove();
// 	}
// }

// // * ADD TO STORAGE
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// sessionStorage.setItem('name', 'Jimmy');

// // * REMOVE FROM STORAGE
// // localStorage.removeItem('name');

// // * GET FROM STORAGE
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // * CLEAR THE STORAGE
// localStorage.clear();

// console.log(name, age);

// document.querySelector('form').addEventListener('submit', function(e) {
// 	const task = document.getElementById('task').value;
// 	let tasks;

// 	if (localStorage.getItem('tasks') === null) {
// 		tasks = [];
// 	} else {
// 		tasks = JSON.parse(localStorage.getItem('tasks'));
// 	}

// 	tasks.push(task);

// 	localStorage.setItem('tasks', JSON.stringify(tasks));

// 	alert(`${task} task was saved`);

// 	console.log(task);
// 	e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task) {
// 	console.log(task);
// });
