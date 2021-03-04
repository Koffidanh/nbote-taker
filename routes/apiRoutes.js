module.exports = (app) => {
  //
  const fs = require('fs');
  // 
  let pastNotes = [];
  
  //Calling module unique identifier
  const generateUUId = require('unique-identifier');
  // Get Api notes to read json
  app.get('/api/notes', (req, res) => {
    pastNotes = fs.readFileSync('./db/db.json', 'utf8')
    console.log(pastNotes)
    var note = req.body
    console.log(note)
    note.id = generateUUId()
   return res.json(JSON.parse(pastNotes))
   

  })


  //Post api notes
  app.post('/api/notes', (req, res) => {
    pastNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
    //console.log(pastNotes)

    var note = req.body
    console.log(note)
    note.id = generateUUId()
    //res.json(pastNotes)
    //const noteTitle = req.body.title;
    //const noteText = req.body.text;
   
    pastNotes.push(note) 
    // appendFile() to db.json
    fs.writeFileSync('db.json',JSON.stringify(pastNotes), (err) =>

      err ? console.error(err) : console.log('Commit logged!')
    );

    //res.json(pastNotes)
    //res.json(JSON.stringify(pastNotes))
    return res.json(JSON.parse(pastNotes))
    
   //res.redirect(`/notes?id=${note.Id}&title=${note.title}&text=${note.text}`)
    
  });
  //
  // app.get('/api/notes/:node.id', (req, res) => {
  //   res.json(NewPastNotes[req.params.note.id])
  // })
};
