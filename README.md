# Fischer960

A Fischer Random Chess / Chess960 library for JavaScript.

```js
import { generate, encode, decode } from 'fischer960'

// Generate a random starting position
let sp = generate()

// Get the ID of the starting position
let id = encode(sp)

// Or, derive a starting position directly from its ID
let sp518 = decode(518)
```

# Install

With Yarn:

`yarn add fischer960`

With NPM:

`npm install --save fischer960`

# Use

The three main functions (`generate()`, `encode()` and `decode()`) use algorithms to produce a result. No large lookup tables are used.

IDs are zero-indexed (0-959), the standard starting position is #518.

Functions that take an `arrangement` argument accept either an array (eg. `['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']`) or a string (eg. `'BBQNNRKR'`).

The main functions that return a starting position's arrangement (`generate()` and `decode()`) always return this as an array.

## Main functions

### `decode(id)`

Given an ID, returns the starting position's arrangement of pieces.

This is the most effective way to get both the ID and arrangement for a random starting position:

```js
// Pick an ID at random
let id = Math.floor(Math.round() * 960) // -> 0-959

// Get the starting position for that ID
decode(id) // -> eg. ['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']
```

### `encode(arrangement)`

Given an arrangement of pieces, returns the starting position's ID.

```js
encode(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> 0
encode('RKRNNQBB') // -> 959
```

### `generate()`

Generates a random starting position as its arrangement of pieces.

```js
generate() // -> eg. ['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']
```

## Helper functions

A set of helper functions for manipulating arrangements are also provided. Except for `toString()` and `toArray()`, these return the same type that was provided (ie. if you pass a string you get a string back, same for array).

### `toString(arrangement)`

Converts an arrangement of pieces from `Array` to `String`.

```js
toString(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> 'BBQNNRKR'
toString(['b', 'b', 'q', 'n', 'n', 'r', 'k', 'r']) // -> 'bbqnnrkr'
```

### `toArray(arrangement)`

Converts an arrangement of pieces from `String` to `Array`.

```js
toArray('BBQNNRKR') // -> ['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']
toArray('bbqnnrkr') // -> ['b', 'b', 'q', 'n', 'n', 'r', 'k', 'r']
```

### `toLowerCase(arrangement)`

Converts an arrangement of pieces to lowercase notation.

```js
toLowerCase(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> ['b', 'b', 'q', 'n', 'n', 'r', 'k', 'r']
toLowerCase('BBQNNRKR') // -> 'bbqnnrkr'
```

### `toUpperCase(arrangement)`

Converts an arrangement of pieces to uppercase notation.

```js
toUpperCase(['b', 'b', 'q', 'n', 'n', 'r', 'k', 'r']) // -> ['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']
toUpperCase('bbqnnrkr') // -> 'BBQNNRKR'
```

### `toMirror(arrangement)`

Mirrors a starting position's arrangement of pieces (returns its "twin").

```js
toMirror(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> ['R', 'K', 'R', 'N', 'N', 'Q', 'B', 'B']
toMirror('BBQNNRKR') // -> 'RKRNNQBB'
```

### `toUnicode(arrangement, color)`

Converts an arrangement of pieces to Unicode symbols.

The `color` argument is optional and defaults to white (falsy = white, truthy = black).

```js
toUnicode(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R']) // -> ['♗', '♗', '♕', '♘', '♘', '♖', '♔', '♖']
toUnicode('BBQNNRKR') // -> '♗♗♕♘♘♖♔♖'
toUnicode('BBQNNRKR', true) // -> '♝♝♛♞♞♜♚♜'
```
