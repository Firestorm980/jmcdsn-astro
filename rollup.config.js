import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'assets/js/index.js',
  output: [
    {
      file: 'dist/assets/js/index.js',
      format: 'es',
      sourcemap: true,
      plugins: [terser()]
    }
  ],
  plugins: [nodeResolve(), commonjs()]
}
