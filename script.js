document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskText = document.getElementById('new-task').value;
    if (taskText === "") return; // Don't add empty tasks

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = function (e) {
        e.stopPropagation(); // Prevent strikethrough when editing
        const newTaskText = prompt('Edit your task:', span.textContent);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            span.textContent = newTaskText;
        }
    };

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function (e) {
        e.stopPropagation(); // Prevent strikethrough when deleting
        taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Mark task as completed when clicking the list item, but not on buttons
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);

    // Clear the input field after adding the task
    document.getElementById('new-task').value = "";
});

// Delete all tasks button
document.getElementById('delete-all-btn').addEventListener('click', function () {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ""; // Remove all tasks
});