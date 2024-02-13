let name= new String("Aditya"); // or const name = "Aditya"
console.log(`my name is ${ name}`);


//charAt
let charat= name.charAt(1).toUpperCase(); // const letter= name[1].toUpperCase(); or 
console.log(`CharAt 1 ${ charat}`);

//indexOF
let index = name.indexOf('A'); // returns 0 because A is not in the string 'name'
console.log(`Index of A =  ${(index)}`);

//slice
let slice = name.slice(-2,4);
console.log(`Sliced value = ${slice}`);

//substring
let substring = name.substring(0,4);
console.log(`substring = ${substring}`);

//trim
const name1 = " Aditya "
console.log(name1.trim()); //trimStart, trimEnd
// console.log(name1);

//replace
console.log(`replaced value= ${name.replace("Aditya","Aditya Singh")}`);

//includes
console.log(`Includes = ${name.includes("Adiy")}`);

//slipt
console.log(`Split strings = ${name.split("i")}`);

// charCodeAt
console.log(`Character code at index 1: ${name.charCodeAt(5)}`);

// fromCharCode : Convert Unicode values to characters.
console.log(`Character from code 65: ${String.fromCharCode(65)}`);

// fromCodePoint : : Convert Unicode values to symbols like heart (0x2764), snowman(9731).
console.log(`Character from code point 0x2764: ${String.fromCodePoint(0x2764)}  ${String.fromCodePoint(9731) }`);


// lastIndexOf
console.log(`Last index of "i": ${name.lastIndexOf("i")}`);

// match
let regex = /i/;
console.log(`Match regex /i/: ${name.match(regex)}`);

// search
console.log(`Search for "ty": ${name.search("ty")}`);







