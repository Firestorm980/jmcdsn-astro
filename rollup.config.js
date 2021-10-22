import { terser } from 'rollup-plugin-terser'

export default {
  input: 'assets/js/index.js',
  output: [
    {
      file: 'dist/assets/js/index.js',
      format: 'es',
      sourcemap: true,
      plugins: [terser()]
    }
  ]
}
