const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

import { random, generate, encode } from '../src/main.js'

suite
  .add('random()', () => {
    let { id, arrangement } = random()
  })
  .add('random(true)', () => {
    let { id, arrangement } = random(true)
  })
  .add('generate()', () => {
    let arrangement = generate()
    let id = encode(arrangement)
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log('Fastest is ' + suite.filter('fastest').map('name'))
  })
  .run({ async: true })
