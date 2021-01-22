// popups.js

// Imports
import {pages} from "./pages.js";
import {event} from "./event.js";



// Create popup
function create_popup(popup_page_id, popup_close_button_id=null, popup_default_display_type="block") {
    if(popup_page_id != null && popup_page_id.length != null && popup_page_id.length > 0) {
        // Popup close button
        if(popup_close_button_id != null && popup_close_button_id.length != null && popup_close_button_id.length > 0) {
            event.add_event_listener(document.getElementById(popup_close_button_id), "click", function() {
                close_popup(popup_page_id);
            });
        }

        // Create popup pages
        const popup_pages = {
            0: "",
            1: popup_page_id
        };

        // Set page
        pages.set_page(popup_pages, popup_default_display_type, 1);
    }
}

// Close popup
function close_popup(popup_page_id) {
    // Create popup pages
    const popup_pages = {
        0: "",
        1: popup_page_id
    };

    // Set page
    pages.set_page(popup_pages, "none", 0);
}

// Popups object
let popups = {
    create_popup: create_popup
};

// Exports
export {popups};