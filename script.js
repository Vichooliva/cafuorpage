// Menú móvil
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Showcase de producto: cambia la captura según la pestaña
const showTabs = document.querySelectorAll('.show-tab');
const screenImg = document.getElementById('screen-img');
const screenLabel = document.getElementById('screen-label');

const screenNames = {
  chat: 'chat',
  pedidos: 'pedidos',
  clientes: 'clientes',
  cobros: 'cobros',
  finanzas: 'finanzas',
  conciliacion: 'conciliación',
  ajustes: 'ajustes',
};

showTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const screen = tab.dataset.screen;
    if (!screen || !screenImg) return;

    showTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    screenImg.src = `assets/screens/${screen}.png`;
    screenImg.alt = `Pantalla de ${screenNames[screen] || screen} del panel Champis`;
    if (screenLabel) screenLabel.textContent = screenNames[screen] || screen;
  });
});

// Formulario de contacto
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || 'cliente';

    message.textContent = `¡Gracias, ${name}! Recibimos tu mensaje y te contactaremos pronto.`;
    form.reset();
  });
}
