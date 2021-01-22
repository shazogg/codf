// websockets.js

// Connect
function connect(adress, onopen, onmessage, onclose, onerror) {
    if(adress != null && adress.length != null && adress.length > 0) {
        let ws;

        try {
            // Create websocket
            ws = new WebSocket(adress);

        } catch(error) {}

        // On error
        if(onerror != null) {
            socket.onerror = onerror;
        }

        // On open
        socket.onopen = function(event) {
            if(onopen != null) {
                onopen(event);
            }

            if(onmessage != null) {
                this.onmessage = onmessage;
            }

            if(onmessage != null) {
                this.onclose = onclose;
            }
        }
    }
}

// Websockets object
let websockets = {
};

// Exports
export {websockets};