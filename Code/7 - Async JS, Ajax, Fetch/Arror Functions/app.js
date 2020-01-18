// __Regular function
// const sayHello = function() {
// 	console.log('Hello');
// };

// __Code block arrow function
// const sayHello = () => {
// 	console.log('Hello');
// };

// __One line arrow function does not need braces
// const sayHello = () => console.log('hello');

// __One line returns
// const sayHello = () => 'hello';

// __Same output as above
// const sayHello = function() {
// 	return 'hello';
// };

// __Return an onject literal
// const sayHello = () => ({ msg: 'hello' });

// __Single Parameters does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// __Multiple Parameters need parenthesis
// const sayHello = (firstName, lastName) =>
// 	console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Pavel', 'Sanchez');

// __Array of users
const users = ['Nathan', 'John', 'Will'];
// const nameLengths = users.map(function(name) {
// 	return name.length;
// });

// __Shorter
// const nameLengths = users.map(name => {
// 	return name.length;
// });

// __Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
