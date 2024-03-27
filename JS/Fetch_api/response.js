// Define URLs for different types of resources
const jsonstr = 'https://jsonplaceholder.typicode.com/posts/1'; // JSON data from JSONPlaceholder API
const imgstr = 'https://via.placeholder.com/150'; // Placeholder image
const fontstr = 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'; // Font file (Google Fonts CSS)
const htmlstr = 'https://www.example.com'; // Example HTML page (replace with an actual URL)

// Define an object with properties
let obj = {
  id: crypto.randomUUID(), // Generate a unique ID
  name: 'the one who knocks',
  favouriteColor: 'blue',
};

// Function to fetch data
function getData() {
  // Fetch image data
  fetch(imgstr)
    .then((resp) => {
      // Check if the response is okay
      if (!resp.ok) throw new Error('invalid');
      // Get response body as blob (binary large object)
      return resp.blob(); // Blob is used for images, videos, audio, and fonts

      // These lines below are not executed because they are after the return statement
      resp.text(); // For text, HTML, XML files, CSS, and JavaScript
      resp.json(); // For JSON files
    })
    .then((blob) => {
      console.log(blob); // Blob is a chunk of memory on the user's computer
      // Create a URL for the blob
      let url = URL.createObjectURL(blob);
      // Set the src attribute of an image element with the id 'pic' to the created URL
      let img = document.getElementById('pic');
      img.src = url;
    })
    .catch(console.warn); // Log any errors encountered during the process

  // Convert object to JSON string
  let jsonstring = JSON.stringify(obj);
  // Create a File object from the JSON string
  let file = new File([jsonstring], 'mydata.json', { type: 'application/json' });

  // Create a Response object with custom status, status text, and headers
  let response = new Response(file, {
    status: 200,
    statusText: 'Say my name',
    headers: {
      'content-type': 'application/json',
      'content-length': file.size,
      'x-steve': 'starts with x for a custom header name',
    },
  });
  // Return the response object
  
  console.log(response);
  return response;
  // Log specific headers from the Response object
  // console.log(response.headers.get('content-type'));
  // console.log(response.headers.get('content-length'));
}

getData()