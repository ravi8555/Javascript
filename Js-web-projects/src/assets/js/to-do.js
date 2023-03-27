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

const addUserBtn = document.getElementById('addUser');
const usernameInput = document.getElementById('username');
let userEmptyArray = [];
const userRecords = document.getElementById('userRecords')

let objString = localStorage.getItem('Users');
if (objString != null){
    userEmptyArray = JSON.parse(objString)
}
displayRec();

// console.log(userEmptyArray);
addUserBtn.onclick=()=>{
    const name = usernameInput.value;
    userEmptyArray.push(
        {'name': name}
    );
    saveRecord(userEmptyArray);
    usernameInput.value = '';
    displayRec()
    // console.log(userEmptyArray);
}

function saveRecord(userarray){
    let str = JSON.stringify(userEmptyArray);
    localStorage.setItem('Users', str)
}

function displayRec(){
    let userData = '';
    userEmptyArray.forEach((user, i) =>{
        userData += `<tr>
        <th scope="row">${i+1}</th>
        <td>${user.name}</td>
        <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='editRec(${i})'></i> <i class="btn btn-danger text-white fa fa-trash"></i></td>
      </tr>`
        
    })
    userRecords.innerHTML = userData;
   
}

function deleteRec(){

}
function editRec(id){
    
    console.log(id);
    // alert(id)

}
editRec()