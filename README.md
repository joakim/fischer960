# Fischer960

A Fischer Random Chess / Chess960 JavaScript library based on algorithms.

```js
let sp = fischer.random()

sp.id // -> 518
sp.arrangement // -> ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
```


## Install

npm: `npm i fischer960`  
yarn: `yarn add fischer960`  
pnpm: `pnpm add fischer960`

There are no dependencies.


## Use

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

#### `random()`

Generates a random starting position, returning its ID and arrangement of pieces.

```js
random() // -> eg. { id: 518, arrangement: ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'] }
```

#### `randomID()`

Picks a random starting position's ID.

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
