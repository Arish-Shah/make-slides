const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/make-slides.js',
    library: 'makeSlides',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new CopyPlugin([{ from: 'public' }])],
  devServer: {
    port: 5500,
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
  },
};
