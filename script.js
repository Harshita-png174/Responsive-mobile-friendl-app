// Small accessible nav toggle for mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const opened = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', opened);
});

// Close nav if user resizes to desktop size
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Close nav on Escape key for accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
