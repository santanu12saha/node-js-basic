console.log('Staring app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);
console.log('Result: ', notes.add(9,-2));

var user = os.userInfo();

fs.appendFile('greetings-notes.txt', `Hello ${user.username}!. You are ${notes.age} older.\n`, err => {
    if(err){
        console.log('Unable to write to files.');
    }
});