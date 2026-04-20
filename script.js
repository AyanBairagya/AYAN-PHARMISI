function callPharmacy() {
  // Replace with your pharmacy’s real phone number
  window.location.href = "tel:7980243540";
}

function openWhatsApp() {
  // Replace with your pharmacy’s WhatsApp number (with country code)
  const phoneNumber = "7980243540"; // 91 = India code + your number
  const message = "hi ayan";
  
  // Encode the message for URL
  const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  
  // Open WhatsApp chat
  window.location.href = url;
}
 // JavaScript to handle adding new products
   const form = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    // Add new product
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const price = document.getElementById('price').value;
      const quantity = document.getElementById('quantity').value;

      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;
      productList.appendChild(newRow);

      form.reset();
    });

    // Handle Edit and Delete clicks
    productList.addEventListener('click', function(e) {
      if (e.target.classList.contains('delete-btn')) {
        // Delete row
        e.target.closest('tr').remove();
      }

      if (e.target.classList.contains('edit-btn')) {
        // Edit row
        const row = e.target.closest('tr');
        const name = row.children[0].textContent;
        const price = row.children[1].textContent;
        const quantity = row.children[2].textContent;

        // Fill form with existing values
        document.getElementById('name').value = name;
        document.getElementById('price').value = price;
        document.getElementById('quantity').value = quantity;

        // Remove the old row so updated values can be re-added
        row.remove();
      }
    });







    



   
