const parent = document.getElementById("parent");
const body = document.body;
const button = document.getElementById("btn");

// body.addEventListener("click", ()=>{
//     console.log("body is clicked");
// })

// parent.addEventListener("click", ()=>{
//     console.log("parent is clicked");
// })

// button.addEventListener("click", ()=>{
//     console.log("button is clicked");
// })


// body.addEventListener("click", ()=>{
//     console.log("body is clicked"),{capture:true};
// })

// parent.addEventListener("click", ()=>{
//     console.log("parent is clicked"),{capture:true};
// })

// button.addEventListener("click", ()=>{
//     console.log("button is clicked"),{capture:true};
// })



button.addEventListener("click", ()=>{
    console.log("button is clicked"),{capture:true};
    event.stopPropagation();
})