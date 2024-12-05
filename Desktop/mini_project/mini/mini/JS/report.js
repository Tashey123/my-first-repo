function showContent(contentType) {
    const mainContent = document.getElementById('mainContent');
    
    if (contentType === 'interface') {
        mainContent.innerHTML = `
            <h1>Customize the Interface</h1>
            <p>In this section, you can customize the layout and appearance of the inventory system:</p>
            <ul>
                <li><strong>Change Themes:</strong> Switch between light or dark themes for better visibility.</li>
                <li><strong>Customize Dashboard:</strong> Add or remove widgets for easier management.</li>
                <li><strong>User Roles:</strong> Customize access based on user roles like Admin, Staff, etc.</li>
            </ul>
        `;
    } else if (contentType === 'report') {
        mainContent.innerHTML = `
            <h1>Inventory Reports</h1>
            <p>Here you can view reports for managing the inventory:</p>
            <table>
                <thead>
                    <tr>
                        <th>Report Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Stock Report</td>
                        <td>View the current stock levels of all inventory items across the college.</td>
                    </tr>
                    <tr>
                        <td>Purchase Orders Report</td>
                        <td>Check all the purchase orders made for various departments.</td>
                    </tr>
                    <tr>
                        <td>Usage Report</td>
                        <td>Monitor how the inventory is being utilized by departments.</td>
                    </tr>
                    <tr>
                        <td>Supplier Report</td>
                        <td>Analyze the performance of suppliers in terms of delivery time and quality.</td>
                    </tr>
                    <tr>
                        <td>Financial Report</td>
                        <td>Track the total spending on inventory for the college over different periods.</td>
                    </tr>
                </tbody>
            </table>
        `;
    } else {
        mainContent.innerHTML = `
            <h1>Welcome to the Inventory Status Dashboard</h1>
            <p>Select an option from the sidebar to view details.</p>
        `;
    }
}