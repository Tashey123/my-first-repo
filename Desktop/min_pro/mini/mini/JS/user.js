

function loadUsers() {
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.status}</td>
            <td>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function searchUsers() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue) ||
        user.role.toLowerCase().includes(searchValue) ||
        user.status.toLowerCase().includes(searchValue)
    );
    
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';
    filteredUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.status}</td>
            <td>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function openAddUserModal() {
    document.getElementById('modalTitle').innerText = 'Add User';
    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userRole').value = 'Admin';
    document.getElementById('userStatus').value = 'Active';
    document.getElementById('userModal').style.display = 'block';
}

function closeUserModal() {
    document.getElementById('userModal').style.display = 'none';
}

function editUser(index) {
    const user = users[index];
    document.getElementById('modalTitle').innerText = 'Edit User';
    document.getElementById('userName').value = user.name;
    document.getElementById('userEmail').value = user.email;
    document.getElementById('userRole').value = user.role;
    document.getElementById('userStatus').value = user.status;
    document.getElementById('userModal').style.display = 'block';
    
    document.getElementById('saveUserBtn').onclick = function() {
        users[index] = {
            name: document.getElementById('userName').value,
            email: document.getElementById('userEmail').value,
            role: document.getElementById('userRole').value,
            status: document.getElementById('userStatus').value
        };
        closeUserModal();
        loadUsers();
    };
}

function deleteUser(index) {
    users.splice(index, 1);
    loadUsers();
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUser = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        role: document.getElementById('userRole').value,
        status: document.getElementById('userStatus').value
    };
    users.push(newUser);
    closeUserModal();
    loadUsers();
});

// Initial load of users
window.onload = loadUsers;
