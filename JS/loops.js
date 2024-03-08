
const arr =[1,2,3,4,5]
//for in loop
for(const i in arr){
    arr[i]+=1;
}
console.log(arr);

const arr1 =[1,2,3,4,5]
//for of loop 
for(const num of arr1){
    arr1[num-1]++;
}
console.log(arr1);

//map
const map = new Map()
map.set(1,"India")
map.set(2,"Hindustan")
map.set(3,"Bharat")
map.set(4,"Nation")

console.log(map);

map.forEach((value , key) => {
    console.log(`${key}:${value}`);
})
// Using map to create a new map with modified values
const modifiedMap = new Map([...map].map(([key, value]) => [key, value.toUpperCase()]));
console.log("Modified Map:", modifiedMap);

//checking if a particular element exists or not
if (map.has(3)){
   console.log("Element Exists");
}else{
    console.log("Element Doesn't exist");
}

//getting all values from the map
console.log("All Values From The Map");
console.log(map.values());

// getting all keys from the map
console.log("All Keys From The Map");
console.log(map.keys())

const arr3 = [1, 2, 3, 4, 5];

// Using filter to create a new array with elements greater than 2
const filteredArr = arr3.filter(num => num > 2);
console.log("Filtered Array:", filteredArr);

const arr4 = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of all elements in the array
const sum = arr4.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Array Elements:", sum);

console.log('====================================');
console.log("\nObject Iteration");
console.log('====================================');



// Object iterable methods
const personObject = {
    name: "John",
    age: 30,
    city: "New York"
};

// Using Object.keys() to get an array of object keys
const objectKeys = Object.keys(personObject);
console.log("Object Keys:", objectKeys);

// Using Object.values() to get an array of object values
const objectValues = Object.values(personObject);
console.log("Object Values:", objectValues);

// Using Object.entries() to get an array of [key, value] pairs
const objectEntries = Object.entries(personObject);
console.log("Object Entries:", objectEntries);

// Object to iterate over
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue"
};

// Using for...in loop to iterate over object properties
console.log("Iterating over object properties using for...in loop:");

for (const key in car) {
    // Check if the property belongs to the object itself, not from the prototype chain
    if (car.hasOwnProperty(key)) {
        // Print the key and its corresponding value
        console.log(`${key}: ${car[key]}`);
    }
}

// Using Object.keys() to get an array of object keys
console.log("\nUsing Object.keys():");

const keys = Object.keys(car);
for (const key of keys) {
    // Print the key and its corresponding value
    console.log(`${key}: ${car[key]}`);
}

// Using Object.values() to get an array of object values
console.log("\nUsing Object.values():");

const values = Object.values(car);
for (const value of values) {
    console.log(value);
}

// Using Object.entries() to get an array of [key, value] pairs
console.log("\nUsing Object.entries():");

const entries = Object.entries(car);
for (const [key, value] of entries) {
    // Print the key and its corresponding value
    console.log(`${key}: ${value}`);
}
