// const newHero = ["Man", "Women"];
// console.log(newHero.prototype); //js deafult behaviour is prototyple

function createUser(username,score){
    this.username= username;
    this.score = score; 
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.print = function(){
    console.log("Price is ", this.score)
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 25);

// chai.print()

const user={
    userId: 123,
    userName: "Aditya",
    getUsername : function (){
        console.log("I am a user");
    }
}
//add prototype in all objects by picking higher level object
Object.prototype.aditya=function(){
    console.log("Aditya is present");
}
// user.aditya();

// __proto__ is used to create a prototype

const hero={
    id: 1,
    power: ()=>{
        console.log("Shazam");
    },
    __proto__: user // inherit properties of user
}
// or
 hero.__proto__=user;

console.log(hero.userId);