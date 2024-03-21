// Data Types in TypeScript

// Number data type
const a: number = 4; //number

// String data type
const b: string = 'Hello'; //string

// Boolean data type
let c: boolean = true; //boolean
c = false;

// Arrays
// Two ways to declare arrays: using the array syntax or using the generic syntax
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [4, 5, 6];

console.log(arr1);
console.log(arr2);

// Tuples
// A tuple is a fixed-size array with elements having specific types
const tuple: [string, number] = ['hello', 10];
tuple[0] = 'world';
tuple[1] = 20;

console.log(tuple);

// Enum
// Enum is an enumeration of named values with an explicit type
enum Color {
  Red,
  Green,
  Blue,
}
console.log(Color[0]);

// Any data type
// Use 'any' sparingly, as it can lead to type-safety issues
let notSure: any = 4;
notSure = 'maybe';
notSure = false;

function isItAny(value: any): void {
  // Type checking using 'typeof'
  if (typeof value === 'string') {
    console.log('Any is String');
  }
}

// Type Assertion
// Tell the compiler that you know better than it does
const someValue: unknown = 'this is a string';
const definitelyAString: string = <string>someValue;

// Interfaces
// Interfaces in TypeScript are a way to create your own types with objects
interface IUser {
  name: string;
  age?: number; // Optional property is defined by '?'
}

const user: IUser = { name: 'John' };
user.age = 30;

// Type Guards
// Runtime type checking using interfaces or types
function printName(user: IUser) {
  // Using the 'in' keyword to check if the property exists in the object
  if ('age' in user) {
    console.log(`${user.name} is ${user.age} years old`);
  } else {
    console.log(`Hello, ${user.name}!`);
  }
}

printName(user);

// Function with a specific parameter type
function createUser({ name, isActive }: { name: string; isActive: boolean }) {}

let newUser = { name: 'Aditya', isActive: true, email: 'aditya@gmail.com' };

const user1 = createUser(newUser);

// Function returning an object
function createCourse(): { name: string; price: number } {
  return { name: 'Aditya', price: 399 }; // Returns an object
}