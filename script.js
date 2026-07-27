const toggleButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

toggleButton?.addEventListener('click', () => {
  mainNav?.classList.toggle('active');
});