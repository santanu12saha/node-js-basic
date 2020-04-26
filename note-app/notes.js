const fs = require('fs');
const saveNoteFileName = 'notes-data.json';

var fetchNotes = () => {
    
    // this try catch block help to support both file not found and Json parse exception
    try{
        var notesString = fs.readFileSync(saveNoteFileName);
        return JSON.parse(notesString);
    }catch(error){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync(saveNoteFileName, JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    //fetch Notes.
    var notes = fetchNotes();
    //filter notes, removing the one with the title of argument.
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array 
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    debugger;
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};