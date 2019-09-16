# make-slides

[![GitHub license](https://img.shields.io/github/license/Arish-Shah/make-slides?color=blue)](https://github.com/Arish-Shah/make-slides/blob/master/LICENSE) [![Build Status](https://travis-ci.com/Arish-Shah/make-slides.svg?branch=master)](https://travis-ci.com/Arish-Shah/make-slides) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

An easy-to-use JavaScript library that lets you create beautiful and interactive presentation using HTML Elements.\
[View demo](https://arish-shah.github.io/make-slides)
🌈📝🚀

## Usage

### Get Started Immediately

Just download the zip file, customize index.html and open it in a browser\
[arish-shah.github.io/make-slides/ms.zip](https://arish-shah.github.io/make-slides/ms.zip)

### Full Setup

To gain full control over the library, its styles and functions, you'll need to run the presentation from a local web server

1. **Install Node.js**

1. Clone the repository

   ```sh
   $ git clone https://github.com/arish/make-slides.git
   ```

1. Navigate to the folder
   ```sh
   $ cd make-slides
   ```
1. Install dependencies
   ```sh
   $ npm install
   ```
1. Start the development server
   ```sh
   $ npm start
   ```

### Folder Structure

- **public/** index.html file containing the presentation
- **src/css/** Core library styles
- **src/js/** Core library scripts

## Markup

Each parent `<section>` in `.make-slides` is an individual slide

```html
<html>
	<head>
		<script src="./js/make-slides.js"></script>
	</head>
	<body>
		<div class="make-slides">
			<section>First Slide</section>
			<section>Second Slide</section>
		</div>
		<script>
			makeSlides.init();
		</script>
	</body>
</html>
```

## Configuration

In order to change the default behaviour, configuration values can be provided. They are optional, and if not provided will default to the following values.

```javascript
makeSlides.init({

	// Background color of the presentation
	bgColor: '#121d23',

	//Change the animation duration for slide transition
	animationDuration: 100,

	//To remove the slide transition animation
	transition: null

	//Show/Hide the bottom progress bar
	progressBar: true

	//Show/Hide the slide controls
	controls: true

});
```

## Theming

A custom theme can be used by importing them in your `main.scss` file in `src/css` folder. Make sure to get rid of the default style import.

```scss
@import './themes/yellow.scss';
```

### Attributes

To change the background of individual slides, use the attribute `data-bg`

```html
<div class="make-slides">
	<section data-bg="#fd0">
		<!-- Slide with yellow background -->
	</section>

	<section data-bg="linear-gradient(to right, #fd0, #ff0)">
		<!-- Slide with gradient background -->
	</section>

	<section data-bg="url(./assets/image.jpg)">
		<!-- Slide with a custom image as background -->
	</section>
</div>
```

## License

[MIT](LICENSE)
