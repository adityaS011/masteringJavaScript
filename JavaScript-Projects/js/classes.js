// part of ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return this.password+"abc";
    }
    static createID(){ // static stop  the function from being instanciated
        return (Math.random()*1000).toFixed();
    
    }
}

const Aditya =new User("Aditya", "aditya@google.com", "Aditya123" );

// console.log(Aditya); 

// extend classes

class  Admin extends User {
    constructor (username, email, password, priviledges) {
        super(username, email, password);
        this.priviledges= priviledges;
    }
    adminAccess(){
        if(this.priviledges=== true)
        {return  `Hello ${this.username}, you have access` }
        else{
            return "No access";
        }
    }
}
const  john = new Admin ("John Doe", "johndoe@gmail.com","JohnDoe123", true);
console.log(john.adminAccess());
console.log(john instanceof Admin); // check if instance is of the respective class or not
