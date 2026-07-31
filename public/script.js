const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-interest]').forEach((link) => {
  link.addEventListener('click', () => {
    const select = document.querySelector('[name="entry.1819354482"]');
    if (select) select.value = link.dataset.interest === 'Business insurance' ? 'Business Insurance' : link.dataset.interest === 'Life insurance' ? 'Life Insurance' : '';
  });
});

document.querySelector('#coverage-form')?.addEventListener('submit', (event) => {
  const form = event.currentTarget;
  if (form.elements.companyWebsite.value) {
    event.preventDefault();
    return;
  }

  const button = form.querySelector('button[type="submit"]');
  const note = document.querySelector('#form-note');
  button.disabled = true;
  button.textContent = 'Sending…';
  note.textContent = 'Sending your request directly to Rini Agency…';

  window.setTimeout(() => {
    form.reset();
    button.disabled = false;
    button.textContent = 'Send My Request';
    note.textContent = 'Thank you! Your request was sent. TJ will follow up as soon as possible.';
  }, 1200);
});

document.querySelector('#year').textContent = new Date().getFullYear();
