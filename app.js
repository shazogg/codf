// app.js

// Constants
const express = require("express");
const express_ws = require("express-ws");
const collab = require("./modules/collab");
const app = express();
const port = 3000;

// Add websocket to express app
express_ws(app);

// Static serv
app.use(express.static("public"));

// Websocket app
app.ws("/ws", function(ws, req) {
    // On websocket message
    ws.on("message", function(msg) {
        collab.process(msg, ws);
    });
    
    // On websocket close
    ws.on("close", function(event) {
        console.log("Closed !");
    });
});

// App listening
app.listen(process.env.PORT || port, function() {
    console.log("App running !");
});
  