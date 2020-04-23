import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/app.js',
  output: [
    {
      file: 'dist/make-slides.js',
      format: 'esm'
    },
    {
      file: 'dist/make-slides.min.js',
      format: 'esm',
      plugins: [terser()]
    }
  ]
};
