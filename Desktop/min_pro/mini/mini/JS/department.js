function loadContent(section) {
  if (section === 'department') {
    document.getElementById('content-display').innerHTML = `
      <h2>Select a Department</h2>
      <label for="departmentSelect">Department:</label>
      <select id="departmentSelect" onchange="promptEnrollmentCode()">
        <option value="">--Select Department--</option>
        <option value="B.E. in Power Engineering">B.E. in Power Engineering</option>
        <option value="B.E. Mechanical Engineering">B.E. Mechanical Engineering</option>
        <option value="Diploma in Civil Engineering">Diploma in Civil Engineering</option>
        <option value="Diploma in Computer Systems">Diploma in Computer Systems</option>
      </select>
      <div id="enrollmentPrompt" style="margin-top: 20px;"></div>
    `;
  }
}

function promptEnrollmentCode() {
  const selectedDepartment = document.getElementById('departmentSelect').value;

  if (selectedDepartment) {
    document.getElementById('enrollmentPrompt').innerHTML = `
      <label for="enrollmentCode">Enter Enrollment Code for ${selectedDepartment}:</label>
      <input type="password" id="enrollmentCode" placeholder="Enter Code" />
      <button onclick="submitEnrollmentCode()">Submit</button>
    `;
  } else {
    document.getElementById('enrollmentPrompt').innerHTML = '';
  }
}

function submitEnrollmentCode() {
  const code = document.getElementById('enrollmentCode').value;
  const selectedDepartment = document.getElementById('departmentSelect').value;

  if (code) {
    alert(`Enrollment Code '${code}' submitted successfully for ${selectedDepartment}!`);
    showInventoryActions(selectedDepartment);
  } else {
    alert("Please enter an enrollment code.");
  }
}

function showInventoryActions(department) {
  document.getElementById('content-display').innerHTML = `
    <h2>${department} Inventory Status</h2>
    <p>Select an action for the ${department} department:</p>
    <div class="button-group">
      <button class="view-btn" onclick="viewInventory('${department}')">
        <i class="fas fa-eye"></i> View Inventory
      </button>
      <button class="place-btn" onclick="placeOrder('${department}')">
        <i class="fas fa-plus"></i> Place Order
      </button>
      <button class="report-btn" onclick="generateReport('${department}')">
        <i class="fas fa-file-alt"></i> Generate Report
      </button>
    </div><br><br>
    <a href="home2.html"><button id="backButton" onclick="goBack()">Back</button></a>
  `;

  // Style the Back button using JavaScript
  const backButton = document.getElementById('backButton');
  
  backButton.style.backgroundColor = '#dc3545'; // Set background color
  backButton.style.color = '#fff'; // Set text color
  backButton.style.padding = '10px'; // Set padding
  backButton.style.border = 'none'; // Remove border
  backButton.style.borderRadius = '5px'; // Round corners
  backButton.style.cursor = 'pointer'; // Change cursor on hover
  backButton.style.fontSize = '16px'; // Set font size
  backButton.style.marginTop = '10px'; // Add margin at the top

  backButton.onmouseover = function() {
    backButton.style.backgroundColor = '#c82333'; // Darker background on hover
  };

  backButton.onmouseout = function() {
    backButton.style.backgroundColor = '#dc3545'; // Reset background color
  };

  backButton.onclick = goBack; // Set click event

}
function viewInventory(department) {
  alert(`Viewing inventory for ${department}.`);
  window.location.href = 'view_inventory.html';
  // Implement the logic for viewing inventory here
}

function placeOrder(department) {
  alert(`Placing order for ${department}.`);
  window.location.href = 'order.html';
 
  // Implement the logic for placing an order here
}

function generateReport(department) {
  alert(`Generating report for ${department}.`);
  // Implement the logic for generating the report here
}



