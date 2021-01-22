let input = document.getElementById("inputText");
let list = document.getElementById("list");
let minTextLength = 3;
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let i = 1;
function textFilter(x){
    if(x){
        if(x.length >= minTextLength){
            return x;
        }else{
            window.alert("Text minumum length is 3!!");
            return false;
        }
    }else{
        window.alert("Text is empty!!!");
        return false;
    }
}
function showList(x){
    let listItem = `
    <li class="list-style" id="list${i}">
    <span class="inside-text" id="insideText${i}">${x}</span><br>
    <span><small>${date}/${month+1}/${year}</small></span>
    <button class=" btn" id="delete" onclick="deleteList(${i})"><i class="fas fa-trash-alt"></i></button>
    <button class=" btn" id="edit" onclick="editList(${i})"><i class="fas fa-edit"></i></button>
    </li>`;
    i++;
    return listItem;
}
function addList(){
    let x = textFilter(input.value) ;
    if(x){
        list.innerHTML += showList(x);
        input.value = "";
    }
}
function deleteList(listID){
    let current = document.getElementById(`list${listID}`);
    let currentText =document.getElementById(`insideText${listID}`).innerHTML;
    let deleteConfirm = confirm(`Are you Sure to delete this list '${currentText}'?`);
    if(deleteConfirm){
        list.removeChild(current);
        console.log(`delete ${currentText}`);
    }
    else{
        console.log("delete cencel");
    }
    
}
function editList(listID){
    let current = document.getElementById(`insideText${listID}`);
    let newText = prompt("New Text",current.innerHTML);
     if(textFilter(newText)){
        current.innerHTML= newText;
     }   
}