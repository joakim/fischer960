# Fischer960

A Fischer Random Chess / Chess960 library in JavaScript.

The library provides two sets of functions, one algorithmic and the other based on a lookup table of all 960 positions. The lookup table is about 14KB, so you'd normally want to use the algorithmic functions. A set of helper functions for tweaking the results are also provided.

Arrangement of pieces are represented as an array. But all functions that take an `arrangement` argument also accept a string representation (eg. `BBQNNRKR`), and there's a helper function for converting the returned array into a string (`toString()`).

## Algorithmic functions

### `generate()`

Generates a random starting position as its arrangement of pieces.

### `encode(arrangement)`

Given an arrangement of pieces, returns the starting position's ID.

### `decode(id)`

Given an ID, returns the starting position's arrangement of pieces.

## Lookup based functions

### `getRandom()`

Returns a random starting position.

### `getID(arrangement)`

Given an arrangement of pieces, finds the starting position's ID.

### `getArrangement(id)`

Given an ID, finds the starting position's arrangement of pieces.

## Helper functions

### `toString(arrangement)`

Converts an arrangement from `Array` to `String`.

### `toArray(arrangement)`

Converts an arrangement from `String` to `Array`.

### `toMirror(arrangement)`

Mirrors the arrangement of a starting position (its "twin").

### `toUnicode(arrangement)`

Returns the arrangement of pieces in Unicode symbols.
