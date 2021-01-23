// collab.js

// Variable
let rooms = {};

// Create id
function create_id(power=1) {
    let id = "";

    // Generate id
    if(power != null && typeof power == "number"){
        for(let x = 0; x < power; x++) {
            id += Math.random().toString(36).substr(2, 9);
        }
    }

    // Return id
    return id
}

// Create uuid
function create_uuid(power, test_object) {
    let id;

    if(power != null && typeof power == "number" && power > 0 && test_object != null && typeof test_object == "object") {
        // Array
        if(Array.isArray(rooms)){
            do {
                // Generate id
                id = create_id(power);
            } while(rooms.includes(id));

        // Dictionary
        } else {
            do {
                // Generate id
                id = create_id(power);
            } while(id in rooms);
        }
    }

    // Return array
    return id;
}

// Process
function process(msg, ws) {
    if(msg != null && ws != null) {
        // Parse message to json
        msg = JSON.parse(msg);

        // Sort
        if(typeof msg == "object") {
            if(msg.event != null && typeof msg.event == "string") {
                // Login
                if(msg.event == "login") {
                    // Generate uuid
                    let uuid = create_uuid(5, rooms);

                    // Create room
                    rooms[uuid] = {
                        "host": ws,
                        "clients": []
                    };

                    // Send logged
                    ws.send(JSON.stringify({
                        "event": "logged",
                        "token": uuid
                    }));

                } else if(msg.event == "join") {
                    if(msg.token != null && typeof msg.token == "string" && msg.token.length > 0 && msg.token in rooms) {
                        // Add socket to room
                        rooms[msg.token].clients.push(ws);

                        // Send joined
                        ws.send(JSON.stringify({
                            "event": "joined",
                            "token": msg.token
                        }));
                    } 
                } else if(msg.event == "change") {
                    if(msg.token != null && typeof msg.token == "string" && msg.token.length > 0 && msg.token in rooms && msg.text != null) {
                        // Get room
                        let room = rooms[msg.token];

                        if(ws == room.host) {
                            // Send to clients
                            room.clients.forEach(client => {
                                client.send(JSON.stringify({
                                    "event": "change",
                                    "text": msg.text
                                }));
                            });

                        } else {
                            // Send to host
                            room.host.send(JSON.stringify({
                                "event": "change",
                                "text": msg.text
                            }));

                            // Send to clients
                            room.clients.forEach(client => {
                                if(client != ws){
                                    client.send(JSON.stringify({
                                        "event": "change",
                                        "text": msg.text
                                    }));
                                }
                            });
                        }
                    } 
                }
            }
        }
    }
}


// Exports
exports.process = process;