const { generate, encode, decode } = require('./algorithmic')
const { getRandom, getArrangement, getID, positions } = require('./lookup')

const UNICODE = {
  K: '♔',
  Q: '♕',
  R: '♖',
  B: '♗',
  N: '♘',
}

/**
 * Converts an arrangement from `Array` to `String`.
 *
 * @param {Array} arrangement A starting position's arrangement of pieces
 * @returns {String} A string representation of the arrangement of pieces
 */
function toString(arrangement) {
  return Array.isArray(arrangement) ? arrangement.join('') : String(arrangement)
}

/**
 * Converts an arrangement from `String` to `Array`.
 *
 * @param {String} arrangement A starting position's arrangement of pieces
 * @returns {Array} An array representation of the arrangement of pieces
 */
function toArray(arrangement) {
  return Array.from(arrangement)
}

/**
 * Mirrors the arrangement of a starting position (its "twin").
 *
 * @param {Array|String} arrangement A starting position's arrangement of pieces
 * @returns {Array} The mirrored arrangement of pieces
 */
function toMirror(arrangement) {
  if (!Array.isArray(arrangement)) arrangement = toArray(arrangement)
  return arrangement.reverse()
}

/**
 * Returns the arrangement of pieces in Unicode symbols.
 *
 * @param {Array|String} arrangement A starting position's arrangement of pieces
 * @returns {Array} The same arrangement of pieces, but in Unicode symbols
 */
function toUnicode(arrangement) {
  if (!Array.isArray(arrangement)) arrangement = toArray(arrangement)
  return arrangement.map(piece => UNICODE[piece])
}

module.exports = {
  generate,
  encode,
  decode,
  toString,
  toArray,
  toMirror,
  toUnicode,
  getRandom,
  getArrangement,
  getID,
  positions,
}
