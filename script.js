const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || 'cliente';

    message.textContent = `Gracias, ${name}. Hemos recibido tu mensaje y te contactaremos pronto.`;
    form.reset();
  });
}
