
const str = 'https://www.boredapi.com/api/activity';

const getData = async () => {

    const url = new URL(str);
    // console.log('Host:', url.host); 
    // console.log('Pathname:', url.pathname); 
    // console.log('Origin:', url.origin); 
    // console.log('Port:', url.port); 
    const request = new Request (url,{
        header:{'x-steve':'hello'},
        method: 'GET',
        cache :'no-store' //   reload , default , no-cache , force-cahce ,  only-if-cahce

    })
    fetch(request).then((response)=>{
        if(!response.ok) throw new Error('Invalid');
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
    .catch( (err)=>console.error(err));
};

getData()