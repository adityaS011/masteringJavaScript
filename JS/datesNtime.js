// start time: January 1st 1950 Type: Object
console.log("---------------Date N Time-----------------\n");

const date = new Date(2024,1,19)

console.log("Day: "+date.getDay());

console.log("Month: "+date.getMonth());

console.log("To Date String: "+date.toDateString());

console.log("To Locale String: "+date.toLocaleString());

console.log("To JSON : "+date.toJSON());

console.log("To String: "+date.toString());

console.log("To LocaleTimeString: "+date.toLocaleTimeString());

console.log("To LocaleDateString: "+date.toLocaleDateString());

console.log("To toISOString: "+date.toISOString());

console.log("To Set Date(2024,2,19): "+(new Date("01/18/2024")).toLocaleString());
// or console.log("To Set Date(2024,2,19): "+(new Date("01/18/2024")).toDateString());

console.log(Date.now());

console.log(Math.floor(Date.now()/1000));

const newDate = new Date();
const updateDate = newDate.toLocaleString('default', {
    weekday:'long', 
    year:'numeric', 
    month:'long', 
});
console.log(updateDate);
console.log(newDate);

console.log("---------------Date N Time-----------------\n");