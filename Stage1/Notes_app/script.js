let addBtn = document.getElementById('addBtn');
let searchBtn = document.getElementById('search');
showNotes();
addBtn.addEventListener('click', addNote);
function addNote(){
    let addText = document.getElementById('note');
    let text = addText.value.trim();
    if(text=="") return;
    let notes = localStorage.getItem("notes");
    let noteObj = [];
    if(notes!=null){
        noteObj = JSON.parse(notes);
    }

    noteObj.push(text);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    
    addText.value = '';
    showNotes();
}
function showNotes(){
    let notes = localStorage.getItem("notes");
    let noteObj = [];
    if(notes!=null){
        noteObj = JSON.parse(notes);
    }

    let html = "";
    
    noteObj.forEach(function(element, index){
         html+=`<div class = "card"> <h4>Note ${index+1}</h4> <p>${element}</p><button id="${index}" onclick="deleteNote(this.id)"> Delete </button></div>`;
         
    })
    let notesElem = document.querySelector(".notesContainer");
    if(noteObj.length!=0){
        notesElem.innerHTML = html;
    }else{
        notesElem.innerHTML = `Nothing to show!! Add a new Note`;
    }
}


function deleteNote(index){
    console.log("I am deleting Node: ", index);
    let notes = localStorage.getItem("notes");
    let noteObj = [];
    if(notes!=null){
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    showNotes();
}


searchBtn.addEventListener('click',search);
function search(){
    let keyword = document.getElementsByClassName('searchTxt')[0];
    let text = keyword.value.trim().toLowerCase();
    let cards = document.getElementsByClassName("card");
    
    Array.from(cards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        cardTxt=cardTxt.toLowerCase();
        if(!cardTxt.includes(text)){
            element.style.display='none';
        }else{
            element.style.display='block'; 
        }
    })
}
