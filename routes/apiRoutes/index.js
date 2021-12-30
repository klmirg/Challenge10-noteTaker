const router = require("express").Router();
// requiring the path
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// Reading the notes file.
router.get("/notes", (req, res)=>{
  res.sendFile(path.join(__dirname, "../../db/db.json"))
})
// Creating the notes file.
router.post("/notes", (req, res)=>{
 const { title, text } = req.body;

  const newNote = {
    title: req.body.title,
    text: req.body.text ,
    id: uuidv4()
  };

  console.log("newNote", newNote)

  // Reading the file and creating 
  fs.readFile(path.join(__dirname, "../../db/db.json"), 'utf-8', (err, data)=>{
    const parsedNotes = JSON.parse(data)
    parsedNotes.push(newNote)
    console.log("DATA FROM DB.json", parsedNotes)

    fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(parsedNotes), (err)=>{
      if(err) throw err;
      console.log("Note Saved!")
    })
  })

  res.sendFile(path.join(__dirname, "../../db/db.json"))

})

// Deleting notes
router.delete("/notes", (req, res) => {
  
})


// make sure youre hitting the delete method and matching the url
// youre going to want to dynamically put an id in the url ":id"
// youre going to read the db file and parse the notes so you can work with em
// youre going to handle your delete by id (think for loops)
// then write back to your db file
// send the udpated db to front end








module.exports = router;