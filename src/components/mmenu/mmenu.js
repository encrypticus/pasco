import 'mmenu-js';
import './mmenu.scss';

const mmenu = new Mmenu('#mmenu', {
  extensions: ['position-left', 'theme-dark'],
  navbar: {
    title: '<a class="logo" href="./">Pasco</a>',
  },
  onClick: {
    close: true,
  },
});

const api = mmenu.API;
const $hamburger = $('.hamburger');

api.bind('open:before', () => {
  $hamburger.addClass('is-active');
});

api.bind('close:before', () => {
  $hamburger.removeClass('is-active');
});
