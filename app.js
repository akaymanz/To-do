const form = document.getElementById("submitinfo")
const body = document.querySelector("p")
const list = document.querySelector("ul")
const todoInput = document.getElementById("todo")
const li = document.querySelectorAll("li")
const secondcardbody = document.querySelectorAll(".card-body")[1]
form.addEventListener("click", EkleNesne)

document.addEventListener("DOMContentLoaded", load)
function load() {
    let value = todos = JSON.parse(localStorage.getItem("todos"));
    for (i = 0; i < value.length; i++) {
        let x = document.createElement("li")
        let a = document.createElement("a")
        let y = document.createElement("i")
        x.className = "list-group-item d-flex justify-content-between"
        y.className = "fa fa-remove"
        let text = document.createTextNode(value[i])
        a.appendChild(y)
        a.href = "#"
        x.appendChild(text)
        x.appendChild(a)
        list.appendChild(x)

    }

}
function EkleNesne(e) {
    const value = todoInput.value.trim();
    if(value === ""){
        showAlert()
    }
    else{
        addTodoToUI(value);
    }
    
    
}


function showAlert(){
    body.style.display = "block"
    body.innerHTML = "Bir todo eklemeniz gerekmektedir"
    body.className = "alert alert-danger col-md-6"
    
    setTimeout(function(){
        body.style.display = "none"
    },5000)
}
function addTodoToUI(value){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value.trim())

    localStorage.setItem("todos", JSON.stringify(todos))
    let x = document.createElement("li")
    let a = document.createElement("a")
    let y = document.createElement("i")
    x.className = "list-group-item d-flex justify-content-between"
    y.className = "fa fa-remove"
    let text = document.createTextNode(todoInput.value)
    //likst ve eleman oluşturma
    a.appendChild(y)
    a.href = "#"
    x.appendChild(text)
    x.appendChild(a)
    list.appendChild(x)
    todoInput.value = ""
    body.style.display = "block"
    body.innerHTML = "Bir todo ekledinikz"
    body.className = "alert alert-success col-md-6"
    setTimeout(function(){
        body.style.display = "none"
    },5000)
    
}
const removeItem = document.querySelectorAll(".card-body")[1]

secondcardbody.addEventListener("click",deleteItem)
function gettTodosFromStorage(){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos
}
function deleteItem(e){
   if(e.target.className == "fa fa-remove"){
    
    
    
    e.target.parentElement.parentElement.remove()
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
   }
}

function deleteTodoFromStorage(ToDo){
    
    let todos = gettTodosFromStorage();
    todos.splice(todos.indexOf(ToDo), 1)
//    todos.forEach(function(y,index){
//       if(y === ToDo){
//           todos.splice(index,1)
//        }
//    })
    localStorage.setItem("todos", JSON.stringify(todos))
    
}