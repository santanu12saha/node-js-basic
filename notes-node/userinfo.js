console.log('Getting user info app.');

const os = require('os');
const fs = require('fs');

var user = os.userInfo();

fs.appendFile('usergreeting.txt', `Hello ${user.username}!\n` , err => {
    if(err){
        console.log('Unable to write userinfo to files.');
    }
});
