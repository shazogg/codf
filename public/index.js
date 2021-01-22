// index.js

// Imports
import {query} from "./modules/query.js";
import {event} from "./modules/event.js";
import {pages} from "./modules/pages.js";
import {utils} from "./modules/utils.js";
import {popups} from "./modules/popups.js";

// Constants
const main_pages = {
    0: "text-editor",
    1: "about-help"
}

// Variables
var actual_page_id = 0;

// Set actual page from url parameter
function set_actual_page_from_url_params() {
    // Get url params
    let url_parameters = query.get_url_params()

    if(Object.keys(url_parameters).length > 0 && url_parameters.page_id != null) {
        // Parse page id
        let page_id = parseInt(url_parameters.page_id);

        // Set page
        pages.set_page(main_pages, "block", page_id);

        // Set actual page id
        actual_page_id = page_id;
    }
}

// Download button
function download_button() {
    let textarea_element = document.getElementById("text-editor");

    if(textarea_element != null && textarea_element.value != null && textarea_element.value.length > 0) {
        utils.download_text("test.txt", textarea_element.value);
    }
}

// About and help button
function about_and_help_button() {
    let about_help_button = document.getElementById("about-help-button-text");

    if(actual_page_id == 0) {
        // Set abount and help button text
        if(about_help_button != null) {
            about_help_button.innerHTML = "Return to editor";
        }

        // Set page
        pages.set_page(main_pages, "block", 1);

        // Set actual page id
        actual_page_id = 1;

    } else {
        // Set abount and help button text
        if(about_help_button != null) {
            about_help_button.innerHTML = "About and help";
        }

        // Set page
        pages.set_page(main_pages, "block", 0);

        // Set actual page id
        actual_page_id = 0;
    }

    // Set page id url parameter
    query.set_url_params({
        "page_id": actual_page_id
    });
}

// Register events
event.add_event_listener(document.getElementById("download-button"), "click", download_button);
event.add_event_listener(document.getElementById("about-help-button"), "click", about_and_help_button);

// Start
set_actual_page_from_url_params();

popups.create_popup("upload-popup", "upload-popup-close-button", "flex");