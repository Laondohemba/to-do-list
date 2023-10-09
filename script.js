var taskText = document.getElementById("task_text");
var taskList = document.getElementById("task_list");

document.getElementById("add_btn").addEventListener("click", addTask);

function addTask(){
    if(taskText.value === ""){
        alert("Task cannot be empty");
    }else{
        let li = document.createElement("li");
        li.innerText = taskText.value;
        taskList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskText.value = "";
    saveData();
}
taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();