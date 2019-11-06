# Fischer960

A Fischer Random Chess / Chess960 library for JS based on algorithms, no large lookup tables needed.

```js
let sp = fischer.random()

sp.id // -> 518
sp.arrangement // -> ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
```

## Install

With Yarn:

`yarn add fischer960`

With NPM:

`npm install --save fischer960`

## Use

The library is available as CJS for Node, ESM for bundlers and UMD for legacy environments. A bundler (Webpack/Rollup/etc) is recommended for use in browsers.

In modern JS environments one can import/require only the functions that are to be used:

```js
// ES module environments (Webpack/Rollup/etc)
import { random, toString, toUnicode } from 'fischer960'

// CJS environments (Node.js without experimental modules enabled)
const { random, toString, toUnicode } = require('fischer960')
```

But this will let you write `fischer.random()` 😎:

```js
import * as fischer from 'fischer960'
let sp = fischer.random()
```

A few things to be aware of:

- IDs are zero-indexed (0-959, the standard starting position is 518)
- `random()` and `decode()` return the arrangement as an array (see the `toString()` helper function for converting to a string)
- `arrangement` arguments accept either an array (`['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']`) or a string (`'BBQNNRKR'`)

### Main functions

#### `random(strong)`

Generates a random starting position, returning its ID and arrangement of pieces.

If the optional `strong` argument is set to `true`, it will use a cryptographically strong pseudo-random number generator that is slower, but more random. Defaults to `false`.

```js
random() // -> eg. { id: 518, arrangement: ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'] }
```

#### `randomID(strong)`

Picks a random starting position's ID.

If the optional `strong` argument is set to `true`, it will use a cryptographically strong pseudo-random number generator that is slower, but more random. Defaults to `false`.

```js
randomID() // -> eg. 518
```

#### `decode(id)`

Given an ID, returns the starting position's arrangement of pieces, or `false` if ID is invalid.

```js
decode(518) // -> eg. ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
```

#### `encode(arrangement)`

Given an arrangement of pieces, returns the starting position's ID, or `-1` if arrangement is invalid.

```js
encode(['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']) // -> 518
encode('RKRNNQBB') // -> 959
```

### Helper functions

A set of helper functions for manipulating arrangements are also provided.

Except for `toString()` and `toArray()`, these return the same type that was provided (ie. if you pass a string you get a string, if you pass an array you get an array). Except for `toLowerCase()` and `toUpperCase()`, these also return the same case that was provided.

#### `toString(arrangement)`

Converts an arrangement of pieces from `Array` to `String`.

```js
toString(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> 'BBQNNRKR'
toString(['b', 'b', 'q', 'n', 'n', 'r', 'k', 'r']) // -> 'bbqnnrkr'
```

#### `toArray(arrangement)`

Converts an arrangement of pieces from `String` to `Array`.

```js
toArray('BBQNNRKR') // -> ['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']
toArray('bbqnnrkr') // -> ['b', 'b', 'q', 'n', 'n', 'r', 'k', 'r']
```

#### `toLowerCase(arrangement)`

Converts an arrangement of pieces to lowercase notation.

```js
toLowerCase(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> ['b', 'b', 'q', 'n', 'n', 'r', 'k', 'r']
toLowerCase('BBQNNRKR') // -> 'bbqnnrkr'
```

#### `toUpperCase(arrangement)`

Converts an arrangement of pieces to uppercase notation.

```js
toUpperCase(['b', 'b', 'q', 'n', 'n', 'r', 'k', 'r']) // -> ['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']
toUpperCase('bbqnnrkr') // -> 'BBQNNRKR'
```

#### `toMirror(arrangement)`

Mirrors a starting position's arrangement of pieces (returns its "twin").

```js
toMirror(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> ['R', 'K', 'R', 'N', 'N', 'Q', 'B', 'B']
toMirror('BBQNNRKR') // -> 'RKRNNQBB'
```

#### `toUnicode(arrangement, color)`

Converts an arrangement of pieces to Unicode symbols.

The `color` argument is optional and defaults to white (falsy = white, truthy = black).

Note: There's no way to convert back to letters from Unicode symbols.

```js
toUnicode(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> ['♗', '♗', '♕', '♘', '♘', '♖', '♔', '♖']
toUnicode('BBQNNRKR') // -> '♗♗♕♘♘♖♔♖'
toUnicode('BBQNNRKR', true) // -> '♝♝♛♞♞♜♚♜'
```

#### `isValidArrangement(arrangement)`

Validates a starting position's arrangement of pieces.

```js
isValidArrangement(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> true
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
random() x 3,335,898 ops/sec ±0.51% (93 runs sampled)
random(true) x 431,062 ops/sec ±0.45% (94 runs sampled)
generate() x 229,787 ops/sec ±0.53% (91 runs sampled)
```

- `random()` is by far the fastest of these
- `random(true)` has better entropy, at the cost of being ~7.7 times slower
- `generate()` (now deprecated) was ~14.5 times slower than `random()`

If for some reason performance is essential, using a lookup table is about 5 times faster than `random()`:

```
lookup() x 17,423,333 ops/sec ±0.74% (90 runs sampled)
```

But this comes at the cost of ~14 KB extra for the lookup table. If that's OK, see `src/lookup.js`.
