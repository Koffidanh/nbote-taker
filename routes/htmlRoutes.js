const path = require('path');

// ROUTING

module.exports = (app) => {

// res.send("Welcome to the  Page!")
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
// res.send("Welcome to the note Page!")
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
};