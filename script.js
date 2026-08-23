const secretButton = document.querySelector('#secretButton');
const toast = document.querySelector('.toast');
const spark = document.querySelector('.cursor-spark');

secretButton.addEventListener('click', () => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3800);
});

document.addEventListener('pointermove', (event) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  spark.style.opacity = '1';
  spark.style.left = `${event.clientX - 5}px`;
  spark.style.top = `${event.clientY - 5}px`;
});

document.addEventListener('pointerleave', () => {
  spark.style.opacity = '0';
});
