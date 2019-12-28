# Fischer960

A Fischer Random Chess / Chess960 library for JS based on algorithms. No large lookup tables needed.

```js
let sp = fischer.random()

sp.id // -> 518
sp.arrangement // -> ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
```

## Install

With Yarn: `yarn add fischer960`  
With npm: `npm install fischer960`

## Use

fischer960 is available as CJS for Node, ESM for bundlers and UMD for legacy environments. A bundler (Webpack/Rollup/etc) is recommended for use in browsers.

One can import only the functions to be used:

```js
import { random, toString, toUnicode } from 'fischer960'
```

But importing the whole library will let you write `fischer.random()` 😎

```js
import * as fischer from 'fischer960'
let sp = fischer.random()
```

A few things to be aware of:

- IDs are zero-indexed (0-959, the standard starting position being 518)
- `random()` and `decode()` return the arrangement as an array (to convert the array to a string, see `toString()`)
- All `arrangement` arguments can take either an array (`['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']`) or a string (`'BBQNNRKR'`)

### Main functions

#### `random(strong)`

Generates a random starting position, returning its ID and arrangement of pieces.

If the optional `strong` argument is set to `true`, it will use a cryptographically strong pseudo-random number generator that is slower, but more random. Defaults to `false`.

```js
random() // -> eg. { id: 518, arrangement: ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'] }
```

#### `randomID(strong)`

Picks a random starting position's ID.

If the optional `strong` argument is set to `true`, it will use a cryptographically strong pseudo-random number generator that is slower, but with higher entropy. Defaults to `false`.

```js
randomID() // -> eg. 518
```

#### `decode(id)`

Given an ID, returns the starting position's arrangement of pieces, or `false` if the ID is invalid.

```js
decode(518) // -> eg. ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
```

#### `encode(arrangement)`

Given an arrangement of pieces, returns the starting position's ID, or `-1` if the arrangement is invalid.

```js
encode('RKRNNQBB') // -> 959
```

### Helper functions

A set of helper functions for manipulating arrangements are also provided.

Except for `toString()` and `toArray()`, these functions return the same type as was provided (if you pass a string you get a string, if you pass an array you get an array). Except for `toLowerCase()` and `toUpperCase()`, these also return the same case as was provided.

#### `toString(arrangement)`

Converts an arrangement of pieces from `Array` to `String`.

```js
toString(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> 'BBQNNRKR'
```

#### `toArray(arrangement)`

Converts an arrangement of pieces from `String` to `Array`.

```js
toArray('BBQNNRKR') // -> ['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']
```

#### `toLowerCase(arrangement)`

Converts an arrangement of pieces to lowercase notation.

```js
toLowerCase('BBQNNRKR') // -> 'bbqnnrkr'
```

#### `toUpperCase(arrangement)`

Converts an arrangement of pieces to uppercase notation.

```js
toUpperCase('bbqnnrkr') // -> 'BBQNNRKR'
```

#### `toMirror(arrangement)`

Mirrors an arrangement of pieces (returns its “twin”).

```js
toMirror('BBQNNRKR') // -> 'RKRNNQBB'
```

#### `toUnicode(arrangement, color)`

Converts an arrangement of pieces to Unicode symbols.

The `color` argument is optional and defaults to white (falsy = white, truthy = black).

Note: There's no way to convert back to letters from Unicode symbols.

```js
toUnicode('BBQNNRKR') // -> '♗♗♕♘♘♖♔♖'
toUnicode('BBQNNRKR', true) // -> '♝♝♛♞♞♜♚♜'
```

#### `isValidArrangement(arrangement)`

Validates a starting position's arrangement of pieces.

```js
isValidArrangement('BBQNNRKR') // -> true
isValidArrangement('KQRBRBNN') // -> false (not a valid starting position)
```

#### `isValidID(id)`

Validates a starting position's ID.

Note: `960` is not a valid ID, as this library uses zero-based IDs.

```js
isValidID(0) // -> true
isValidID(960) // -> false
```

## Benchmark

Performance doesn't matter if you only need one starting position at a time, but it doesn't hurt to be fast 🚀

Run `yarn benchmark` or `npm run benchmark` to compare the three ways of returning a random starting position. Here's my results:

```
random() x 3,360,058 ops/sec ±0.51% (95 runs sampled)
random(true) x 421,398 ops/sec ±0.44% (94 runs sampled)
generate() x 217,324 ops/sec ±0.51% (89 runs sampled)
```

- `random()` is by far the fastest of these
- `random(true)` has better entropy, at the cost of being ~8 times slower
- `generate()` (now deprecated) was ~15 times slower than `random()`

If, for some reason, performance is essential, using a lookup table will be ~5 times faster than `random()`:

```
lookup() x 18,632,990 ops/sec ±0.41% (93 runs sampled)
```

However, that comes at the cost of ~14 KB extra file size. If that's OK, see `src/lookup.js`.
