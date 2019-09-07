const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
  devServer: {
    port: 5500,
    contentBase: path.join(__dirname, 'public')
  }
};
