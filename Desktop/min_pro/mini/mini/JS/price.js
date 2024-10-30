function loadPricePage() {
    document.getElementById('content-display').innerHTML = `
      <h1>Select a Department</h1>
      <select id="departmentSelect">
        <option value="">-- Select Department --</option>
        <option value="CS">Computer Science</option>
        <option value="IT">Information Technology</option>
        <option value="EE">Electrical Engineering</option>
      </select>
      <button onclick="loadItemPage()">Proceed</button>
    `;
  }

  function loadItemPage() {
    const department = document.getElementById('departmentSelect').value;
    if (department !== '') {
      document.getElementById('content-display').innerHTML = `
        <h1>Manage Items for ${department} Department</h1>
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
    } else {
      alert('Please select a department!');
    }
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