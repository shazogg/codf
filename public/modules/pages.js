// pages.js

// Set page
function set_page(pages, default_element_display, page_id) {
    if(pages != null && Object.keys(pages).length > 0 && default_element_display != null && default_element_display.length != null && default_element_display.length > 0 && page_id != null) {
        // Iterate on pages
        Object.keys(pages).forEach(function(key) {
            // Get page element
            let page = document.getElementById(pages[key]);

            // Check page id
            if(page != null) {
                if(page_id == key) {
                    page.style.display = default_element_display;

                } else {
                    page.style.display = "none";
                }
            }
        });
    }
}

// Pages object
let pages = {
    set_page: set_page
};

// Exports
export {pages};