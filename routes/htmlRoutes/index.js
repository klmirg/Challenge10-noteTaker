const router = require("express").Router();
const path = require("path")

// getting the notes and sending it to the file 'notes.html' in the public folder.
router.get('/notes', (req, res)=>{
  res.sendFile(path.join(__dirname, "../../public/notes.html"))
})
// Sending the index.html to the server and renders it out.
router.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, "../../index.html"))
})

// Exporting as a router so it can communicate with the server.js
module.exports = router;