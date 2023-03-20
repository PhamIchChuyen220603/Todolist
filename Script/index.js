let button = document.getElementById("btn-todo").addEventListener("click",addTask)
console.log(button)
let task = document.getElementsByTagName("li")
console.log(task)
let btntodo = document.getElementsByClassName("todo-list")
console.log(btntodo)
let taskinput = document.getElementById("taskinput")

function addTask(){
    if(button == ""){
        return
    }
    let btntodo = document.getElementById("list-task")
    let task = document.createElement("li")
    task.innerHTML = taskinput.value
    taskinput.value = ""
    btntodo.appendChild(task)
}


let remote = document.getElementById("btn-todo-remote").removeEventListener("click",remoteTask)
function remoteTask(){
    btntodo.removeChild(taskinput.lastChild) 
}

