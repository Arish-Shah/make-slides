import '../css/main.scss';

let root = null;
let slides = null;

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
    if (slideNumber < 0 || slideNumber === NaN || slideNumber === undefined) {
      window.location.replace('/#/');
    } else if (hash === '#/0') {
      window.location.replace('/#/');
    } else if (slideNumber >= slides.length) {
      window.location.replace('/#/' + (slides.length - 1));
    } else renderSlide(slideNumber);
  }
}

function keyUpHandler(event) {
  let currentSlide = window.location.hash.slice(2);
  currentSlide = currentSlide === '' ? 0 : parseInt(currentSlide);

  if (event.keyCode === 37) {
    if (currentSlide > 0) {
      currentSlide -= 1;
      window.location.replace('/#/' + currentSlide);
    }
  } else if (event.keyCode === 39) {
    if (currentSlide < slides.length - 1) {
      currentSlide += 1;
      window.location.replace('/#/' + currentSlide);
    }
  }
}

function setOptions(options) {
  if (options) {
    if (options.bgColor) {
      document.body.style.backgroundColor = options.bgColor;
    }
    if (options.animationDuration) {
      slides.forEach(
        slide =>
          (slide.style.animationDuration = options.animationDuration / 1000 + 's')
      );
    }
  }
}

function renderSlide(slideNumber) {
  clearView();
  root.appendChild(slides[slideNumber]);

  //checking the data-background attribute
  const currentSlide = document.querySelector('.make-slides section');
  if (currentSlide.hasAttribute('data-bg')) {
    if (/#\d{3,6}/.test(currentSlide.getAttribute('data-bg'))) {
      currentSlide.style.backgroundColor = currentSlide.getAttribute('data-bg');
    }
  }

  //checking the ul with .appear
  const appears = document.querySelectorAll('.appear li');
  if (appears.length > 0) {
    let li = 0;

    for (let appear of appears) {
      if (appear.style.display === 'list-item') {
        li += 1;
      }
    }

    window.onkeyup = function(event) {
      if (event.keyCode === 37) {
        if (li > 0) {
          li -= 1;
          appears[li].classList.add('hide');
          setTimeout(() => {
            appears[li].style.display = 'none';
          }, 90);
        } else {
          const hash = window.location.hash.slice(2);
          const currentSlide = hash === '' ? 0 : this.parseInt(hash);
          if (currentSlide > 0) {
            window.location.replace('/#/' + (currentSlide - 1));
          }
        }
      } else if (event.keyCode === 39) {
        if (li < appears.length) {
          if (appears[li].classList.contains('hide')) {
            appears[li].classList.remove('hide');
          }
          appears[li].style.display = 'list-item';
          li += 1;
        } else {
          const hash = window.location.hash.slice(2);
          const currentSlide = hash === '' ? 0 : this.parseInt(hash);
          if (currentSlide < slides.length - 1) {
            window.location.replace('/#/' + (currentSlide + 1));
          }
        }
      }
    };
  } else {
    window.onkeyup = keyUpHandler;
  }
}

function clearView() {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}
