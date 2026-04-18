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
