function loadItemPage() {
  document.getElementById('content-display').innerHTML = `
    <h1>Manage Items</h1>
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody id="itemTable">
        <tr>
          <td><input type="text" placeholder="Enter item"></td>
          <td><input type="number" placeholder="Enter price"></td>
          <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <button onclick="addItem()">Add Item</button>
  `;
}

function addItem() {
  const table = document.getElementById('itemTable');
  const newRow = table.insertRow();
  newRow.innerHTML = `
    <td><input type="text" placeholder="Enter item"></td>
    <td><input type="number" placeholder="Enter price"></td>
    <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
  `;
}

function deleteRow(btn) {
  const row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Initial call to load the table directly
loadItemPage();
