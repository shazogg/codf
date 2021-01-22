// events.js

// Add event listener
function add_event_listener(element, event_type, callback) {
    if(element != null && event_type.length > 0 && callback != null) {
        element.addEventListener(event_type, callback);
    }
}

// Event object
let events = {
    add_event_listener: add_event_listener
};

// Exports
export {events};