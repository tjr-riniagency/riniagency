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
    const select = document.querySelector('[name="interest"]');
    if (select) select.value = link.dataset.interest === 'Business insurance' ? 'Business insurance' : link.dataset.interest === 'Life insurance' ? 'Life insurance' : '';
  });
});

document.querySelector('#coverage-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Website coverage request: ${data.get('interest')}`;
  const body = [
    `Name: ${data.get('firstName')} ${data.get('lastName')}`,
    `Email: ${data.get('email')}`,
    `Phone: ${data.get('phone')}`,
    `Coverage interest: ${data.get('interest')}`,
    '',
    'Additional information:',
    data.get('message') || 'None provided'
  ].join('\n');
  window.location.href = `mailto:tjr@riniagency.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-note').textContent = 'Your prepared email is opening now. Send it to complete your request.';
});

document.querySelector('#year').textContent = new Date().getFullYear();
