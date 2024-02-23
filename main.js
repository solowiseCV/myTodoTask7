window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // Load tasks from localStorage on page load
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to update the tasks in localStorage
    const updateLocalStorage = () => {
        const tasks = Array.from(list_el.children).map(task_el => {
            return {
                content: task_el.querySelector('.text').value,
            };
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Function to create a new task element
    const createTaskElement = (taskContent) => {
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = taskContent;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() === "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
                // Update localStorage on task save
                updateLocalStorage();
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
            // Update localStorage on task deletion
            updateLocalStorage();
        });
    };

    // Populate tasks from localStorage on page load
    savedTasks.forEach(task => {
        createTaskElement(task.content);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        createTaskElement(task);

        // Update localStorage on task addition
        updateLocalStorage();

        input.value = '';
    });
});
