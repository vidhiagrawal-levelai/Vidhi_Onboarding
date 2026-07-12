const input = document.getElementById('taskInput');
const addButton = document.getElementById('btn');
const list = document.getElementById('tasks');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

function renderTasks() {
    list.innerHTML = '';
    tasks.forEach(task => {
        let taskAdded = document.createElement('li');
        taskAdded.innerHTML = '<input type = "checkbox"><span class = "task-text">'+task.text+'</span><button class="delete-btn">Delete</button>';
        list.appendChild(taskAdded);

        if (task.status === 'complete') {
            taskAdded.querySelector('input[type="checkbox"]').checked = true;
            taskAdded.querySelector('.task-text').style.textDecoration = 'line-through';
        }
        const deleteButton = taskAdded.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        list.removeChild(taskAdded);
        tasks = tasks.filter(task => task.text !== taskAdded.querySelector('.task-text').textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    const checkbox = taskAdded.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        const taskText = taskAdded.querySelector('.task-text');
        if (checkbox.checked) {
            taskText.style.textDecoration = 'line-through';
            list.appendChild(taskAdded);
            tasks = tasks.map(task => {
                if (task.text === taskAdded.querySelector('.task-text').textContent) {
                    return {...task, status: 'complete'};
                }
                return task;
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } else {
            taskAdded.querySelector('.task-text').style.textDecoration = 'none';
        }
    });
    })}

addButton.addEventListener('click', () => {
    let text = input.value;
    text = text.trim();
    if (text === '') {
        alert('Please enter a task');
        return;
    }
    let taskAdded = document.createElement('li');
    taskAdded.innerHTML = `<input type="checkbox"><span class = "task-text"> ${text} </span><button class = "delete-btn"> Delete</button>`;
    list.appendChild(taskAdded);
    
    const status  = 'incomplete';
    
    tasks.push({text: text, status: status});
    localStorage.setItem('tasks', JSON.stringify(tasks));

    input.value = '';

    

});

