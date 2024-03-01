// this access local & windows 

function SetUsername(username){
    this.username= username;
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername.call(username); its called current from execution context
    SetUsername.call(this, username); // this is used for refrence
    this.email= email;
    this.password= password;

}

const chai = new createUser("chai", "chai@gmail.com", "chaiTea");
console.log(chai);