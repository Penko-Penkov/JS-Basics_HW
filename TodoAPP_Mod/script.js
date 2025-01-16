function render() {
    dom.taskList.innerHTML = ''; // Clear the list before rendering
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        dom.taskList.innerHTML += `
            <li>
                <span>${task.title}</span>
                <span>${task.completed ? 'Done' : 'Not done'}</span>
                <button onclick="deleteTask(${i})">Delete</button>
            </li>
        `;
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    render();
}

// Existing code
function loadTasks() {
    return JSON.parse(window.localStorage.getItem('tasks')) || [];
}

const tasks = loadTasks();

const dom = {
    taskList: document.querySelector('.task-list'),
    saveBtn: document.querySelector('.save'),
    loadBtn: document.querySelector('.load'),
    addBtn: document.querySelector('.addBtn'),
    input: document.getElementById('myInput')
};

dom.saveBtn.addEventListener('click', () => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
});

dom.loadBtn.addEventListener('click', () => {
    tasks.length = 0; // Clear the current tasks
    tasks.push(...loadTasks()); // Load tasks from storage
    render();
});

dom.addBtn.addEventListener('click', () => {
    const title = dom.input.value.trim();
    if (title) {
        tasks.push({ title, completed: false });
        dom.input.value = '';
        render();
    } else {
        alert('You must write something!');
    }
});

render();
