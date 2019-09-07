import addEvents from './js/events';
import './css/main.scss';

let root = null;
let slides = null;
let currentSlide = 0;

export function init(options) {
  //parameters provided during initialization
  if (options) {
    if (background) document.body.style.background = background;
    if (color) document.body.style.color = color;
  }

  //getting the elements
  root = document.querySelector('.make-slides');
  slides = document.querySelectorAll('.make-slides section');

  //addEvents
}
