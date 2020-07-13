
    const newTask = document.querySelector('#new-task-input');
const addTaskBtn = document.querySelector('.add-task-btn');
const removeCompleteBtn = document.querySelector('.remove-complete-btn');
const tasklist = document.querySelector('.task-list');
const taskTemplate = document.querySelector('#task-template');
let id = 1;

newTask.addEventListener('keyup', (e) => {//e = event
    if(e.keyCode === 13 && inputValid()){
        addTask();// if input is valid and the press of the enter button is 13 are both true then add a task
}});

newTask.addEventListener('click', () => {
    if(inputValid()){
        addTask();//if we enter a task and press enter we will add task function
    }
});

removeCompleteBtn.addEventListener('click', () => {
    const task = document.querySelectorAll('.task');
    task.forEach(task =>{
        const checked = task.querySelector('input').checked;
        if(checked){
            task.remove();
        }
    })
});

function addTask() {
    const taskElement = document.importNode
    (taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    checkbox.id = id;
    const label = taskElement.querySelector('label');
    label.htmlFor = id;// starts a 1 check lime 28.
    label.append(newTask.value);
    tasklist.appendChild(taskElement);
    newTask.value = '';// clear and resets the task add list
    id++;// append means at the end of tasklist ul
}

function inputValid(){
    return newTask.value !== ''
}// checking to see that the task is not empty something has to be imputted in order to be true.
//if input is blank it will return false

