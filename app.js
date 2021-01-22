// app.js

// Constants
const express = require("express");
const app = express();
const port = 3000;

// Static serv
app.use(express.static("public"));

// App listening
app.listen(process.env.PORT || port, () => {
    console.log("App running !");
});
  