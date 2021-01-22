// query.js

// Get url parameters
function get_url_params() {
    // Get query parameters
    let queryParams = new URLSearchParams(window.location.search);
    let parameters = {};

    // Iterate on parameters
    for(let param of queryParams) {
        parameters[param[0]] = param[1];
    }

    // Return parameters
    return parameters;
}

// Set url parameters
function set_url_params(params) {
    if(params != null && params.constructor == Object && Object.keys(params).length > 0)
    {
        // Get query parameters
        let queryParams = new URLSearchParams(window.location.search);

        // Set query parameters
        Object.keys(params).forEach(function(key) {
            queryParams.set(key, params[key]);
        });
        
        // Replace current query parameter by new
        history.replaceState(null, null, "?"+queryParams.toString());
    }
}

// Query object
let query = {
    get_url_params: get_url_params,
    set_url_params: set_url_params
};

// Exports
export {query};