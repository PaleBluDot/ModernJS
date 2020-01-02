// Person constructor
// !Constuctor name should start with a capital
function Person(name, dob) {
	this.name = name;
	this.birthday = new Date(dob);
	this.calculateAge = function() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
}

// const brad = new Person('brad', 36);
// const john = new Person('John', 30);
const brad = new Person('Brad', '9-10-1981');

console.log(brad.calculateAge());

// * String
const name1 = 'Jeff';
const name2 = new String('Jeff'); // !Dont see this much

console.log(name1);

// name2.foo = 'bar';
// console.log(typeof name2);

if (name2 === 'Jeff') {
	console.log('Yes');
} else {
	console.log('No');
}

// * Number
const num1 = 5;
const num2 = new Number(10); // !Dont see this much

console.log(num1);

// * Boolean
const bool1 = true;
const bool2 = new Boolean(false); // !Dont see this much

console.log(bool1);

// * Functions
const getSum1 = function(x, y) {
	return x + y;
};

const getSum2 = new Function('x', 'y', 'return 1 + 1'); // !Dont see this much

console.log(getSum1(4, 2));

// * Objects
const john1 = { name: 'John' };
const john2 = new Object({ name: 'Johnny' }); // !Dont see this much

console.log(john1);

// * Arrays
const array1 = [1, 2, 3, 4];
const array2 = new Array([5, 6, 7, 8]); // !Dont see this much

console.log(array1);

// * Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+'); // !Dont see this much

console.log(re1);

// * Object.protoype

// Person constructor
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = new Date(dob);
	// this.calculateAge = function() {
	// 	const diff = Date.now() - this.birthday.getTime();
	// 	const ageDate = new Date(diff);
	// 	return Math.abs(ageDate.getUTCFullYear() - 1970);
	// };
}

// calculate Age
Person.prototype.calculateAge = function() {
	const diff = Date.now() - this.birthday.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get Full Name
Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
	this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '11-17-1985');
const mary = new Person('Mary', 'Doe', 'April 20, 1987');

console.log(mary);
console.log(mary.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());
console.log(mary.hasOwnProperty('firstName'));

// Person constructor
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
	return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
	Person.call(this, firstName, lastName);

	this.phone = phone;
	this.membership = membership;
}

// Inherite the Person protoype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return customer
Customer.prototype.constructor = Customer;

// Create a customer
const customer1 = new Customer('Pavel', 'Sanchez', '347-555-5555', 'Standard');

console.log(customer1);

// Customer Greeting
Customer.prototype.greeting = function() {
	return `Hello there, ${this.firstName} ${this.lastName}. Welcome to our company`;
};

console.log(customer1.greeting());

const personPrototypes = {
	greeting: function() {
		return `Hello there, ${this.firstName} ${this.lastName}!`;
	},
	getsMarried: function(newLastName) {
		this.lastName = newLastName;
	},
};

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Johnson';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
	firstName: { value: 'Brad' },
	lastName: { value: 'Traversy' },
	age: { value: '36' },
});

console.log(brad.greeting());

class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}

	greeting() {
		return `Hello there, ${this.firstName} ${this.lastName}!`;
	}

	calculateAge() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	getsMarried(newLastName) {
		this.lastName = newLastName;
	}

	static addNumber(x, y) {
		return x + y;
	}
}

const mary = new Person('Mary', 'Williams', '11/13/80');

console.log(mary);
mary.getsMarried('Thompson');
console.log(mary.greeting());
console.log(mary.calculateAge());

console.log(Person.addNumber(1, 2));

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greeting() {
		return `Hello there, ${this.firstName} ${this.lastName}!`;
	}
}

class Customer extends Person {
	constructor(firstName, lastName, phone, membership) {
		super(firstName, lastName);
		this.phone = phone;
		this.membership = membership;
	}

	static getMembershipCost() {
		return 500;
	}
}

const john = new Customer('John', 'Doe', '347-555-5555', 'Standard');

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());
