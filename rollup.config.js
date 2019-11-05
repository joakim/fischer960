import resolve from 'rollup-plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import buble from '@rollup/plugin-buble'
import pkg from './package.json'

const plugins = [buble({ exclude: 'node_modules/**' })]

export default [
  // Browser-friendly build in UMD format
  {
    input: 'src/main.js',
    output: {
      name: 'Fischer960',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      replace({ 'process.browser': true }),
      resolve(),
      commonjs(),
      ...plugins,
    ],
  },
  // Server-friendly builds in CommonJS (for Node) and ES module (for bundlers)
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [replace({ 'process.browser': false }), ...plugins],
  },
]
