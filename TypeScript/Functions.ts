// Functions in Typescript

function square(x: number): number{
    return x**2
}
const result: number = square(2)
console.log(result);

const getHello = (s:string):string=>{
    return `Hello ${s}`;
}

const heros = ["thor", "spiderman","ironman"];
heros.forEach((hero) :void=>{
    console.log(`I am ${hero}`)
});

// Some funtion never returns a value
function error(msg: string):never { 
       throw new Error(msg); 
};

export{}


interface User {
    x: number
    y:number
}
function logUser(user: User){
    console.log("User logged");
    console.log(`Coordinates are ${user.x},${user.y}`);
}

let user1: User = {x:4,y:7};
logUser(user1);

