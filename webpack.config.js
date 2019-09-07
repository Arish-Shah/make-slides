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
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    port: 5500,
    contentBase: path.join(__dirname, 'public')
  }
};
