// Lexical Scope Example
function outerFunction() {
    let outerVar = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVar); // innerFunction can access outerVar due to lexical scope
    }
  
    innerFunction();
  }
  
  outerFunction();
  
  // Closure Example
  function closureExample() {
    let outerVar = 'I am from the closure example';
  
    function innerFunction() {
      console.log(outerVar); // innerFunction forms a closure, retaining access to outerVar
    }
  
    return innerFunction; // Return the inner function, creating a closure
  }
  
  closureExample()(); // ()() to invoke the function immediately
  
  // Real-world Example: User Authentication Module

// Function to create a user authentication module
// function createUserAuthenticator() {
//     // Private variable encapsulated within the closure
//     let users = [];
  
//     // Function to add a user to the authentication module
//     function addUser(username, password) {
//       // Adding user to the private 'users' array
//       users.push({ username, password });
//       console.log(`User '${username}' added.`);
//     }
  
//     // Function to authenticate a user based on provided credentials
//     function authenticateUser(username, password) {
//       // Searching for the user in the private 'users' array
//       const user = users.find((u) => u.username === username && u.password === password);
//       // Returning authentication status
//       return user ? `${username} is authenticated.` : 'Authentication failed.';
//     }
  
//     // Returning an object with methods, forming a closure over the 'users' array
//     return {
//       addUser,            // Exposing method to add users
//       authenticateUser,   // Exposing method to authenticate users
//     };
//   }
  
//   // Creating an instance of the user authentication module
//   const authModule = createUserAuthenticator();
  
//   // Using the module to add users and authenticate them
//   authModule.addUser('Alice', '123456');
//   authModule.addUser('Bob', 'password123');
  
//   console.log(authModule.authenticateUser('Alice', '123456')); // Output: Alice is authenticated.
//   console.log(authModule.authenticateUser('Eve', 'hackme'));    // Output: Authentication failed.
  