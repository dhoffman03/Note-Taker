const html = require('express').Router();
const path = require('path');

// GET route for notes page
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// GET route for homepage
html.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


module.exports = html;