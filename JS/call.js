// this access local & windows 

function SetUsername(username){
    this.username= username;
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername.call(username); its called current from execution context
    SetUsername.call(this, username); // this is used for refrence
    SetUsername.apply(this, [username]); // in apply second argument is an array
    this.email= email;
    this.password= password;

}
// const chai = createUser.bind(SetUsername); // in apply second argument is an array
//     chai() // bind both functions together


const chai = new createUser("chai", "chai@gmail.com", "chaiTea");
console.log(chai);