const btn = document.querySelector('.btn-header');
const main = document.querySelector('.main');

btn.addEventListener('click', () => main.scrollIntoView({
  behavior: 'smooth',
}));
