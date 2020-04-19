console.log('Staring app.');

const fs = require('fs');
const _ = require('lodash');

//https://lodash.com/docs/#isString
console.log(_.isString(true));
console.log(_.isString('Santanu'));

// https://lodash.com/docs/#uniq
var filteredArray = _.uniq(['Santanu', 1, 'Santanu', 1, 2, 3, 4]);
console.log(filteredArray);

fs.appendFile('greetings.txt', 'Hello world!', err => {
    if(err){
        console.log('Unable to write to files.');
    }
});