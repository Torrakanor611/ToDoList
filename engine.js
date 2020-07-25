// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.list-todo');

// event listeners
todoButton.addEventListener('click', addTodo);
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
        todo.remove();

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


