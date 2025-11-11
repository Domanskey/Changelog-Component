import './style.css'

const items = document.querySelectorAll('.list__item');

for (let i = 0; i < items.length; i++) {
  setTimeout(() => {
    items[i].classList.add('visible');
  }, i * 100); // Delay each item's appearance by 100ms
}
