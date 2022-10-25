import { random, encode, decode, isValidArrangement } from '../src/main'

import { POSITIONS } from '../src/lookup'

test('isValidArrangement() actually validates valid arrangements', () => {
  expect.assertions(960)

  // Validate all arrangements in the lookup table
  for (let id = 0; id < 960; id++) {
    expect(isValidArrangement(POSITIONS[id])).toBe(true)
  }
})

test('isValidArrangement() actually invalidates invalid arrangements', () => {
  expect.assertions(3)
  expect(isValidArrangement('NONONONO')).toBe(false) // Obviously wrong
  expect(isValidArrangement('KQRNNBBR')).toBe(false) // Both rooks on one side of the king
  expect(isValidArrangement('BNBQRNKR')).toBe(false) // Bishops on same colored squares
})

test('random() returns only correct arrangements', () => {
  expect.assertions(960)

  // Check all 960 starting positions at random
  let cache = new Set()
  do {
    let sp = random()
    if (cache.has(sp.id)) continue

    // Check against the lookup table
    expect(POSITIONS.indexOf(sp.arrangement.join(''))).not.toBe(-1)

    cache.add(sp.id)
  } while (cache.size < 960)
})

test('decode() returns correct arrangements', () => {
  expect.assertions(960)

  // Check against the lookup table
  for (let id = 0; id < 960; id++) {
    let sp = decode(id)
    expect(POSITIONS.indexOf(sp.join(''))).toBe(id)
  }
})

test('encode() returns correct IDs', () => {
  expect.assertions(960)

  // Check against the lookup table
  for (let id = 0; id < 960; id++) {
    expect(encode(POSITIONS[id])).toBe(id)
  }
})

test.todo('toString()')
test.todo('toArray()')
test.todo('toLowerCase()')
test.todo('toUpperCase()')
test.todo('toMirror()')
test.todo('toUnicode()')
test.todo('isValidID()')
