// Debouncing & Throttling

let counter=0;
const getData =()=>{
    // calls API to get Data
    console.log("Fetching Data...", counter++);
}
// debounce function
function debounce(func, wait) {
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout( () => {
            func.apply(this, arguments);
        },wait)
    }
};



// Throttle function
function throttle(func, delay) {
    let isThrottled = false;
  
    return function() {
      if (!isThrottled) {
        func.apply(this, arguments);
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, delay);
      }
    };
  }
  
  // Your function that will be throttled
  function handleInput() {
    // Your logic here (e.g., fetching data, updating UI)
    console.log('Handling input...');
  }
  
// Combined function applying both debounce and throttle
function Debounce_Throttle() {
    const debouncedGetData = debounce(getData, 300);
    const throttledHandleInput = throttle(handleInput, 500);

    return function () {
        debouncedGetData();
        throttledHandleInput();
    };
}

// Create the combined function
const betterFunc = Debounce_Throttle();