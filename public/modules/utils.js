// utils.js

// Download text
function download_text(filename, text) {
    if(filename != null && text != null && filename.length > 0 && text.length > 0) {
        // Create element
        let element = document.createElement("a");

        // Set element atribute
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
        element.setAttribute("download", filename);
        
        // Hide element
        element.style.display = "none";

        // Append element to document
        document.body.appendChild(element);

        // Simulate click on element
        element.click();

        // Remove element
        document.body.removeChild(element);
    }
}

// Utils object
let utils = {
    download_text: download_text
};

// Exports
export {utils};