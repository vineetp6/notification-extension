document.addEventListener('DOMContentLoaded', () => {
    const workbookDetailsDiv = document.getElementById('workbookDetails');
    const getWorkbookInfoButton = document.getElementById('getWorkbookInfo');

    // Initialize Tableau Extension
    tableau.extensions.initializeAsync().then(() => {
        console.log('Tableau Extension Initialized');
    }).catch(err => console.error(err));

    // Fetch Workbooks Info
    getWorkbookInfoButton.addEventListener('click', () => {
        tableau.extensions.dashboardContent.dashboard.getPublishedWorkbooksAsync().then((workbooks) => {
            let workbookInfoHtml = '<h2>Your Workbooks:</h2>';
            workbooks.forEach(workbook => {
                workbookInfoHtml += `
                    <p>Workbook Name: ${workbook.name}</p>
                    <p>Location: ${workbook.contentUrl}</p>
                `;
            });
            workbookDetailsDiv.innerHTML = workbookInfoHtml;
        }).catch(err => console.error(err));
    });
});
