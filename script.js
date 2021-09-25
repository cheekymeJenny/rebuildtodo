let taskInput = document.querySelector('.taskinput');
let entered = document.querySelector('.tasksEntered');

let tasksArea = document.querySelector('.tasksArea');

let deleteIt = document.querySelector('.deleteButton');

// event listeners
//clicked submit
entered.addEventListener('click',thisone);
//clicked delete button 
deleteIt.addEventListener('click', deleteThisTask);


function thisone(event){
    event.preventDefault();
    console.log(entered);

    let elements = document.createElement("div");
    elements.classList.add('taskInfo');
    let ull = document.createElement('ul');
    elements.appendChild(ull);
    let lii = document.createElement('li');
    lii.innerHTML = taskInput.value;
    ull.appendChild(lii);
    let mark = document.createElement('button');
    mark.innerHTML = 'completed';
    mark.classList.add('markButton');
    ull.appendChild(mark);
    let deleteTask = document.createElement('button');
    deleteTask.innerHTML = "delete";
    deleteTask.classList.add('deleteButton');
    ull.appendChild(deleteTask);
    console.log(elements);
    
    tasksArea.appendChild(elements);

}

function deleteThisTask(event){
    console.log("deltetet");
}