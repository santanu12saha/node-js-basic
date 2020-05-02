console.log('Starting Blocking I/O app');

var user = require('./getUser');

var user1 = user.getUserSync('123');
console.log(`user1 ${JSON.stringify(user1)}`);

var user2 = user.getUserSync('321');
console.log(`user2 ${JSON.stringify(user2)}`);

var sum = 1 + 2;
console.log(`The sum is ${sum}`);

console.log('Finishing Blocking I/O app');
