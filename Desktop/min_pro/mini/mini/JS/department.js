function loadContent() {
  // Directly show the inventory actions without selecting a department
  showInventoryActions();
}

function showInventoryActions() {
  document.getElementById('content-display').innerHTML = `
    <h2>Inventory Status</h2>
    <p>Select an action to manage inventory:</p>
    <div class="button-group">
      <button class="view-btn" onclick="viewInventory()">
        <i class="fas fa-eye"></i> View Inventory
      </button>
      <button class="place-btn" onclick="placeOrder()">
        <i class="fas fa-plus"></i> Place Order
      </button>
      <button class="report-btn" onclick="generateReport()">
        <i class="fas fa-file-alt"></i> Generate Report
      </button>
    </div><br><br>
  
  `;

}
function viewInventory() {
  alert('Viewing inventory.');
  window.location.href = 'view_inventory.html';
  // Implement the logic for viewing inventory here
}

function placeOrder() {
  alert('Placing order.');
  window.location.href = 'order.html';
  // Implement the logic for placing an order here
}

function generateReport() {
  alert('Generating report.');
  window.location.href = 'view-report.html';
  // Implement the logic for generating the report here
}


