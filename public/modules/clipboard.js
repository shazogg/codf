// clipboard.js

// Copy
function copy(text) {
    if(text != null && typeof text == "string" && text.length > 0) {
        // Create element
        let element = document.createElement("input");

        // Append element to document
        document.body.appendChild(element);

        // Set value
        element.value = text;

        // Select the text of element
        element.select();
        element.setSelectionRange(0, 99999); // For mobile device

        // Copy the text to clipboard
        document.execCommand("copy");

        // Remove element
        document.body.removeChild(element);
    }
}

// Clipboard object
let clipboard = {
    copy: copy
};

// Exports
export {clipboard};