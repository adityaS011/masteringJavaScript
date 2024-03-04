const num = 100.989;

// get precision
const PreciseNum = num.toPrecision(4);
console.log("Number after Precision: "+PreciseNum);

//to string
let strNum = String(num); // or let  strNum = num.toString();
console.log(`Number converted to a string: ${strNum}`);

//to decimal
let decimal = num.toFixed(2);
console.log("To Decimal: "+decimal);

// Currency Formating
const money = 10000000
//console.log(money.toLocaleString(undefined, {style: 'currency', currency: 'USD'}));
console.log("After Formating: "+money.toLocaleString('en-IN'));


console.log("\n---------------------- MATHS ---------------------- \n");


console.log("Absolute Value of -4: "+Math.abs(-4));

console.log("Round Value of 4.032: "+Math.round(4.032));

console.log("Ceil Value of 4.5: "+Math.ceil(4.5));

console.log("Floor Value of 4.5: "+Math.floor(4.5));

console.log("Min of (3,9,5,2,7): "+ Math.min(3,9,5,2,7));

console.log("Max of (3,9,5,2,7): "+ Math.max(3,9,5,2,7));

//Randomization Standard formulae
const min = 10
const max = 20
console.log("Random Value: "+ Math.floor((Math.random()*(max-min+1) + min)));