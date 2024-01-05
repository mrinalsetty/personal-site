function logActivity() {
    const activityInput = document.getElementById('activity');
    const durationInput = document.getElementById('duration');
    const activityLog = document.getElementById('activity-log');

    const activity = activityInput.value;
    const duration = durationInput.value;

    if (activity && duration) {
        const listItem = document.createElement('li');
        listItem.textContent = `${activity}: ${duration} minutes`;
        activityLog.appendChild(listItem);

        // Clear input fields
        activityInput.value = '';
        durationInput.value = '';
    } else {
        alert('Please enter both activity and duration.');
    }
}
