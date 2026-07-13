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

let doc = "https://www.codewithharry.com";

let links = document.links;
let href;
Array.from(links).forEach(function(element){
    href = element.href;
    console.log(href);
})