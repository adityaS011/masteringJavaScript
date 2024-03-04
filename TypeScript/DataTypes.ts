// Data Types in TS

const a: number = 4 //number
const b: string = 'Hello' //string
let c: boolean = true //boolean
c = false

// Arrays
const arr1: number[] = [1,2,3]  
const arr2: Array<number> = [4,5,6]    // another type to declare datatype

console.log(arr1)
console.log(arr2)

// Tuples - fixed size, elements  have specific types
const tuple: [string, number] = ['hello', 10]
tuple[0] = 'world'
tuple[1] = 20

console.log(tuple)

// Enum - enumeration of named  values with explicit type
enum Color {Red, Green, Blue}
console.log(Color[0]);


// Any - can be anything, use sparingly
let notSure: any = 4
notSure = "maybe"
notSure = false

function isItAny(value: any): void{ 
    if (typeof value === 'string') {
        console.log("Any is String")
    }
}



// Type Assertion - tell the compiler that you know better than it does
const someValue: unknown = 'this is a string'
if (typeof someValue === 'string') {
    console.log('This is a string')
} else {
    console.log('This is not a string')
}

const definitelyAString: string = <string>someValue
// console.log(definitelyAString) 

// interfaces in typescript is a way to create your own type with object 
interface IUser {
    name: string,
    age?: number // optional property is defined by ?:
}

const user: IUser = {name:'John'}
user.age = 30



// Type Guards - runtime type checking using interfaces or types
function printName(user: IUser){
    if ('age' in user) {
        console.log(`${user.name} is ${user.age} years old`)
    } else {
        console.log(`Hello, ${user.name}!`)
    }
}
printName(user)
