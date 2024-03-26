
const url = 'https://www.boredapi.com/api/activity';

const  getRandomActivity = async () => {
    try{
        let response = await fetch(url);
        if(!response.ok) throw new Error("HTTP-Error: " + response.status);
        let data = await response.json();
        return data;
    }catch (error) {
        console.log('Error:', error);
    };
};

(async () => {
    console.log(await getRandomActivity());
})();


