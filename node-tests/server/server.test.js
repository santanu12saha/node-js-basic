const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
             .get('/')
             .expect(200)
             .expect('Hello World!')
             .end(done);
        });
    });

    describe('GET /status', () => {
        it('should check response status code', (done) => {
            request(app)
             .get('/status')
             .expect(404)
             .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found.'
                });
             })
             .end(done);
        });
    });

    describe('GET /users', () => {
        it('should return user objects', (done) => {
            request(app)
             .get('/users')
             .expect(200)
             .expect((res) => {
                 expect(res.body).toInclude({
                     name: 'Santanu Saha',
                     age: 30
                 });
             })
             .end(done);
        });
    });
});