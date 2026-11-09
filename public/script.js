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


});

document.querySelector('#year').textContent = new Date().getFullYear();
