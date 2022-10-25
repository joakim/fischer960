/**
 * @file Helper functions for working with the results of the main functions.
 */

/**
 * A map of Unicode symbols for chess pieces, in both white and black.
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
 * @param {string[]} arrangement A starting position's arrangement
 * @returns {string|boolean} The same arrangement as a string, or `false` if
 *    invalid arrangement
 */
export function toString(arrangement) {
  if (!isValidArrangement(arrangement)) return false
  return Array.isArray(arrangement) ? arrangement.join('') : arrangement
}

/**
 * Converts an arrangement of pieces from `String` to `Array`.
 *
 * @param {string} arrangement A starting position's arrangement
 * @returns {string[]} The same arrangement as an array, or `false` if invalid
 *    arrangement
 */
export function toArray(arrangement) {
  if (!isValidArrangement(arrangement)) return false
  return Array.from(arrangement)
}

/**
 * Converts an arrangement of pieces to lowercase letters.
 *
 * @param {string[]|string} arrangement A starting position's arrangement
 * @returns {string[]|string} The same arrangement in lowercase letters, or
 *    `false` if invalid arrangement
 */
export function toLowerCase(arrangement) {
  if (!isValidArrangement(arrangement)) return false
  const type = typeof arrangement
  const converted = Array.from(arrangement).map((piece) => piece.toLowerCase())
  return type === 'string' ? converted.join('') : converted
}

/**
 * Converts an arrangement of pieces to uppercase letters.
 *
 * @param {string[]|string} arrangement A starting position's arrangement
 * @returns {string[]|string} The same arrangement in uppercase letters, or
 *    `false` if invalid arrangement
 */
export function toUpperCase(arrangement) {
  if (!isValidArrangement(arrangement)) return false
  const type = typeof arrangement
  const converted = Array.from(arrangement).map((piece) => piece.toUpperCase())
  return type === 'string' ? converted.join('') : converted
}

/**
 * Mirrors a starting position's arrangement of pieces (its "twin").
 *
 * @param {string[]|string} arrangement A starting position's arrangement
 * @returns {string[]|string} The mirrored arrangement of pieces, or `false` if
 *    invalid arrangement
 */
export function toMirror(arrangement) {
  if (!isValidArrangement(arrangement)) return false
  const type = typeof arrangement
  const mirror = Array.from(arrangement).reverse()
  return type === 'string' ? mirror.join('') : mirror
}

/**
 * Converts an arrangement of pieces to Unicode symbols.
 *
 * @param {string[]|string} arrangement A starting position's arrangement
 * @param {boolean} [color=0] The color of the pieces (0 = white, 1 = black)
 * @returns {string[]|string} The same arrangement in Unicode symbols, or
 *    `false` if invalid arrangement
 */
export function toUnicode(arrangement, color = 0) {
  if (!isValidArrangement(arrangement)) return false
  const type = typeof arrangement
  const converted = toUpperCase(arrangement).map(
    (piece) => UNICODE[piece][color ? 1 : 0]
  )
  return type === 'string' ? converted.join('') : converted
}

/**
 * Validates a starting position's arrangement of pieces.
 *
 * @param {string[]|string} arrangement A starting position's arrangement
 * @returns {boolean} `true` if the arrangement is valid, otherwise `false`
 */
export function isValidArrangement(arrangement) {
  if (!Array.isArray(arrangement) && typeof arrangement !== 'string')
    return false

  if (arrangement.length !== 8) return false

  if (Array.isArray(arrangement))
    arrangement = arrangement.join('').toUpperCase()

  const count = (piece) =>
    (arrangement.match(new RegExp(piece, 'g')) || []).length

  // Check the presence of all pieces
  if (
    count('K') !== 1 ||
    count('Q') !== 1 ||
    count('R') !== 2 ||
    count('B') !== 2 ||
    count('N') !== 2
  ) {
    return false
  }

  // Check the positions of bishops (on different colored squares)
  const b1 = arrangement.indexOf('B')
  const b2 = arrangement.lastIndexOf('B')
  if (!((b2 - b1) % 2)) return false

  // Check the positions of rooks (one on each side of the king)
  const k = arrangement.indexOf('K')
  const r1 = arrangement.indexOf('R')
  if (r1 > k) return false

  return true
}

/**
 * Validates a starting position's ID.
 *
 * Note: 960 is not a valid ID, as this library uses zero-based IDs.
 *
 * @param {number} id An ID of a starting position
 * @returns {boolean} `true` if the ID is valid, otherwise `false`
 */
export function isValidID(id) {
  return Number.isInteger(id) && id >= 0 && id <= 959
}
