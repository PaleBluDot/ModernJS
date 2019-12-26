

if(something) {
	do something
	} else {
	do something else
	}

const id = 100;

// Equal to
if (id == 101) {

} else {

}

// Not Equeal to
if (id != 101) {

} else {

}

const id = '100';

if (id === 100) {

} else {

}

// Not qqual to value and type
if (id !== 100) {

} else {

}

// Equal to value and type
if (typeof id !== 'undefined') {

} else {

}

const id = '100';

// Greater or less than
if (id > 200) {

} else {

}

if (id < 200) {

} else {

}

if (id <= 100) {

} else {

}


const color = 'yellow';

// If else
if (color == 'red') {

} else if (color == 'blue') {

} else {

}

const name = 'Steve';
const age = 4;

// Logical operators
if (age > 0 && age < 12) {

} else if (age >= 13 && age <= 19) {

} else {

}

const name = 'Steve';
const age = 4;

if (age > 16 || age < 65) {

} else {

}


const id = 100;

// Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

const id = 100;

// Without braces
if (id === 100)
console.log('Correct');
else
console.log('Incorrect');


const color = 'yellow';

switch (color) {

}

// Function declarations
function greet() {

	return 'hello'
	}

	greet(); // wrap in console.log(); to show in console

// Function declarations
function greet(firstName, lastName) {

}

console.log(greet('John', 'Doe'));

// Function declarations
function greet(firstName = 'John', lastName = 'Doe') {

}

console.log(greet('Steve', 'Smith'));

// Function expression
const square = function(x) {
	return x * x;
	};

	console.log(square(8));

// Property method
const todo = {

};

todo.delete = function() {

};

todo.add();
todo.edit(22);
todo.delete();

// For Loop
for (let i = 0; i < 10; i++) {
	if(i === 2) {
	  console.log('2 is my favorite number');
	  continue;
	}

	if(i === 5) {
	  console.log('Stop the loop');
	  break;
	}
	console.log('Number ' + i);
  }

// While Loop
let i = 0;

while(i < 10) {
  console.log('Number ' + i);
  i++;
}

// Do While Loop
let i = 0;
do{
  console.log('Number ' + i);
  i++;
}

while(i <10);

// Loop Through Array
const cars = ['Ford', 'Chevy', 'Honda', 'Dodge', 'Nissan'];

for(let i = 0; i <cars.length; i++) {
  console.log(cars[i]);
}

// ForEach Array Loop
const cars = ['Ford', 'Chevy', 'Honda', 'Dodge', 'Nissan'];

cars.forEach(function(car){
	console.log(car);
});

// MAP
const users = [
	{id: 1, name:'John'},
	{id: 2, name:'Wayne'},
	{id: 3, name:'Chump'},
	{id: 4, name:'Steve'}
];

const ids = users.map(function(user){
	return user.id;
});

console.log(ids)

// FOR IN
const user = {
	firstName: 'Pavel',
	lastName:'Sanchez',
	age: 33
}

for(let x in user){
	console.log(user[x]);
}

window.alert('Hello World');

const input = prompt();
alert(input);

if(confirm("Are you sure")){
	console.log('Yes');
}else {
	console.log('No');
}

// * Window Methods, Objects, and Properties
let val;

val = window.outerHeight;
val = window.outerWidth;
val = window.innerHeight;
val = window.innerWidth;

val = window.scrollY;
val = window.scrollX;

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;
// val = window.location.href = 'https://pavelsanchez.com';
// val = window.location.reload();
val = window.location;


val = window.history.go(-3);
val = window.history.length;


val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);

// * GLOBAL SCOPE

var a = 1;
let b = 2;
const c = 3;

function test() {
	var a = 4;
	let b = 5;
	const c = 6;
	console.log('Function:', a, b, c);
}

test();

if(true) {
	var a = 4;
	let b = 5;
	const c = 6;
	console.log('If Scope:', a, b, c);
}

for(let a = 0; a < 10; a++){
	console.log(`Loop: ${a}`);
}

console.log('Global Scope:', a, b, c);