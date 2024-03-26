
const url = 'https://www.boredapi.com/api/activity';

function getData(){
    fetch(url)
    .then((res)=>{
        if(!res.ok) throw new Error('was not a valid response');
        return res.json();
    })
    .then((dataobj)=>{
         console.log(dataobj); 
    })
    .then()
    .catch((err)=>{
        console.log("Error: ", err.message);8
    }
    )
}
getData();