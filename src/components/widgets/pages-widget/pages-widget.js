import './pages-widget.scss';

const widgetButtons = document.querySelectorAll('.pages-widget__button');

for (let i = 0; i < widgetButtons.length; i++) {
  const btn = widgetButtons[i];

  btn.addEventListener('click', function (event) {
    const list = this.nextElementSibling;
    const btnExpand = this.querySelector('.pages-widget__icon');

    btnExpand.classList.toggle('pages-widget__icon_expanded');

    if (list.style.maxHeight) {
      list.style.maxHeight = null; // на самом деле эта строка излишня, достаточно строки ниже
      list.removeAttribute('style');
    } else {
      list.style.maxHeight = `${list.scrollHeight}px`;
    }
  });
}
