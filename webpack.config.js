const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'make-slides.js',
    library: 'makeSlides',
    libraryTarget: 'umd'
  },
  devServer: {
    port: 5500,
    contentBase: path.join(__dirname, 'public')
  }
};
