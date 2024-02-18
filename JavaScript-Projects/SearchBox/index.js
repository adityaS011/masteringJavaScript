
// Add debounce function
const debounce = (func, delay) => {
    let timeoutId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
};

// Debounce the input event
searchInput.addEventListener('input', debounce(() => {
    let val = searchInput.value;

    if (val.trim() === "") {
        lists.innerHTML = "";
        lists.style.visibility = "hidden";
    } else {
        const lists = document.getElementsByClassName('suggestions')[0]; // Assuming there's only one element with the class name 'suggestions'
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener('input', () => {
    let val = searchInput.value;

    // Check if the input is empty
    if (val.trim() === "") {
        lists.innerHTML = ""; // Remove all child elements
        lists.style.visibility = "hidden";
    } else {
        let list = document.createElement("li");
        list.innerText = val;
        lists.innerHTML = ""; // Clear existing suggestions before adding new one
        lists.appendChild(list);
        lists.style.visibility = "visible";
    }
});
    }
}, 300)); // Adjust the delay as needed
