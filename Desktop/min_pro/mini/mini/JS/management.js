// Show the department selection view
function showDepartmentSelection() {
  document.getElementById("departmentSelection").style.display = "block";
  document.getElementById("manageInventory").style.display = "none";
}

// Navigate to the manage inventory view after selecting a department
function navigateToInventory() {
  const departmentSelect = document.getElementById("departmentSelect");
  const selectedDepartment = departmentSelect.options[departmentSelect.selectedIndex].text;

  if (departmentSelect.value) {
      document.getElementById("selectedDepartment").textContent = selectedDepartment;
      document.getElementById("departmentSelection").style.display = "none";
      document.getElementById("manageInventory").style.display = "block";
      loadInventory();
  } else {
      alert("Please select a department.");
  }
}

// Add inventory item to table and save it to localStorage
function addInventory() {
  const itemName = document.getElementById("itemName").value;
  const itemQuantity = document.getElementById("itemQuantity").value;
  const itemPrice = document.getElementById("itemPrice").value;

  if (itemName && itemQuantity && itemPrice) {
      const inventoryTableBody = document.getElementById("inventoryTableBody");

      // Add the new item to the table
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${itemName}</td>
          <td>${itemQuantity}</td>
          <td>${itemPrice}</td>
          <td><button onclick="removeItem(this)">Remove</button></td>
      `;
      inventoryTableBody.appendChild(row);

      // Save the new item in localStorage
      const items = JSON.parse(localStorage.getItem("inventoryItems") || "[]");
      items.push({ itemName, itemQuantity, itemPrice });
      localStorage.setItem("inventoryItems", JSON.stringify(items));

      // Clear input fields
      document.getElementById("itemName").value = '';
      document.getElementById("itemQuantity").value = '';
      document.getElementById("itemPrice").value = '';
  } else {
      alert("Please fill in all fields.");
  }
}

// Load inventory items from localStorage and display in table
function loadInventory() {
  const items = JSON.parse(localStorage.getItem("inventoryItems") || "[]");
  const inventoryTableBody = document.getElementById("inventoryTableBody");

  inventoryTableBody.innerHTML = ""; // Clear table before loading

  items.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${item.itemName}</td>
          <td>${item.itemQuantity}</td>
          <td>${item.itemPrice}</td>
          <td><button onclick="removeItem(this)">Remove</button></td>
      `;
      inventoryTableBody.appendChild(row);
  });
}

// Remove an inventory item from the table and localStorage
function removeItem(button) {
  const row = button.parentElement.parentElement;
  const itemName = row.cells[0].textContent;
  row.remove();

  // Remove from localStorage
  const items = JSON.parse(localStorage.getItem("inventoryItems") || "[]");
  const updatedItems = items.filter(item => item.itemName !== itemName);
  localStorage.setItem("inventoryItems", JSON.stringify(updatedItems));
}

// Go back to department selection view
function goBackToSelection() {
  document.getElementById("departmentSelection").style.display = "block";
  document.getElementById("manageInventory").style.display = "none";
}