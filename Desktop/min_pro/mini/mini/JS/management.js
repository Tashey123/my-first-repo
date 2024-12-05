// Load the inventory management view directly
function loadInventoryPage() {
  document.getElementById("manageInventory").style.display = "block";
  loadInventory(); // Load any existing inventory items from localStorage
}

// Add inventory item to the table and save it to localStorage
function addInventory() {
  const itemName = document.getElementById("itemName").value;
  const itemQuantity = document.getElementById("itemQuantity").value;

  if (itemName && itemQuantity) {
    const inventoryTableBody = document.getElementById("inventoryTableBody");

    // Add the new item to the table
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${itemName}</td>
        <td>${itemQuantity}</td>
        <td><button onclick="removeItem(this)">Remove</button></td>
    `;
    inventoryTableBody.appendChild(row);

    // Save the new item in localStorage
    const items = JSON.parse(localStorage.getItem("inventoryItems") || "[]");
    items.push({ itemName, itemQuantity });
    localStorage.setItem("inventoryItems", JSON.stringify(items));

    // Clear input fields
    document.getElementById("itemName").value = '';
    document.getElementById("itemQuantity").value = '';
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

// Initial call to load the inventory page
loadInventoryPage();
