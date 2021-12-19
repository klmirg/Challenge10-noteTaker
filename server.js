const fs = require('fs');
const path = require("path");

const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static("public"));

const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes/index');
app.use('/api', apiRoutes);

const htmlRoutes = require('./routes/htmlRoutes/index');
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port 3001!`);
});