console.log('Starting notes.js');

module.exports.age = 25;

module.exports.addNote = () => {
    console.log('add Notes');
    return 'New Notes';
};

module.exports.add = (a, b) => {
    return a+b;
};