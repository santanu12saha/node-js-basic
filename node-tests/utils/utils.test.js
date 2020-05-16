const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44);
    expect(typeof res).toBe('number');
});

it('should async add two number', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7);
        expect(typeof sum).toBe('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9);
    expect(typeof res).toBe('number');
});

it('should async square a number', (done) => {
    utils.asyncSquare(5, (square) => {
        expect(square).toBe(25);
        expect(typeof square).toBe('number');
        done();
    });
});


it('should expect same value', () => {
    expect(12).toBe(12);
});

it('should expect same object', () => {
    expect({name: 'Santanu'}).toEqual({name: 'Santanu'});
});

it('should check element inside array', () => {
    expect([1,2,3]).toContain(1);
});

it('should check particular property from object', () => {
    expect({
        name: 'Santanu',
        age: 29
    }).toHaveProperty('age');
});

it('should check property and value from object', () => {
    expect({
        name: 'Santanu',
        age: 29
    }).toMatchObject({'age': 29});
});

it('should set firstName and lastName', () => {
    var user = {location: 'India', age: 30};
    var res = utils.setName(user, 'Santanu Saha');
    
    expect(res).toEqual(user);
    expect(res).toMatchObject({firstName: 'Santanu', lastName: 'Saha'});
    expect(res).toHaveProperty('firstName', 'Santanu');
});