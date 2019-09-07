import '../css/main.scss';

let root = null;
let slides = null;
let totalSlides = 0;
let currentSlide = 0;

export function init(options) {
  //parameters provided during initialization
  if (options) {
    if (options.bgColor) {
      document.body.style.background = options.bgColor;
    }
  }

  //getting the elements
  root = document.querySelector('.make-slides');
  slides = document.querySelectorAll('.make-slides section');
  totalSlides = slides.length;

  //event handlers
  window.onload = loadHandler;
  window.onhashchange = hashChangeHandler;
  window.onkeyup = keyUpHandler;
}

function loadHandler() {
  const hash = window.location.hash;
  if (!hash) {
    window.location.hash = '/slide-1';
  }
}

function hashChangeHandler(event) {
  const hash = window.location.hash;
  const prevSlideNumber = event.oldURL.split('#')[1].slice(7);
  const currentSlideNumber = hash.slice(8);
}

function keyUpHandler(event) {
  if (event.keyCode === 37) {
    console.log('prev');
  } else if (event.keyCode === 39) {
    console.log('next');
  }
}
