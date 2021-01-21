// index.js

// Constants
const pages = {
    0: "main-text",
    1: "about-help"
}

// Variables
var actual_page_id = 0;

// Set page
function set_page(page_id) {
    // Set actual page
    actual_page_id = page_id;

    // Iterate on pages
    Object.keys(pages).forEach(function(key) {
        // Get page element
        let page = document.getElementById(pages[key]);

        // Check page id
        if(page != null) {
            if(page_id == key) {
            
                page.style.display = "block";

            } else {
                page.style.display = "none";
            }
        }
    });
}


// About and help
function show_about_and_help() {
    let about_help_button = document.getElementById("about-help-button");

    if(actual_page_id == 0) {
        if(about_help_button != null) {
            about_help_button.innerHTML = "Return to main page";
        }

        set_page(1);

    } else {
        if(about_help_button != null) {
            about_help_button.innerHTML = "About and help";
        }

        set_page(0);
    }
}

set_page(0);