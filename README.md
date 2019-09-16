# make-slides

[![GitHub license](https://img.shields.io/github/license/Arish-Shah/make-slides?color=blue)](https://github.com/Arish-Shah/make-slides/blob/master/LICENSE) [![Build Status](https://travis-ci.com/Arish-Shah/make-slides.svg?branch=master)](https://travis-ci.com/Arish-Shah/make-slides) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

An easy-to-use JavaScript library that lets you create beautiful and interactive presentation using HTML Elements.\
[View demo](https://arish-shah.github.io/make-slides)
🌈📝🚀

## Usage

### Get Started Immediately

Just download the zip file, customize index.html and open it in a browser\
[https://arish-shah.github.io/make-slides/make-slides-latest.zip](https://arish-shah.github.io/make-slides/make-slides-latest.zip)

### Full Setup

To gain full control over the library, its styles and functions, you'll need to run the presentation from a local web server

1. **Install Node.js**

1. Clone the repository

   ```sh
   $ git clone https://github.com/Arish-Shah/make-slides.git
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

## Theming

## License

[MIT](LICENSE)
