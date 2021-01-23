// collab.js

// Imports
import {websockets} from "./websockets.js";

// Variables
let collab_token;
var collab_socket;

// Create
function create(adress, token=null, ontextchange=null) {
    if(adress != null && typeof adress == "string" && adress.length > 0) {
        websockets.connect(adress, function(event) {
            // Add socket
            collab_socket = event.target;

            if(token != null && typeof token == "string" && token.length > 0) {
                // Send join
                event.target.send(JSON.stringify({
                    "event": "join",
                    "token": token
                }));

            } else {
                // Send login
                event.target.send(JSON.stringify({
                    "event": "login"
                }));
            }

        }, function(msg) {
            // Parse message to json
            let data = JSON.parse(msg.data);

            // Sort
            if(data != null && typeof data == "object" && data.event != null && typeof data.event == "string") {
                // Logged
                if(data.event == "logged") {
                    // Add token
                    collab_token = data.token;

                    console.log("Logged with: " + data.token);

                // Joined
                } else if(data.event == "joined") {
                    collab_token = data.token;
                    console.log("Joined");

                // Change
                }else if(data.event == "change") {
                    if(ontextchange != null && data.text != null) {
                        ontextchange(data.text);
                    }
                }
            }
        }, function(event) {
            
        }, function(error) {
            
        });
    }
}

// Text change
function text_change(text) {
    if(collab_socket != null && text != null && typeof text == "string") {
        // Send text
        collab_socket.send(JSON.stringify({
            "event": "change",
            "token": collab_token,
            "text": text
        }));
    }
}

// Copy token
function copy_token() {
    return collab_token;
}

// Collab object
let collab = {
    create: create,
    copy_token: copy_token,
    text_change: text_change
};

// Exports
export {collab};