var db = require('./db');

module.exports.handleSignUp = (email, password) => {
    //Check email already exists
    //Save the user to database
    db.saveUser({email,password});
    //Send the welcome message
};