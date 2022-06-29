//Global variable
let id=0;

function addItem(){
    let itemName = document.getElementById('itemName').value;
    if(itemName === ""){
        alert("Item name cannot be blank");
    }else{
        displayItem(itemName);
    document.getElementById('itemName').value="";
    }
}

function displayItem(itemName){
    id++;
    document.getElementById('item-list').innerHTML+=`
    <li id="${id}">
    <div><i class="fa-solid fa-bars"></i> ${itemName}</div> 
    <button onclick="deleteItem(${id})"><i class="fa-solid fa-trash-can"></i></button>
    </li>`
}

function deleteItem(id){
    document.getElementById(id).remove();
}
