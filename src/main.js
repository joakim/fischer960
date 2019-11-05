/**
 * @file Entry point of the library, containing the main functions.
 */

import { random } from './random.js'
import { validArrangement, validID } from './helpers.js'

/**
 * Lookup table of KRN sequences, used by `encode()`.
 *
 * @const {string[]}
 */
// prettier-ignore
const KRN_TABLE = ['NNRKR', 'NRNKR', 'NRKNR', 'NRKRN', 'RNNKR', 'RNKNR', 'RNKRN', 'RKNNR', 'RKNRN', 'RKRNN']

/**
 * Lookup table of bishop placements, used by `encode()`.
 *
 * Built by concatenating the indexes of the two bishops (not by addition).
 *
 * @todo Find a more elegant solution
 * @const {number[]}
 */
// prettier-ignore
const BISHOP_TABLE = [1, 3, 5, 7, 12, 23, 25, 27, 14, 34, 45, 47, 16, 36, 56, 67]

/**
 * Given an arrangement of pieces, returns the starting position's ID.
 *
 * @see {@link https://chess960frc.blogspot.com/2010/11/calculate-sp-numbers-in-your-head.html}
 *
 * @param {string[]|string} arrangement A starting position's arrangement
 * @returns {number} The starting position's ID, or `-1` if invalid arrangement
 */
export function encode(arrangement) {
  if (!validArrangement(arrangement)) return -1
  if (typeof arrangement === 'string') arrangement = Array.from(arrangement)

  let id = 0

  // Add value for the sequence of K, R, N
  const sequence = arrangement.filter(piece => 'KRN'.includes(piece)).join('')
  id += KRN_TABLE.indexOf(sequence) * 96

  // Add value for the position of the queen within K, R, N, Q
  id += arrangement.filter(piece => 'KRNQ'.includes(piece)).indexOf('Q') * 16

  // Add value for the combined positions of the bishops
  const firstB = arrangement.indexOf('B')
  const secondB = arrangement.lastIndexOf('B')
  id += BISHOP_TABLE.indexOf(parseInt('' + firstB + secondB))

  return id < 0 ? -1 : id
}

/**
 * Given an ID, returns the starting position's arrangement of pieces.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fischer_Random_Chess_numbering_scheme}
 *
 * @param {number} id An ID of a starting position
 * @returns {string[]} The starting position's arrangement, or `false` if
 *    invalid ID
 */
export function decode(id) {
  if (!validID(id)) return false

  const arrangement = [0, 1, 2, 3, 4, 5, 6, 7]

  // Places a piece on the nth free square from the left
  const place = (piece, pos = 0) => {
    const square = arrangement.filter(Number.isInteger)[pos]
    arrangement[square] = piece
  }

  const divide = (num, by) => [Math.floor(num / by), Math.floor(num % by)]

  // Directly place first bishop on the derived square
  const [q2, b1] = divide(id, 4)
  arrangement[b1 * 2 + 1] = 'B'

  // Directly place second bishop on the derived square
  const [q3, b2] = divide(q2, 4)
  arrangement[b2 * 2] = 'B'

  // Place queen and knights on the remaining free squares
  let [q4, q] = divide(q3, 6)
  place('Q', q)
  place('N', q4 > 3 ? ((q4 -= 3) > 3 ? ((q4 -= 2) > 3 ? (q4 = 3) : 2) : 1) : 0) // Credit to ugoren for this
  place('N', q4) // q4 has been modified by the above ternary operators

  // Place king and rooks on the remaining free squares
  place('R')
  place('K')
  place('R')

  return arrangement
}

/**
 * Generates a random starting position from scratch.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fischer_Random_Chess_starting_position}
 *
 * @returns {string[]} The starting position's arrangement
 */
export function generate() {
  const arrangement = new Array(8)

  // Places a piece on a square
  const place = (piece, square) => (arrangement[square] = piece)

  let squares = [
    [0, 2, 4, 6], // Dark squares (a, c, e, g)
    [1, 3, 5, 7], // Bright squares (b, d, f, h)
  ]

  // Process pieces in groups, emulating the single die method by Ingo Althofer
  const pieces = [
    ['B', 'B'], // First bishops
    ['Q', 'N', 'N'], // Then queen and knights
    ['R', 'K', 'R'], // Finally king and rooks
  ]

  // Place each bishop on a random black/white square
  pieces[0].forEach((piece, squareColor) => {
    let index = Math.floor(random() * 4)

    // Place the piece on the given square
    place(piece, squares[squareColor][index])

    // Remove the square from the array of squares, as it is now taken
    squares[squareColor].splice(index, 1)
  })

  // Flatten the array of squares for the remaining pieces
  squares = squares.flat().sort()

  // Place queen and knights on random remaining squares
  pieces[1].forEach(piece => {
    let index = Math.floor(random() * squares.length)
    place(piece, squares[index])
    squares.splice(index, 1)
  })

  // Place king and rooks on the remaining squares, the king in the middle
  pieces[2].forEach(piece => {
    place(piece, squares[0])
    squares.splice(0, 1)
  })

  return arrangement
}

export {
  toString,
  toArray,
  toLowerCase,
  toUpperCase,
  toMirror,
  toUnicode,
  validArrangement,
  validID,
} from './helpers.js'
