

let p = fetch("http://goweather.xyz/weather/Ny");
p.then((value)=>{
    return value.json();
}).then((data)=>{
    console.log(data);
})


async function getWeather() {
    let response = await fetch("http://goweather.xyz/weather/Ny");
    let data = await response.json();
    console.log(data);
}
getWeather();


async function getWeather() {
    try{
        let response = await fetch("http://goweather.xyz/weather/Ny");
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }
        let data = await response.json;
        console.log(data);
    }catch(error){
        console.log(error.message);
    }
}

getWeather();


//POST Requeest


async function createUSer() {
    let person = {
        name:"Vidhi",
        age:21
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",
        headers: {
            "content-type":"application"
        },
        body: JSON.stringify(person)
    });
    const data = await response.json;
    console.log(data);

}

createUSer();