import '../css/main.scss';

let root = null;
let slides = null;
let currentSlide = 0;

export function init(options) {
  //getting the elements
  root = document.querySelector('.make-slides');
  slides = document.querySelectorAll('.make-slides section');

  //parameters provided during initialization
  setOptions(options);

  //events
  window.onload = window.onhashchange = loadAndHashChangeHandler;
  window.onkeyup = keyUpHandler;
}

function loadAndHashChangeHandler() {
  const hash = window.location.hash;
  if (!hash) {
    window.location.replace('/#/');
  } else if (/#\/[0-9]*$/i.exec(hash)) {
    const slideNumber = hash.slice(2) === '' ? 0 : parseInt(hash.slice(2));
    if (slideNumber < 0) {
      window.location.replace('/#/');
    } else if (hash === '#/0') {
      window.location.replace('/#/');
    } else if (slideNumber > slides.length) {
      window.location.replace('/#/' + (slides.length - 1));
    } else renderSlide(slideNumber);
  }
}

function keyUpHandler(event) {
  if (event.keyCode === 37) {
    if (currentSlide > 0) {
      currentSlide--;
      window.location.replace('/#/' + currentSlide);
    }
  } else if (event.keyCode === 39) {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      window.location.replace('/#/' + currentSlide);
    }
  }
}

function setOptions(options) {}

function renderSlide(slideNumber) {
  clearView();
  root.appendChild(slides[slideNumber]);
}

function clearView() {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}
