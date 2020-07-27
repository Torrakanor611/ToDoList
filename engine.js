// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.list-todo');

// event listeners
document.addEventListener("DOMContentLoaded", getToDoList)
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodo);

// functions
function addTodo(event){
    // prevent form from submiting
    event.preventDefault();

    // console.log("hello world!");
    if(todoInput.value != ""){
        // create a todo in todo list
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-item");

        const todoli = document.createElement("li");
        todoli.classList.add("todo");
        todoli.innerText = todoInput.value;

        // add to local storage
        saveLocalToDoList(todoInput.value);

        // clear input
        todoInput.value = "";

        todoDiv.appendChild(todoli);

        // check button
        const checkButton = document.createElement("button");
        checkButton.innerHTML = "<ion-icon name=\"checkmark-outline\"></ion-icon>";
        checkButton.classList.add("check-button");
        checkButton.classList.add("left-button");
        todoDiv.appendChild(checkButton);

        // remove button
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "<ion-icon name=\"close-outline\"></ion-icon>";
        removeButton.classList.add("remove-button");
        todoDiv.appendChild(removeButton);

        // add to list
        todoList.append(todoDiv);
    }
    
}

function removeTodo(event){
    //console.log(event.target);
    const item = event.target;

    if(item.classList[0] === "remove-button"){
        const todo = item.parentElement;
        //console.log(item.parentElement);
        // console.log(todo);
        // console.log(todo.value);
        // animation
        todo.classList.remove(".check-button:hover");
        todo.classList.remove(".remove-button:hover");
        todo.classList.add("remove");
        removeFromLocal(todo.innerText);

        todo.addEventListener("transitionend", function() {
            todo.remove();
        })

    }else if(item.classList[0] === "check-button"){
        const todo = item.parentElement;
        console.log(item.parentElement);
        console.log(todo.firstElementChild);

        const itemLi = todo.firstElementChild;

        itemLi.classList.toggle("checked");
    }else{
        ;
    }
}

function saveLocalToDoList(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getToDoList(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        // create a todo in todo list
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-item");

        const todoli = document.createElement("li");
        todoli.classList.add("todo");
        todoli.innerText = todo;

        todoDiv.appendChild(todoli);

        // check button
        const checkButton = document.createElement("button");
        checkButton.innerHTML = "<ion-icon name=\"checkmark-outline\"></ion-icon>";
        checkButton.classList.add("check-button");
        checkButton.classList.add("left-button");
        todoDiv.appendChild(checkButton);

        // remove button
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "<ion-icon name=\"close-outline\"></ion-icon>";
        removeButton.classList.add("remove-button");
        todoDiv.appendChild(removeButton);

        // add to list
        todoList.append(todoDiv);
    });
}

function removeFromLocal(todo){
    // remove from array in local storage
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.splice(todos.indexOf(todo), 1);
    // update array in local storage
    localStorage.setItem("todos", JSON.stringify(todos));
}


