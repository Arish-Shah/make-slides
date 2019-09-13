import '../css/main.scss';

let root = null;
let slides = null;
let progress = null;
let controls = null;
let codes = null;

export function init(options) {
	//getting the elements
	root = document.querySelector('.make-slides');
	slides = document.querySelectorAll('.make-slides section');
	codes = document.querySelectorAll('.make-slides section code pre');

	if (codes.length > 0) {
		codes.forEach(code => (code.textContent = code.innerHTML.trim()));
	}

	//initialising progress bar
	progress = document.createElement('div');
	progress.id = 'progress';
	document.body.append(progress);

	//parameters provided during creation
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
	} else if (event.keyCode === 39 || event.keyCode === 32) {
		if (currentSlide < slides.length - 1) {
			currentSlide += 1;
			window.location.replace('/#/' + currentSlide);
		}
	}
}

function renderSlide(slideNumber) {
	clearView();
	root.appendChild(slides[slideNumber]);
	progress.style.width = (slideNumber / (slides.length - 1)) * 100 + 'vw';

	//checking the data-background attribute
	const currentSlide = document.querySelector('.make-slides section');
	if (currentSlide.hasAttribute('data-bg')) {
		currentSlide.style.background = currentSlide.getAttribute('data-bg');
	}

	//rendering the left-right controls
	renderControls(slideNumber);

	//checking the ul with .appear
	const appears = document.querySelectorAll('.appear li');
	if (appears.length > 0) {
		let li = 0;

		for (let appear of appears) {
			if (appear.style.opacity == 1) {
				li += 1;
			}
		}

		//overriding the default keyup function whenever .appear exists
		window.onkeyup = function(event) {
			if (event.keyCode === 37) {
				if (li > 0) {
					li -= 1;
					appears[li].style.opacity = 0;
				} else {
					const hash = window.location.hash.slice(2);
					const currentSlide = hash === '' ? 0 : this.parseInt(hash);
					if (currentSlide > 0) {
						window.location.replace('/#/' + (currentSlide - 1));
					}
				}
			} else if (event.keyCode === 39 || event.keyCode === 32) {
				if (li < appears.length) {
					if (appears[li].classList.contains('hide')) {
						appears[li].classList.remove('hide');
					}
					appears[li].style.opacity = 1;
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

function renderControls(slideNumber) {
	if (document.querySelector('#controls')) {
		document.body.removeChild(document.querySelector('#controls'));
	}

	controls = document.createElement('div');
	controls.id = 'controls';
	const leftArrow = document.createElement('a');
	const rightArrow = document.createElement('a');

	leftArrow.textContent = '‹';
	leftArrow.onclick = function() {
		dispatchEvent(new KeyboardEvent('keyup', { keyCode: 37 }));
	};
	controls.append(leftArrow);

	rightArrow.textContent = '›';
	rightArrow.onclick = function() {
		dispatchEvent(new KeyboardEvent('keyup', { keyCode: 39 }));
	};
	controls.append(rightArrow);

	if (slideNumber > 0) {
		leftArrow.style.visibility = 'visible';
	} else {
		leftArrow.style.visibility = 'hidden';
	}

	if (slideNumber < slides.length - 1) {
		rightArrow.style.visibility = 'visible';
	} else {
		rightArrow.style.visibility = 'hidden';
	}

	document.body.appendChild(controls);
}

//parameters passed during makeSlides.create({---})
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

			document.querySelectorAll(
				'.make-slides section .appear li'
			).style.transition = `opacity ${options.animationDuration / 1000}s linear`;
		}

		if (options.transition === null) {
			slides.forEach(slide => (slide.style.animation = 'none'));

			const appears = document.querySelectorAll('.make-slides section .appears li');
			if (appears.length > 0) {
				appears.forEach(li => (li.style.transition = 'none'));
			}
		}

		if (options.progressBar === false) {
			progress.style.display = 'none';
		}

		if (options.showControls === false) {
			document.querySelector('#controls').style.display = 'none';
		}
	}
}

//Removes all the child from root
//better performace than root.innerHTML = '';
function clearView() {
	while (root.firstChild) {
		root.removeChild(root.firstChild);
	}
}
