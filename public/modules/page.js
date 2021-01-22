// page.js

// Set page
function set_page(pages, page_id) {
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

// Page object
let page = {
    set_page: set_page
};

// Exports
export {page};