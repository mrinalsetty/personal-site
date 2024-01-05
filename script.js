const progressData = [
    { person: "Nehal Chakravarthy", magooshIntro: "Completed", magooshMath: "Completed", magooshVerbal: "In progress", magooshAWA: "Completed", keepAddingBro: "Not started", mockTest1: "Not started", mockTest2: "Not started" },
    { person: "Mrinal Setty", magooshIntro: "Completed", magooshMath: "In progress - 2/14 done", magooshVerbal: "Not Started", magooshAWA: "In progress", keepAddingBro: "Not started", mockTest1: "Not started", mockTest2: "Not started" }
];

function updateCharts() {
    const pieChartCanvas = document.getElementById('pieChart').getContext('2d');
    new Chart(pieChartCanvas, {
        type: 'pie',
        data: {
            labels: ['Completed', 'In progress', 'Not started'],
            datasets: [{
                data: calculateCompletion(),
                backgroundColor: ['#4caf50', '#ff9800', '#f44336']
            }]
        }
    });
}

function calculateCompletion() {
    const completed = progressData.filter(item => item.magooshIntro === "Completed").length;
    const inProgress = progressData.filter(item => item.magooshIntro.includes("In progress")).length;
    const notStarted = progressData.length - completed - inProgress;
    return [completed, inProgress, notStarted];
}

function renderDataEntryForm() {
    const dataEntryDiv = document.getElementById('dataEntry');
    progressData.forEach(personData => {
        const form = document.createElement('form');
        form.innerHTML = `
            <h3>${personData.person}</h3>
            <label>Magoosh Intro videos: <input type="text" value="${personData.magooshIntro}" id="intro-${personData.person}"></label><br>
            <label>Magoosh Math videos: <input type="text" value="${personData.magooshMath}" id="math-${personData.person}"></label><br>
            <label>Magoosh Verbal videos: <input type="text" value="${personData.magooshVerbal}" id="verbal-${personData.person}"></label><br>
            <label>Magoosh AWA videos: <input type="text" value="${personData.magooshAWA}" id="awa-${personData.person}"></label><br>
            <label>Keep Adding Bro: <input type="text" value="${personData.keepAddingBro}" id="adding-${personData.person}"></label><br>
            <label>Full GRE Mock Test 1: <input type="text" value="${personData.mockTest1}" id="mock1-${personData.person}"></label><br>
            <label>Full GRE Mock Test 2: <input type="text" value="${personData.mockTest2}" id="mock2-${personData.person}"></label><br>
            <button type="button" onclick="updateData('${personData.person}')">Update</button>
        `;
        dataEntryDiv.appendChild(form);
    });
}

function updateData(person) {
    const intro = document.getElementById(`intro-${person}`).value;
    const math = document.getElementById(`math-${person}`).value;
    const verbal = document.getElementById(`verbal-${person}`).value;
    const awa = document.getElementById(`awa-${person}`).value;
    const adding = document.getElementById(`adding-${person}`).value;
    const mock1 = document.getElementById(`mock1-${person}`).value;
    const mock2 = document.getElementById(`mock2-${person}`).value;

    // Update the progressData array with the new values
    const updatedData = progressData.find(item => item.person === person);
    updatedData.magooshIntro = intro;
    updatedData.magooshMath = math;
    updatedData.magooshVerbal = verbal;
    updatedData.magooshAWA = awa;
    updatedData.keepAddingBro = adding;
    updatedData.mockTest1 = mock1;
    updatedData.mockTest2 = mock2;

    // Update the charts
    updateCharts();
}

// Initialize the page
updateCharts();
renderDataEntryForm();
