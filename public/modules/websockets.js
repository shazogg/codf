// websockets.js

// Connect
function connect(adress, onopen, onmessage, onclose, onerror) {
    if(adress != null && adress.length != null && adress.length > 0) {
        // Create websocket
        let ws = new WebSocket(adress);

        // On error
        if(onerror != null) {
            ws.onerror = onerror;
        }

        // On open
        ws.onopen = function(event) {
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
    connect: connect
};

// Exports
export {websockets};