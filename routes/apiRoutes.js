const notes = require('express').Router();
const fs = require('fs');

// Used to create unique id for new nontes
const { v4: uuidv4 } = require('uuid');

// GET route for reading db.json
notes.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const dbData = JSON.parse(data);

        res.send(dbData)
    })
});

// POST route for creating a newNote and adding it to db.json
notes.post('/api/notes', (req, res) => {

    // newNote object
    let newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text,
    };

    // Read db.json using fs
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;

        const dbData = JSON.parse(data);

        // Push new note to db.json
        dbData.push(newNote);
        console.log(dbData);

        stringData = JSON.stringify(dbData);


        // Write data to db.json
        fs.writeFile('./db/db.json', stringData, (err) => {
            if (err) throw err;
        });
    });

    res.send('New note sucessfully added! 🗒️');
});

//BONUS -- DELETE route to delete notes by id
// 1. readFile 
// 2. Remove note with given id property
// 3. writeFile to db.json with updated array of notes
notes.delete('/api/notes/:id', (req, res) => {
    res.send('')
  })

module.exports = notes;