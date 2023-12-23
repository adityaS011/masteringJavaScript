const progress = document.querySelector(".progress-done");
const input = document.querySelector(".input");
const maxInput = document.querySelector(".maxInput");
let finalValue = 0;
let max=0;

function changeWidth(){
    if (!isNaN(max)) {
        progress.style.width = `${(finalValue / max) * 100}%`;
        progress.innerText = `${Math.ceil((finalValue / max) * 100)}%`;
        
    }
    else if (isNaN(max)){
        progress.innerText = ` `;
        progress.style.width = `0%`
    }
}

input.addEventListener("keyup", ()=>{
    finalValue = parseInt(input.value,10);
    if(!maxInput.value){
        progress.innerHTML("ENter")
    }
    changeWidth();
});
input.addEventListener("keyup", ()=>{
    max = parseInt(maxInput.value,10);
    
    changeWidth();
});
