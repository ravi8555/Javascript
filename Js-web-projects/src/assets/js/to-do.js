// console.log("TO DO");
/* const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach( toDo => addTodo(todo))
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    addTod();
})

function addTod(todo){
    let todtext = input.value;

    if(todo){
        todtext = todo.text;
    }

    if(todtext){
        todoItem = document.createElement('li');

        if(todo && todo.completed){
            todoItem.classList.add('completed')
        }
        todoItem.innerText = todtext;
        todoItem.addEventListener('click', ()=>{
            todoItem.classList.toggle('completed');
            updateLs()
        });

        todoItem.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            todoItem.remove();
            updateLs()
        })

        todoUl.appendChild(todoItem)
        input.value = ''

        updateLs()

    }

}

function updateLs(){
    todoElm = document.querySelectorAll('li');

    const dotos = []

    todoElm.forEach( todoEl => {
        dotos.push({
            text : todoEl.innerText,
            completed : todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('dotos', JSON.stringify(dotos))

}
*/

const { list } = require("postcss");


/*    Todo List 2      */
/*const addUserBtn = document.getElementById('addUser');
const usernameInput = document.getElementById('username');
const btnText = addUserBtn.innerText
let userEmptyArray = [];
const userRecords = document.getElementById('userRecords')
let objString = localStorage.getItem('Users');
let edit_id = null

if (objString != null){
    userEmptyArray = JSON.parse(objString)
}
displayRec();

// console.log(userEmptyArray);
addUserBtn.onclick=()=>{
    const name = usernameInput.value;
    if(edit_id!=null){
        // edit
        userEmptyArray.splice(edit_id,1,{'name': name});
        edit_id = null
    }else{
        // insert        
        userEmptyArray.push({'name': name});
    }   
    
    saveRecord(userEmptyArray);
    usernameInput.value = '';
   
    addUserBtn.innerHTML = btnText;
    // console.log(userEmptyArray);
}

function saveRecord(userEmptyArray){
    let str = JSON.stringify(userEmptyArray);
    localStorage.setItem('Users', str);
    displayRec();
}

function displayRec(){
    let userData = '';
    userEmptyArray.forEach((user, i) =>{
        userData += `<tr>
        <th scope="row">${i+1}</th>
        <td>${user.name}</td>
        <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='editRec(${i})' id="edit"></i> 
        <i class="btn btn-danger text-white fa fa-trash" onclick='deleteRec(${i})'></i></td>
      </tr>`
        
    })
    userRecords.innerHTML = userData;
   
}

function editRec(id){    
    // console.log(id);
    edit_id = id;
    usernameInput.value = userEmptyArray[id].name;
    addUserBtn.innerHTML = "Edit User";

}

function deleteRec(id){
    // console.log(id);
    userEmptyArray.splice(id,1);
    saveRecord(userEmptyArray);
    displayRec()

} */

/*    Todo List 3      */
const item = document.querySelector('#item');
const todocnt = document.querySelector('#to-do-box');
const listArray = localStorage.getItem('listItme') ? JSON.parse(localStorage.getItem('listItme')) : [];
item.addEventListener('keyup', function(e){ 

    if(e.key == "Enter"){
        listArray.push(this.value);
        localStorage.setItem('listItme', JSON.stringify(listArray));
        updateItem(this.value)
        addTodo(this.value);
        this.value = '';
    }
    
});
function updateItem(text, i){
    listArray[i] = text;
    localStorage.setItem('listItme', JSON.stringify(listArray));
   
}


const addTodo = (item)=>{
    const listItme = document.createElement('li')
    listItme.innerHTML = `
        ${item}<i class="fa fa-trash"></i>
    `;
    listItme.addEventListener('click', function(){
        this.classList.toggle("done")
    })

    listItme.querySelector('i').addEventListener('click', function(){
        listItme.remove();
        // listItme.splice(i, 1);
        // localStorage.setItem('listItme', JSON.stringify(listArray));
        
        

    })

    todocnt.appendChild(listItme);

    
}

/* 4 */

/*
const itemArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")): [];
console.log(itemArray);

document.querySelector('#enter').addEventListener('click', ()=>{
    const list = document.querySelector('#item');
    createList(list)
});

function displayItem(){
    let items = "";
    for(let i =0; i < itemArray.length; i++){
        items +=`
        <div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemArray[i]}</textarea>
                  <div class="edit-controller">
                    <i class="fa fa-trash-o deleteBtn"></i>
                    <i class="fa fa-pencil-square-o editBtn"></i>
                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn"><i fa fa-floppy-o></i>Save</button>
                  <button class="cancelBtn"><i fa fa-ban></i>Cancel</button>
                </div>
        </div>`;
        document.querySelector('.to-do-list').innerHTML = items
    };

    deleteItem();
    editItem();
    saveItem();
    cancelItem();
}

function deleteItem(){
    document.querySelectorAll('.deleteBtn').forEach((del, i)=>{
        del.addEventListener('click', ()=>{
            deletitems(i)
        })
    })
}

function deletitems(i){
    itemArray.splice(i, 1);
    localStorage.setItem('items', JSON.stringify(itemArray));
    location.reload();
}

function editItem(){
    const editBtn = document.querySelectorAll('.editBtn');
    const updateDiv = document.querySelectorAll('.update-controller');
    let inputs = document.querySelectorAll('.input-controller textarea');
    editBtn.forEach((eachbtn, i)=>{
        eachbtn.addEventListener('click', ()=>{

            updateDiv[i].style.cssText = `display:block;`;
            inputs[i].disabled = false;
            inputs[i].cssText = `border:1px solid #fff`;
            

        })
    })
}

function saveItem(){
    let savbtn = document.querySelectorAll('.saveBtn');
    let inputs = document.querySelectorAll('.input-controller textarea');
    savbtn.forEach((eachbtn, i)=>{
        eachbtn.addEventListener('click', ()=>{
            updateItem(inputs[i].value, i)
        })
    })
}
function updateItem(text, i){
    itemArray[i] = text;
    localStorage.setItem('items', JSON.stringify(itemArray));
    location.reload()
}
function cancelItem(){
    const canBtn = document.querySelectorAll('.cancelBtn');
    const updateDiv = document.querySelectorAll('.update-controller');
    let inputs = document.querySelectorAll('.input-controller textarea');
    canBtn.forEach((eachbtn, i) =>{
        eachbtn.addEventListener('click', ()=>{
            console.log();
            updateDiv[i].style.cssText = `display:none;`;
            inputs[i].disabled = true;

        })
    })
}

function createList(list){
    itemArray.push(list.value);
    localStorage.setItem('items', JSON.stringify(itemArray))
    location.reload();
}
function dispDate(){
    let date = new Date();
    date = date.toString().split(" ");
    document.querySelector('#date').innerHTML = date[1] + " " + date[2] + " " + date[3]
    // console.log(date);
}

window.onload = function(){
    dispDate();
    displayItem()
}
*/



