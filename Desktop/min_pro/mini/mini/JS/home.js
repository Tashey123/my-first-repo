function loadContent(section) {
    let content = '';
  
    switch (section) {
      case 'Department':
        content = `
          <h2>Department Page</h2>
          <p>Manage and view department details and information here.</p>
        `;
        break;
      case 'price':
        content = `
          <h2>Price Page</h2>
          <p>Check the latest prices for items in the inventory.</p>
        `;
        break;
      case 'order':
        content = `
          <h2>Order Page</h2>
          <p>Place orders for new inventory items and track existing ones.</p>
        `;
        break;
      case 'user':
        content = `
          <h2>User Page</h2>
          <p>Manage user accounts and roles within the inventory system.</p>
        `;
        break;
      
      case 'management':
        content = `
          <h2>Manage Page</h2>
          <p>Manage inventory operations and administrative settings.</p>
        `;
        break;
      case 'interface':
        content = `
          <h2>Interface Page</h2>
          <p>Customize and manage the user interface settings of the dashboard.</p>
        `;
        break;
      case 'report':
        content = `
          <h2>Report Page</h2>
          <p>Generate and view detailed inventory reports and analytics.</p>
        `;
        break;
      default:
        content = `
          <h2>Welcome to the Inventory Status Dashboard</h2>
          <p>Select an option from the sidebar to view details.</p>
        `;
    }
  
    document.getElementById('content-display').innerHTML = content;
  }
  // Example of dynamically adding a notification
function addNotification(message) {
  const notificationList = document.getElementById('notification-list');
  const newNotification = document.createElement('li');
  newNotification.textContent = message;
  notificationList.appendChild(newNotification);
}

// Example function to simulate new order notification
function simulateNewOrder() {
  addNotification('New item order has been placed!');
}

// Simulate new order notification after 5 seconds for demo purposes
setTimeout(simulateNewOrder, 5000); // This is just for testing
