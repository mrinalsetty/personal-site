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
        updateCharts();
    }
}

function updateCharts() {
    const barChartCanvas = document.getElementById('barChart').getContext('2d');
    new Chart(barChartCanvas, {
        type: 'bar',
        data: {
            labels: progressData.tasks,
            datasets: [
                {
                    label: 'Mrinal',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: progressData.Mrinal.completion
                },
                {
                    label: 'Nehal',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    data: progressData.Nehal.completion
                }
            ]
        },
        options: {
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });
}

// Initialize the page
updateCharts();
