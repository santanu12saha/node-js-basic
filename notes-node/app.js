console.log('Staring app.');

const fs = require('fs');

fs.appendFile('greetings.txt', 'Hello world!', err => {
    if(err){
        console.log('Unable to write to files.');
    }
});