// app.js

// Constants
const express = require("express");
const app = express();
const port = 80;

// Static serv
app.use(express.static("public"));

// App listening
app.listen(port, () => {
    console.log("App running !");
});
  