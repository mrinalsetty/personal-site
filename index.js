function showTab(tabName) {
    const homeContent = `
        <h1>Hey, my name is Mrinal Setty</h1>
        <h2>About me:</h2>
        <ul>
            <li>Software Engineer @ Deloitte</li>
            <li>AI | Cloud & Data Engineer | Full Stack | AzureX3</li>
            <li>Ex - CAST Software</li>
            <li>Born in 2K</li>
            <li>Living in Bangalore</li>
            <li>NIE CSE '22 grad</li>
        </ul>
        <input type="email" placeholder="Enter email..">
        <button>Join newsletter</button>
    `;
    
    const linkedinContent = `
        <!-- LinkedIn Badge Container -->
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="mrinalsetty" data-version="v1"></div>
    `;

    const tabContent = document.getElementById('tab-content');
    
    // Hide all tab contents
    tabContent.innerHTML = '';

    // Display the selected tab content
    if (tabName === 'home') {
        tabContent.innerHTML = homeContent;
    } else if (tabName === 'linkedin') {
        tabContent.innerHTML = linkedinContent;
    }
}
