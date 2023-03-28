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



item.addEventListener('keyup', function(e){

    if(e.key == "Enter"){
        // console.log(this.value);
        addTodo(this.value);
        this.value = '';

    }
    
})

const addTodo = (item)=>{
    const listItme = document.createElement('li')
    listItme.innerHTML = `
        ${item}<i class="fa fa-trash"></i>
    `;
    listItme.addEventListener('click', function(){
        this.classList.toggle("done")
    })

    listItme.querySelector('i').addEventListener('click', function(){
        listItme.remove()
    })

    todocnt.appendChild(listItme)

}


