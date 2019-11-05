import resolve from 'rollup-plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import buble from '@rollup/plugin-buble'
import pkg from './package.json'

const pluginsUMD = [
  replace({ 'process.browser': true }),
  resolve(),
  commonjs(),
  buble({ exclude: 'node_modules/**' }),
]

export default [
  // Complete browser-friendly UMD build
  {
    input: 'src/main.js',
    output: {
      name: 'Fischer960',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: pluginsUMD,
  },
  // Lightweight browser-friendly UMD build without lookup based functions
  {
    input: 'src/light.js',
    output: {
      name: 'Fischer960',
      file: pkg.browser.replace('.umd.js', '.umd.light.js'),
      format: 'umd',
    },
    plugins: pluginsUMD,
  },
  // Server-friendly CommonJS (for Node) and ES module (for bundlers) build
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      replace({ 'process.browser': false }),
      buble({ exclude: 'node_modules/**' }),
    ],
  },
]
