const express = require('express'); 
const router = require('express').Router();

//npm package to create log ids
const uuid = require ('uuid');
// create link to waterlog database
const notes = require('../db/notes');


//route to db

router.get('/api/logs', (req, res) => {
    notes
        .retrieveNotes()
        .then(notes => {
            res.json(notes)
        })
        
})

router.post("/api/logs", (req, res) => {
    console.log(req.body)
    notes
        .appendNote(req.body)
        .then(note => {
            res.json(note)
         })
    
})
router.delete("/api/logs/:id", (req, res) => {

    const noteToDelete = req.params.id;
    const currentNotes = notes.readNotes();
    const newNoteData = currentNotes.filter((note) => note.id !== noteToDelete);
    notes.deleteNote(newNoteData);
    return res.send(newNoteData);
  });

module.exports = router;