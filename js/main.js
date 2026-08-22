document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  markActiveNavLink();
  initLanguageToggle();
  initContactForm();
});

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function markActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initLanguageToggle() {
  const buttons = document.querySelectorAll('[data-lang-btn]');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-btn');
      document.body.classList.toggle('lang-en', lang === 'en');
      buttons.forEach((b) => b.classList.toggle('active', b === btn));
      localStorage.setItem('portfolio-lang', lang);
    });
  });

  const saved = localStorage.getItem('portfolio-lang');
  if (saved === 'en') {
    document.querySelector('[data-lang-btn="en"]')?.click();
  }
}

function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const status = form.querySelector('.form-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    form.querySelectorAll('.form-field').forEach((field) => {
      const input = field.querySelector('input, textarea');
      if (!input) return;

      const value = input.value.trim();
      let fieldValid = value.length > 0;

      if (input.type === 'email' && value) {
        fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }

      field.classList.toggle('invalid', !fieldValid);
      if (!fieldValid) valid = false;
    });

    if (!status) return;

    if (valid) {
      status.textContent = 'Formulário validado! O envio por e-mail será conectado no próximo sprint (Lab01S02).';
      status.classList.remove('error');
      status.classList.add('visible', 'success');
    } else {
      status.textContent = 'Verifique os campos destacados antes de enviar.';
      status.classList.remove('success');
      status.classList.add('visible', 'error');
    }
  });
}
