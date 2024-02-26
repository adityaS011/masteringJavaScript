 //shallow copy is used in array i.e copy whose properties share the same refrence
 
 const arr = [1,2,3,4,5,6];

 const myarr = new Array(1,2,3,4,5);
 console.log("myarr",myarr)

 // slice and splice

 console.log(arr.slice(1,3))    // just get the sliced range, excluding last index;
 console.log(arr.splice(1,3)) // manipulate the array, inlcudes last index;
 console.log(arr)
