const str = 'https://www.boredapi.com/api/activity';

const getData = async () => {
    // Creating a new URL object from the given URL string
    const url = new URL(str);

    // Creating a new Request object with specified configurations
    const request = new Request(url, {
        headers: {'x-steve': 'hello'}, // Setting custom headers for the request
        method: 'GET', // Specifying the HTTP request method (GET)
        cache: 'no-store' // Specifying cache handling for the request
    });

    // Fetching the resource using the Request object
    fetch(request)
        .then((response) => {
            // Checking if the response status is ok
            if (!response.ok) 
                throw new Error('Invalid');
            // Parsing response body as JSON and returning it
            return response.json();
        })
        .then((data) => {
            // Logging the JSON data obtained from the response
            console.log(data);
        })
        .catch((err) => {
            // Handling errors that occur during the fetch operation
            console.error(err);
        });
};

// Calling the getData function
getData();
