// index.js

// Imports
import {querys} from "./modules/querys.js";
import {events} from "./modules/events.js";
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
    let url_parameters = querys.get_url_params()

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
    querys.set_url_params({
        "page_id": actual_page_id
    });
}

// Upload button
function upload_button() {
    popups.create_popup("upload-popup", "upload-popup-close-button", "flex");
}

// Pseudo input change
function pseudo_input_change() {
    // Get pseudo input element
    let pseudo_input_element = document.getElementById("pseudo-input");

    // Set url query
    if(pseudo_input_element != null && pseudo_input_element.value != null) {
        querys.set_url_params({
            "pseudo": pseudo_input_element.value
        });
    }
}

// Register events
events.add_event_listener(document.getElementById("download-button"), "click", download_button);
events.add_event_listener(document.getElementById("upload-button"), "click", upload_button);
events.add_event_listener(document.getElementById("about-help-button"), "click", about_and_help_button);
events.add_event_listener(document.getElementById("pseudo-input"), "input", pseudo_input_change);

// Start
set_actual_page_from_url_params();

popups.create_popup("login-popup", "login-popup-close-button", "flex");