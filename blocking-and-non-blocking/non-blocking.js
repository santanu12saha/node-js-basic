console.log('Starting Non-Blocking I/O app');

var user = require('./getUser');

user.getUser(123, (user1) => {
    console.log(`user1 ${JSON.stringify(user1)}`);
});

user.getUser(321, (user2) => {
    console.log(`user2 ${JSON.stringify(user2)}`);
})

var sum = 1 + 2;
console.log(`The sum is ${sum}`);

console.log('Finishing Non-Blocking I/O app');