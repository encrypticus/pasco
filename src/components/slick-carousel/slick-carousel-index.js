import 'jquery';
import 'slick-carousel/slick/slick';
import './slick-carousel.scss';

const prevArrow = `
  <button type="button" class="slick-carousel__btn slick-carousel__btn_prev slick-carousel__btn_size_lg" aria-label="Previous">
    <span class="mi mi-keyboard-arrow-left"></span>
  </button>`;

const nextArrow = `
  <button type="button" class="slick-carousel__btn slick-carousel__btn_next slick-carousel__btn_size_lg" aria-label="Next">
    <span class="mi mi-keyboard-arrow-right"></span>
  </button>`;

$('.slick-carousel.slick-carousel_btn_lg').slick({
  prevArrow,
  nextArrow,
});
