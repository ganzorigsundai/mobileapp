window.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item01, .item02, .item03, .item04');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('fadedown');
      }, 200 * index);
    });
  });