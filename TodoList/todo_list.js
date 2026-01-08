/*const newTask=document.getElementById("newTask");
const Taskadd=document.getElementById("btn");
const displayTask=document.getElementById("taskDisplay");
const clearTask=document.getElementById("clrBtn");

let tasks=[];

function addTask(){
    const taskText=newTask.value.trim();
    if(taskText !== ""){
        taskText.push({text: taskText,completed:false})
        newTask.value="";
        displayTask();
    }
}

function displayTask(){
     displayTask.innerHTML="";
     tasks.forEach((task,index)=>{
        const li=document.createElement("li");
        li.innerHTML=
        `<input type="checkBox" id="task-${index} ${task.completed ? "checked":""} > 
        <label for="task-${index}">${taskText}</label>`
        document.querySelector("input").addEventListener("change", ()=> toggleTask(index))
        displayTask.appendChild(li);
        
     })
}

function toggleTask(index){
    tasks[index].completed=!tasks[index].completed;
    displayTask();
}

function clearTask(){
  const tasks= tasks.filter((task)=>!task.completed);
   displayTask();
   
}

Taskadd.addEventListner("click",addTask);
clearTask.addEventListner("click",clearTask);
displayTask();
*/
const newTask = document.getElementById("newTask");
const addTaskBtn = document.getElementById("btn");
const resultTask = document.getElementById("taskDisplay");
const clearTaskBtn = document.getElementById("clrBtn");

let tasks = [];

// Function to add a new task
function addTask() {
    const taskText = newTask.value.trim();  // Get and clean the input
    if (taskText !== "") {  // Check if the input is not empty
        tasks.push({ text: taskText, completed: false });  // Add the task
        newTask.value = "";  // Clear the input field
        displayTasks();  // Update the task display
    } else {
        alert("Please enter a task.");  // Alert if the input is empty
    }
}

// Function to display all tasks
function displayTasks() {
    resultTask.innerHTML = "";  // Clear the previous task display
    tasks.forEach((task, index) => {
        const li = document.createElement("li");  // Create a new list item for each task
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>
        `;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));  // Toggle task completion
        resultTask.appendChild(li);  // Append the list item to the task display
    });
}

// Function to toggle the completion status of a task
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;  // Toggle the completed property
    displayTasks();  // Update the task display after toggling
}

// Function to remove all completed tasks
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);  // Filter out completed tasks
    displayTasks();  // Update the task list after removal
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);  // Add task button click event
clearTaskBtn.addEventListener("click", clearCompletedTasks);  // Clear completed tasks button click event
  // Clear completed tasks button listener
