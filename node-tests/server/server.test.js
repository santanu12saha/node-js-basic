const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world response', (done) => {
    request(app)
     .get('/')
     .expect(200)
     .expect('Hello World!')
     .end(done);
});

it('should check response status code', (done) => {
    request(app)
     .get('/status')
     .expect(404)
     .expect((res) => {
        expect(res.body).toMatchObject({
            error: 'Page not found.'
        })
     })
     .end(done);
});

it('should return user objects', (done) => {
    request(app)
     .get('/users')
     .expect(200)
     .expect((res) => {
         expect(res.body).toEqual(expect.arrayContaining([{
             name: 'Santanu Saha',
             age: 30
         }]));
     })
     .end(done);
});


