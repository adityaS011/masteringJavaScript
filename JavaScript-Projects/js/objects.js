// Object Literal
const user = {
    username: "JohnDoe",
    loginCount: 8,
    signedIn: true,

    // Method to log user details
    getUserDetails: function(){
        console.log("User - ", this);
    }
}

// Uncomment to see individual property values
// console.log(user.username);
// console.log(user.getUserDetails());

// Constructor Function
function User(username, loginCount, isLoggedIn){
    // Constructor sets properties based on arguments
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // 'this' is implicitly returned no need to write= return this
    
}

// Creating instances using the constructor
const userOne = new User("Aditya", 5, false); // 'new' creates a new object
const userTwo = new User("Singh", 15, true); // 'new' creates a new object

// Logging the instances
console.log(userOne);
console.log(userTwo);

    //About this keyword
    // Dynamic Binding: this value adapts based on the execution context.
    // Method Invocation: Refers to the object the method operates on.
    // Function Invocation: Value varies between global and undefined (strict mode).
    // Constructor Context: this points to the newly created object instance.
    // Arrow Functions: Inherit this from the surrounding lexical (enclosing) scope.
    // No need for explicit return