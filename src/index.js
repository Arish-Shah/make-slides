let makeSlides = null;
let slides = null;

export function initialize() {
  makeSlides = document.querySelector('.make-slides');
  slides = document.querySelectorAll('.make-slides section');

  //Removing all the slide <section> from div.make-slides
  while (makeSlides.firstChild) {
    makeSlides.removeChild(makeSlides.firstChild);
  }

  eventListeners();
}

function eventListeners() {
  document.onkeyup = function(event) {
    if (event.keyCode === 39) {
      console.log('next slide');
    } else if (event.keyCode === 37) {
      console.log('prev slide');
    }
  };
}
