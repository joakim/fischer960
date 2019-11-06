# Fischer960

A Fischer Random Chess / Chess960 library for JS.

It uses algorithms to produce results, no large lookup tables needed.

```js
// Generate a random starting position
let sp = generate()

// Get the ID of the starting position
let id = encode(sp)

// Derive a starting position directly from its ID
let sp518 = decode(518)
```

## Install

With Yarn:

`yarn add fischer960`

With NPM:

`npm install --save fischer960`

## Use

The library is available as CJS for Node, ESM for bundlers and UMD for legacy environments. A bundler (Webpack/Rollup/etc) is recommended for use in browsers.

In modern JS environments it's common practice to import/require only the functions that are to be used:

```js
// ES module environments (Webpack/Rollup/etc)
import { generate, decode, toUnicode } from 'fischer960'

// CJS environments (Node)
const { generate, decode, toUnicode } = require('fischer960')
```

A few things to be aware of:

- IDs are zero-indexed (`0`-`959`, the standard starting position having ID `518`)
- `generate()` and `decode()` return the starting position as an array (use the `toString()` helper function to convert it to a string)
- An `arrangement` argument accepts either an array (`['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']`) or a string (`'BBQNNRKR'`) of pieces

### Main functions

#### `generate()`

Generates a random starting position, returning its arrangement of pieces.

```js
generate() // -> eg. ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
```

Example for how to get both the ID and arrangement of a random starting position:

```js
// Pick a starting position at random
let sp = generate() // -> eg. ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']

// Get the ID of that starting position
let id = encode(sp) // -> eg. 518
```

#### `decode(id)`

Given an ID, returns the starting position's arrangement of pieces, or `false` if ID is invalid.

```js
decode(518) // -> eg. ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
```

Example for how to get both the ID and arrangement of a random starting position:

```js
// Pick an ID at random
let id = Math.floor(Math.random() * 960) // -> 0-959

// Get the starting position for that ID
let sp = decode(id) // -> eg. ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
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
validArrangement(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> true
validArrangement('KQRBRBNN') // -> false (not a valid starting position)
```

#### `isValidID(id)`

Validates a starting position's ID.

Note: `960` is not a valid ID, as this library uses zero-based IDs.

```js
validID(0) // -> true
validID(960) // -> false
```
