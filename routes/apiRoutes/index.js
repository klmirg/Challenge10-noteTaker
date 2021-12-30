const router = require("express").Router();
// requiring the path
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// Reading the notes file. 
router.get("/notes", (req, res)=>{
  res.sendFile(path.join(__dirname, "../../db/db.json"))
})

// Saving the notes.
router.post("/notes", (req, res)=>{
 const { title, text } = req.body;
  // Creating the newNote variable with a title, text, and id.
  const newNote = {
    title: req.body.title,
    text: req.body.text ,
    id: uuidv4()
  };

  console.log("newNote", newNote)

  // Reading whats in the db.json file and giving it to us in utf-8 character set.
  fs.readFile(path.join(__dirname, "../../db/db.json"), 'utf-8', (err, data)=>{
    const parsedNotes = JSON.parse(data)
    // Pushing our new notes to our parsed notes.
    parsedNotes.push(newNote)
    console.log("DATA FROM DB.json", parsedNotes)
    // Writing the file with the new notes into the db.json file.
    fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(parsedNotes), (err)=>{
      if(err) throw err;
      console.log("Note Saved!")
    })
  })

  res.sendFile(path.join(__dirname, "../../db/db.json"))

})

// Deleting notes
router.delete("/notes/:id", (req, res) => {
  
  fs.readFile(path.join(__dirname, "../../db/db.json"), 'utf-8', (err, data)=>{
    const parsedNotes = JSON.parse(data)
    // Pushing our new notes to our parsed notes.
    parsedNotes.push(newNote)
    console.log("DATA FROM DB.json", parsedNotes)
  })
})


// make sure youre hitting the delete method and matching the url
// youre going to want to dynamically put an id in the url ":id"
// youre going to read the db file and parse the notes so you can work with em
// youre going to handle your delete by id (think for loops)
// then write back to your db file
// send the udpated db to front end


module.exports = router;