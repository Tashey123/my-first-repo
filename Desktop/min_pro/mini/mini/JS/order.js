function placeOrder() {
    const department = document.getElementById('department').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    if (item && quantity > 0) {
      // Save the order to localStorage (to simulate a database)
      let orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders.push({ department, item, quantity });
      localStorage.setItem('orders', JSON.stringify(orders));

      alert('Order placed successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  }