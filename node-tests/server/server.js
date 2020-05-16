const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/status', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    })
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Santanu Saha',
            age: 30
        },
        {
            name: 'Tapasmita Saha',
            age: 28
        },
        {
            name: 'Papai Totai',
            age: 29
        }
    ]);
});

app.listen(3000);

module.exports.app = app;