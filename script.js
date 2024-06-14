let tasks = [];

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
});

function loadTasks() {
    const tasksJSON = localStorage.getItem('tasks');
    if (tasksJSON) {
        tasks = JSON.parse(tasksJSON);
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();
    if (task !== '') {
        tasks.push(task);
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.onclick = () => deleteTask(index);
        li.appendChild(button);
        taskList.appendChild(li);
    });
}

