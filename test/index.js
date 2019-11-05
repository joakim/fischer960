import test from 'ava'

import {
  generate,
  encode,
  decode,
  validArrangement,
} from '../src/main.js'

import { POSITIONS } from '../src/lookup.js'

test('validArrangement() actually validates valid arrangements', t => {
  t.plan(960)

  // Validate all arrangements in the lookup table
  for (let id = 0; id < 960; id++) {
    t.true(validArrangement(POSITIONS[id]))
  }
})

test('validArrangement() actually invalidates invalid arrangements', t => {
  t.plan(3)
  t.false(validArrangement('NONONONO')) // Obviously wrong
  t.false(validArrangement('KQRNNBBR')) // Both rooks on one side of the king
  t.false(validArrangement('BNBQRNKR')) // Bishops on same colored squares
})

test('generate() returns only correct arrangements', t => {
  t.plan(960)

  // Check all 960 starting positions at random
  let cache = new Set()
  do {
    let sp = generate()
    if (cache.has(sp)) continue

    // Check against the lookup table
    t.not(POSITIONS.indexOf(sp.join('')), -1)

    cache.add(sp)
  }
  while (cache.size < 960)
})

test('decode() returns correct arrangements', t => {
  t.plan(960)

  // Check against the lookup table
  for (let id = 0; id < 960; id++) {
    let sp = decode(id)
    t.is(POSITIONS.indexOf(sp.join('')), id)
  }
})

test('encode() returns correct IDs', t => {
  t.plan(960)

  // Check against the lookup table
  for (let id = 0; id < 960; id++) {
    t.is(encode(POSITIONS[id]), id)
  }
})

test.todo('toString()')
test.todo('toArray()')
test.todo('toLowerCase()')
test.todo('toUpperCase()')
test.todo('toMirror()')
test.todo('toUnicode()')
