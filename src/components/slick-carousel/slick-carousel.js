import 'jquery';
import 'slick-carousel/slick/slick';
import './slick-carousel.scss';

$('.slick-carousel').slick({
  prevArrow: '<button type="button" class="slick-carousel__btn slick-carousel__btn_prev" aria-label="Previous"><span class="mi mi-keyboard-arrow-left"></span></button>',
  nextArrow: '<button type="button" class="slick-carousel__btn slick-carousel__btn_next" aria-label="Next"><span class="mi mi-keyboard-arrow-right"></span></button>',
});
