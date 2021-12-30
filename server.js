const fs = require('fs');
const path = require("path");
// Requiring express.
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

// Creating the PORT variable. When deployed to heroku, it will access 'process.env.PORT'.
const PORT = process.env.PORT || 3001;

// Referencing the index file in the apiRoutes folder in the routes folder.
const apiRoutes = require('./routes/apiRoutes/index');
app.use('/api', apiRoutes);
// Referencing the index file in the htmlRoutes folder in the routes folder.
const htmlRoutes = require('./routes/htmlRoutes/index');
app.use('/', htmlRoutes);

// Connecting to the 3001 port.
app.listen(PORT, () => {
  console.log(`API server now on port 3001!`);
});