const progressData = {
    tasks: [],
    Mrinal: { completion: [] },
    Nehal: { completion: [] }
};

function addTask() {
    const taskName = prompt("Enter the task name:");
    if (taskName) {
        progressData.tasks.push(taskName);
        progressData.Mrinal.completion.push(0);
        progressData.Nehal.completion.push(0);
        updateTasksList();
    }
}

function updateTasksList() {
    const tasksContainer = document.getElementById('tasksContainer');
    tasksContainer.innerHTML = "<h2>Tasks:</h2>";

    progressData.tasks.forEach((task, index) => {
        tasksContainer.innerHTML += `<p>${task}: ${progressData.Mrinal.completion[index]}% Mrinal, ${progressData.Nehal.completion[index]}% Nehal</p>`;
    });
}

function updateProgress() {
    progressData.tasks.forEach((task, index) => {
        progressData.Mrinal.completion[index] = Math.floor(Math.random() * 101); // Random completion percentage for demo
        progressData.Nehal.completion[index] = Math.floor(Math.random() * 101);
    });

    updateTasksList();
}

// Initialize the page
updateTasksList();
