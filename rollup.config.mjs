import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import buble from '@rollup/plugin-buble'
import pkg from './package.json' assert { type: 'json' }

export default [
  // Browser-friendly build in UMD format
  {
    input: 'src/main.mjs',
    output: {
      name: 'Fischer960',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [resolve(), commonjs(), buble()],
  },
  // Server-friendly builds in CommonJS (for Node) and ES module (for bundlers)
  {
    input: 'src/main.mjs',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [buble()],
  },
]
