const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Santanu', 25);
        expect(spy).toHaveBeenCalledWith('Santanu', 25);
    });

    it('should save saveUser with user object', () => {
        var email = 'santanu@gmail.com',
        password = '123abc';

        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});