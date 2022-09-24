const html = require('express').Router();
const path = require('path');

// GET route for notes page
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// Fallback route for when pathing issues occur
html.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


module.exports = html;