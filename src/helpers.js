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
 * @param {Array} arrangement A starting position's arrangement of pieces
 * @returns {String} A string representation of the arrangement of pieces
 */
export function toString(arrangement) {
  return Array.isArray(arrangement) ? arrangement.join('') : String(arrangement)
}

/**
 * Converts an arrangement of pieces from `String` to `Array`.
 *
 * @param {String} arrangement A starting position's arrangement of pieces
 * @returns {Array} An array representation of the arrangement of pieces
 */
export function toArray(arrangement) {
  return Array.from(arrangement)
}

/**
 * Mirrors a starting position's arrangement of pieces (its "twin").
 *
 * @param {Array|String} arrangement A starting position's arrangement of pieces
 * @returns {Array} The mirrored arrangement of pieces
 */
export function toMirror(arrangement) {
  if (!Array.isArray(arrangement)) arrangement = toArray(arrangement)
  return arrangement.slice().reverse()
}

/**
 * Converts an arrangement of pieces to Unicode symbols.
 *
 * @param {Array|String} arrangement A starting position's arrangement of pieces
 * @returns {Array} The same arrangement of pieces, but in Unicode symbols
 */
export function toUnicode(arrangement, color = 0) {
  if (!Array.isArray(arrangement)) arrangement = toArray(arrangement)
  return arrangement.map(piece => UNICODE[piece][color ? 1 : 0])
}
