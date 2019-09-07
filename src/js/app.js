import '../css/main.scss';

let root = null;
let slides = null;
let currentSlide = 0;

export function init(options) {
  //parameters provided during initialization
  if (options) {
    if (background) document.body.style.background = background;
  }

  //getting the elements
  root = document.querySelector('.make-slides');
  slides = document.querySelectorAll('.make-slides section');

  renderSlide();

  window.onkeyup = keyUpEvent;
}

function renderSlide() {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.appendChild(slides[currentSlide]);
}

function keyUpEvent(event) {
  if (event.keyCode === 37) {
    console.log('prev slide');
  } else if (event.keyCode === 39) {
    console.log('next slide');
  }
}
