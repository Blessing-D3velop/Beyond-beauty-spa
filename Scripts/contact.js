// SELECT FORM
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // GET VALUES
  const name = form.querySelector('input[type="text"]').value.trim();
  const phone = form.querySelector('input[type="tel"]').value.trim();
  const service = form.querySelector('select').value;
  const date = form.querySelector('input[type="date"]').value;

  // BASIC VALIDATION
  if (!name || !phone || !service || !date) {
    alert('Please fill in all fields.');
    return;
  }

  // FORMAT MESSAGE FOR WHATSAPP
  const message = `
Hello, I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}
  `;

  // YOUR NUMBER (NO + OR SPACES)
  const spaNumber = "27826638891";

  // OPEN WHATSAPP
  const whatsappURL = `https://wa.me/${spaNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');

  // OPTIONAL SUCCESS MESSAGE
  alert('Redirecting you to WhatsApp to confirm your booking.');

  // RESET FORM
  form.reset();
});