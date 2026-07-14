// let name = "Vidhi";
// let age = 22;
// let city = "Bangalore";

// console.log(name);
// console.log(age);
// console.log(city);

// var a = null;
// a = 4;
// console.log(a);
// let date = new Date();
// console.log(date.getMinutes());


// obj = {name:'vidhi"s', age:22}
// console.log(typeof obj);
// console.log(obj);
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);


// let arr1 = [22,5,3];
// // let arr2 = [4,5,6];
// // let arr3 = [7,8];
// // arr3 = arr3.concat(arr1,arr2);
// // console.log(arr3);
// // arr1.sort((a, b) => a - b);
// // console.log(arr1);

// for (const a of arr1) {
//     console.log(a);
// }

// let doc = "https://www.codewithharry.com";

// let links = document.links;
// let href;
// Array.from(links).forEach(function(element){
//     href = element.href;
//     console.log(href);
// })


// let message = "Global";
// function hello(){
//     message = "Good Morning";
//     console.log("hello: "+message);
// }

// let student = {
//     name:"Vidhi",
//     age:22
// }

// let {name, age} = student;
// console.log(name);



// console.log("Hello");
// setTimeout(function(){
//     console.log("Helllo");
// }, 2000);
// console.log("My name is Vidhi");

// const loadSript = (src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement("script");
//         script.src=src;
//         document.body.appendChild(script);
//         script.onload=()=>{
//             resolve(1);
//         }
//         script.onerror=()=>{
//             reject(0);
//         }
//     })

// }

// let p1 = loadSript("https://code.jquery.com/jquery-3.7.1.mn.js");
// p1.then((value)=>{
//     console.log(value);
// }).catch((errror)=>{
//     console.log("Error")
// })



// let p = fetch("http://goweather.xyz/weather/Ny");
// p.then((value)=>{
//     return value.json();
// }).then((data)=>{
//     console.log(data);
// })


// async function getWeather() {
//     let response = await fetch("http://goweather.xyz/weather/Ny");
//     let data = await response.json();
//     console.log(data);
// }
// getWeather();


// async function getWeather() {
//     try{
//         let response = await fetch("http://goweather.xyz/weather/Ny");
//         if(!response.ok){
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         let data = await response.json;
//         console.log(data);
//     }catch(error){
//         console.log(error.message);
//     }
// }

// getWeather();


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