/**
 * @file An alternative version of the library using a 14KB lookup table
 * instead of algorithms. This was the original library and is included here
 * mainly for reference.
 */

/**
 * Map of Unicode symbols for pieces in both white and black colors.
 *
 * @const {Object}
 */
const UNICODE = {
  K: ['♔', '♚'],
  Q: ['♕', '♛'],
  R: ['♖', '♜'],
  B: ['♗', '♝'],
  N: ['♘', '♞'],
}

/**
 * Converts an arrangement of pieces from `Array` to `String`.
 *
 * @param {string[]} arrangement A starting position's arrangement of pieces
 * @returns {string} The same arrangement of pieces as a string
 */
export function toString(arrangement) {
  return Array.isArray(arrangement) ? arrangement.join('') : String(arrangement)
}

/**
 * Converts an arrangement of pieces from `String` to `Array`.
 *
 * @param {string} arrangement A starting position's arrangement of pieces
 * @returns {string[]} The same arrangement of pieces as an array
 */
export function toArray(arrangement) {
  return Array.from(arrangement)
}

/**
 * Converts an arrangement of pieces to lowercase notation.
 *
 * @param {string[]|string} arrangement A starting position's arrangement of pieces
 * @returns {string[]|string} The same arrangement in lowercase
 */
export function toLowerCase(arrangement) {
  const type = typeof arrangement
  const converted = Array.from(arrangement).map(piece => piece.toLowerCase())
  return type === 'string' ? converted.join('') : converted
}

/**
 * Converts an arrangement of pieces to uppercase notation.
 *
 * @param {string[]|string} arrangement A starting position's arrangement of pieces
 * @returns {string[]|string} The same arrangement in uppercase
 */
export function toUpperCase(arrangement) {
  const type = typeof arrangement
  const converted = Array.from(arrangement).map(piece => piece.toUpperCase())
  return type === 'string' ? converted.join('') : converted
}

/**
 * Mirrors a starting position's arrangement of pieces (its "twin").
 *
 * @param {string[]|string} arrangement A starting position's arrangement of pieces
 * @returns {string[]|string} The mirrored arrangement of pieces
 */
export function toMirror(arrangement) {
  const type = typeof arrangement
  const mirror = Array.from(arrangement).reverse()
  return type === 'string' ? mirror.join('') : mirror
}

/**
 * Converts an arrangement of pieces to Unicode symbols.
 *
 * @param {string[]|string} arrangement A starting position's arrangement of pieces
 * @param {boolean} [color=0] The color of the pieces (0 = white, 1 = black)
 * @returns {string[]|string} The same arrangement of pieces in Unicode symbols
 */
export function toUnicode(arrangement, color = 0) {
  const type = typeof arrangement
  const converted = Array.from(arrangement).map(
    piece => UNICODE[piece][color ? 1 : 0]
  )
  return type === 'string' ? converted.join('') : converted
}
