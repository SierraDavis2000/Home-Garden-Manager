const fs = require("fs");
const util = require("util");

//npm package to create note ids
const uuid = require ('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: attach pathway to db here 
const apiData = 

class notes {
    readNotes() {
        return readFileAsync(apiData, "UTF8");
    }
    construct(note){
        return writeFileAsync (apiData, JSON.stringify(note))
    }
    appendNote(note) {
        const {title, text} = note

        const newNote = { title, text, id: uuid.v4() }

        return this.retrieveNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.construct(updatedNotes))
        .then(() => this.newNote)
    }
    retrieveNotes() {
        return this.readNotes()
            .then(notes => {
                return JSON.parse(notes) || [];
            })
    }
    deleteNote(){
        return writeFileAsync(apiData, JSON.stringify(data, null, "\t"));
    }
}
module.exports = new notes();