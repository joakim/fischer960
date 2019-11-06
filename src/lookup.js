/**
 * @file An alternative version of the fischer960 library that uses a 14 KB
 *    lookup table instead of algorithms. This was the original library and is
 *    kept mainly for reference.
 */

import { isValidArrangement, isValidID } from './helpers.js'

/**
 * Returns a random starting position, with its ID and arrangement.
 *
 * @returns {Object} An object with the starting position's ID and arrangement
 */
export function random() {
  const id = randomID()
  const arrangement = decode(id)
  return { id, arrangement }
}

/**
 * Picks a random starting position's ID.
 *
 * @returns {number} The starting position's ID
 */
export function randomID() {
  return Math.floor(Math.random() * 960)
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
  if (!isValidID(id)) return false
  return Array.from(POSITIONS[parseInt(id)])
}

/**
 * Given an arrangement of pieces, returns the starting position's ID.
 *
 * @see {@link https://chess960frc.blogspot.com/2010/11/calculate-sp-numbers-in-your-head.html}
 *
 * @param {string[]|string} arrangement A starting position's arrangement
 * @returns {number} The starting position's ID, or `-1` if invalid arrangement
 */
export function encode(arrangement) {
  if (!isValidArrangement(arrangement)) return -1
  if (Array.isArray(arrangement)) arrangement = arrangement.join('')
  return POSITIONS.indexOf(arrangement)
}

/**
 * Returns a random starting position for Fischer Random Chess / Chess960.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fischer_Random_Chess_starting_position}
 *
 * @returns {string[]} The starting position's arrangement of pieces
 */
export function generate() {
  const id = Math.floor(Math.random() * 960)
  return Array.from(POSITIONS[id])
}

/**
 * A lookup table of all possible starting positions in Fischer Random Chess /
 * Chess960. The array's indexes correspond to each starting position's ID
 * (from 0 to 959).
 *
 * @see {@link https://www.mark-weeks.com/cfaa/chess960/c960strt.htm|Source}
 *
 * @const {string[]}
 */
export const POSITIONS = [
  'BBQNNRKR',
  'BQNBNRKR',
  'BQNNRBKR',
  'BQNNRKRB',
  'QBBNNRKR',
  'QNBBNRKR',
  'QNBNRBKR',
  'QNBNRKRB',
  'QBNNBRKR',
  'QNNBBRKR',
  'QNNRBBKR',
  'QNNRBKRB',
  'QBNNRKBR',
  'QNNBRKBR',
  'QNNRKBBR',
  'QNNRKRBB',
  'BBNQNRKR',
  'BNQBNRKR',
  'BNQNRBKR',
  'BNQNRKRB',
  'NBBQNRKR',
  'NQBBNRKR',
  'NQBNRBKR',
  'NQBNRKRB',
  'NBQNBRKR',
  'NQNBBRKR',
  'NQNRBBKR',
  'NQNRBKRB',
  'NBQNRKBR',
  'NQNBRKBR',
  'NQNRKBBR',
  'NQNRKRBB',
  'BBNNQRKR',
  'BNNBQRKR',
  'BNNQRBKR',
  'BNNQRKRB',
  'NBBNQRKR',
  'NNBBQRKR',
  'NNBQRBKR',
  'NNBQRKRB',
  'NBNQBRKR',
  'NNQBBRKR',
  'NNQRBBKR',
  'NNQRBKRB',
  'NBNQRKBR',
  'NNQBRKBR',
  'NNQRKBBR',
  'NNQRKRBB',
  'BBNNRQKR',
  'BNNBRQKR',
  'BNNRQBKR',
  'BNNRQKRB',
  'NBBNRQKR',
  'NNBBRQKR',
  'NNBRQBKR',
  'NNBRQKRB',
  'NBNRBQKR',
  'NNRBBQKR',
  'NNRQBBKR',
  'NNRQBKRB',
  'NBNRQKBR',
  'NNRBQKBR',
  'NNRQKBBR',
  'NNRQKRBB',
  'BBNNRKQR',
  'BNNBRKQR',
  'BNNRKBQR',
  'BNNRKQRB',
  'NBBNRKQR',
  'NNBBRKQR',
  'NNBRKBQR',
  'NNBRKQRB',
  'NBNRBKQR',
  'NNRBBKQR',
  'NNRKBBQR',
  'NNRKBQRB',
  'NBNRKQBR',
  'NNRBKQBR',
  'NNRKQBBR',
  'NNRKQRBB',
  'BBNNRKRQ',
  'BNNBRKRQ',
  'BNNRKBRQ',
  'BNNRKRQB',
  'NBBNRKRQ',
  'NNBBRKRQ',
  'NNBRKBRQ',
  'NNBRKRQB',
  'NBNRBKRQ',
  'NNRBBKRQ',
  'NNRKBBRQ',
  'NNRKBRQB',
  'NBNRKRBQ',
  'NNRBKRBQ',
  'NNRKRBBQ',
  'NNRKRQBB',
  'BBQNRNKR',
  'BQNBRNKR',
  'BQNRNBKR',
  'BQNRNKRB',
  'QBBNRNKR',
  'QNBBRNKR',
  'QNBRNBKR',
  'QNBRNKRB',
  'QBNRBNKR',
  'QNRBBNKR',
  'QNRNBBKR',
  'QNRNBKRB',
  'QBNRNKBR',
  'QNRBNKBR',
  'QNRNKBBR',
  'QNRNKRBB',
  'BBNQRNKR',
  'BNQBRNKR',
  'BNQRNBKR',
  'BNQRNKRB',
  'NBBQRNKR',
  'NQBBRNKR',
  'NQBRNBKR',
  'NQBRNKRB',
  'NBQRBNKR',
  'NQRBBNKR',
  'NQRNBBKR',
  'NQRNBKRB',
  'NBQRNKBR',
  'NQRBNKBR',
  'NQRNKBBR',
  'NQRNKRBB',
  'BBNRQNKR',
  'BNRBQNKR',
  'BNRQNBKR',
  'BNRQNKRB',
  'NBBRQNKR',
  'NRBBQNKR',
  'NRBQNBKR',
  'NRBQNKRB',
  'NBRQBNKR',
  'NRQBBNKR',
  'NRQNBBKR',
  'NRQNBKRB',
  'NBRQNKBR',
  'NRQBNKBR',
  'NRQNKBBR',
  'NRQNKRBB',
  'BBNRNQKR',
  'BNRBNQKR',
  'BNRNQBKR',
  'BNRNQKRB',
  'NBBRNQKR',
  'NRBBNQKR',
  'NRBNQBKR',
  'NRBNQKRB',
  'NBRNBQKR',
  'NRNBBQKR',
  'NRNQBBKR',
  'NRNQBKRB',
  'NBRNQKBR',
  'NRNBQKBR',
  'NRNQKBBR',
  'NRNQKRBB',
  'BBNRNKQR',
  'BNRBNKQR',
  'BNRNKBQR',
  'BNRNKQRB',
  'NBBRNKQR',
  'NRBBNKQR',
  'NRBNKBQR',
  'NRBNKQRB',
  'NBRNBKQR',
  'NRNBBKQR',
  'NRNKBBQR',
  'NRNKBQRB',
  'NBRNKQBR',
  'NRNBKQBR',
  'NRNKQBBR',
  'NRNKQRBB',
  'BBNRNKRQ',
  'BNRBNKRQ',
  'BNRNKBRQ',
  'BNRNKRQB',
  'NBBRNKRQ',
  'NRBBNKRQ',
  'NRBNKBRQ',
  'NRBNKRQB',
  'NBRNBKRQ',
  'NRNBBKRQ',
  'NRNKBBRQ',
  'NRNKBRQB',
  'NBRNKRBQ',
  'NRNBKRBQ',
  'NRNKRBBQ',
  'NRNKRQBB',
  'BBQNRKNR',
  'BQNBRKNR',
  'BQNRKBNR',
  'BQNRKNRB',
  'QBBNRKNR',
  'QNBBRKNR',
  'QNBRKBNR',
  'QNBRKNRB',
  'QBNRBKNR',
  'QNRBBKNR',
  'QNRKBBNR',
  'QNRKBNRB',
  'QBNRKNBR',
  'QNRBKNBR',
  'QNRKNBBR',
  'QNRKNRBB',
  'BBNQRKNR',
  'BNQBRKNR',
  'BNQRKBNR',
  'BNQRKNRB',
  'NBBQRKNR',
  'NQBBRKNR',
  'NQBRKBNR',
  'NQBRKNRB',
  'NBQRBKNR',
  'NQRBBKNR',
  'NQRKBBNR',
  'NQRKBNRB',
  'NBQRKNBR',
  'NQRBKNBR',
  'NQRKNBBR',
  'NQRKNRBB',
  'BBNRQKNR',
  'BNRBQKNR',
  'BNRQKBNR',
  'BNRQKNRB',
  'NBBRQKNR',
  'NRBBQKNR',
  'NRBQKBNR',
  'NRBQKNRB',
  'NBRQBKNR',
  'NRQBBKNR',
  'NRQKBBNR',
  'NRQKBNRB',
  'NBRQKNBR',
  'NRQBKNBR',
  'NRQKNBBR',
  'NRQKNRBB',
  'BBNRKQNR',
  'BNRBKQNR',
  'BNRKQBNR',
  'BNRKQNRB',
  'NBBRKQNR',
  'NRBBKQNR',
  'NRBKQBNR',
  'NRBKQNRB',
  'NBRKBQNR',
  'NRKBBQNR',
  'NRKQBBNR',
  'NRKQBNRB',
  'NBRKQNBR',
  'NRKBQNBR',
  'NRKQNBBR',
  'NRKQNRBB',
  'BBNRKNQR',
  'BNRBKNQR',
  'BNRKNBQR',
  'BNRKNQRB',
  'NBBRKNQR',
  'NRBBKNQR',
  'NRBKNBQR',
  'NRBKNQRB',
  'NBRKBNQR',
  'NRKBBNQR',
  'NRKNBBQR',
  'NRKNBQRB',
  'NBRKNQBR',
  'NRKBNQBR',
  'NRKNQBBR',
  'NRKNQRBB',
  'BBNRKNRQ',
  'BNRBKNRQ',
  'BNRKNBRQ',
  'BNRKNRQB',
  'NBBRKNRQ',
  'NRBBKNRQ',
  'NRBKNBRQ',
  'NRBKNRQB',
  'NBRKBNRQ',
  'NRKBBNRQ',
  'NRKNBBRQ',
  'NRKNBRQB',
  'NBRKNRBQ',
  'NRKBNRBQ',
  'NRKNRBBQ',
  'NRKNRQBB',
  'BBQNRKRN',
  'BQNBRKRN',
  'BQNRKBRN',
  'BQNRKRNB',
  'QBBNRKRN',
  'QNBBRKRN',
  'QNBRKBRN',
  'QNBRKRNB',
  'QBNRBKRN',
  'QNRBBKRN',
  'QNRKBBRN',
  'QNRKBRNB',
  'QBNRKRBN',
  'QNRBKRBN',
  'QNRKRBBN',
  'QNRKRNBB',
  'BBNQRKRN',
  'BNQBRKRN',
  'BNQRKBRN',
  'BNQRKRNB',
  'NBBQRKRN',
  'NQBBRKRN',
  'NQBRKBRN',
  'NQBRKRNB',
  'NBQRBKRN',
  'NQRBBKRN',
  'NQRKBBRN',
  'NQRKBRNB',
  'NBQRKRBN',
  'NQRBKRBN',
  'NQRKRBBN',
  'NQRKRNBB',
  'BBNRQKRN',
  'BNRBQKRN',
  'BNRQKBRN',
  'BNRQKRNB',
  'NBBRQKRN',
  'NRBBQKRN',
  'NRBQKBRN',
  'NRBQKRNB',
  'NBRQBKRN',
  'NRQBBKRN',
  'NRQKBBRN',
  'NRQKBRNB',
  'NBRQKRBN',
  'NRQBKRBN',
  'NRQKRBBN',
  'NRQKRNBB',
  'BBNRKQRN',
  'BNRBKQRN',
  'BNRKQBRN',
  'BNRKQRNB',
  'NBBRKQRN',
  'NRBBKQRN',
  'NRBKQBRN',
  'NRBKQRNB',
  'NBRKBQRN',
  'NRKBBQRN',
  'NRKQBBRN',
  'NRKQBRNB',
  'NBRKQRBN',
  'NRKBQRBN',
  'NRKQRBBN',
  'NRKQRNBB',
  'BBNRKRQN',
  'BNRBKRQN',
  'BNRKRBQN',
  'BNRKRQNB',
  'NBBRKRQN',
  'NRBBKRQN',
  'NRBKRBQN',
  'NRBKRQNB',
  'NBRKBRQN',
  'NRKBBRQN',
  'NRKRBBQN',
  'NRKRBQNB',
  'NBRKRQBN',
  'NRKBRQBN',
  'NRKRQBBN',
  'NRKRQNBB',
  'BBNRKRNQ',
  'BNRBKRNQ',
  'BNRKRBNQ',
  'BNRKRNQB',
  'NBBRKRNQ',
  'NRBBKRNQ',
  'NRBKRBNQ',
  'NRBKRNQB',
  'NBRKBRNQ',
  'NRKBBRNQ',
  'NRKRBBNQ',
  'NRKRBNQB',
  'NBRKRNBQ',
  'NRKBRNBQ',
  'NRKRNBBQ',
  'NRKRNQBB',
  'BBQRNNKR',
  'BQRBNNKR',
  'BQRNNBKR',
  'BQRNNKRB',
  'QBBRNNKR',
  'QRBBNNKR',
  'QRBNNBKR',
  'QRBNNKRB',
  'QBRNBNKR',
  'QRNBBNKR',
  'QRNNBBKR',
  'QRNNBKRB',
  'QBRNNKBR',
  'QRNBNKBR',
  'QRNNKBBR',
  'QRNNKRBB',
  'BBRQNNKR',
  'BRQBNNKR',
  'BRQNNBKR',
  'BRQNNKRB',
  'RBBQNNKR',
  'RQBBNNKR',
  'RQBNNBKR',
  'RQBNNKRB',
  'RBQNBNKR',
  'RQNBBNKR',
  'RQNNBBKR',
  'RQNNBKRB',
  'RBQNNKBR',
  'RQNBNKBR',
  'RQNNKBBR',
  'RQNNKRBB',
  'BBRNQNKR',
  'BRNBQNKR',
  'BRNQNBKR',
  'BRNQNKRB',
  'RBBNQNKR',
  'RNBBQNKR',
  'RNBQNBKR',
  'RNBQNKRB',
  'RBNQBNKR',
  'RNQBBNKR',
  'RNQNBBKR',
  'RNQNBKRB',
  'RBNQNKBR',
  'RNQBNKBR',
  'RNQNKBBR',
  'RNQNKRBB',
  'BBRNNQKR',
  'BRNBNQKR',
  'BRNNQBKR',
  'BRNNQKRB',
  'RBBNNQKR',
  'RNBBNQKR',
  'RNBNQBKR',
  'RNBNQKRB',
  'RBNNBQKR',
  'RNNBBQKR',
  'RNNQBBKR',
  'RNNQBKRB',
  'RBNNQKBR',
  'RNNBQKBR',
  'RNNQKBBR',
  'RNNQKRBB',
  'BBRNNKQR',
  'BRNBNKQR',
  'BRNNKBQR',
  'BRNNKQRB',
  'RBBNNKQR',
  'RNBBNKQR',
  'RNBNKBQR',
  'RNBNKQRB',
  'RBNNBKQR',
  'RNNBBKQR',
  'RNNKBBQR',
  'RNNKBQRB',
  'RBNNKQBR',
  'RNNBKQBR',
  'RNNKQBBR',
  'RNNKQRBB',
  'BBRNNKRQ',
  'BRNBNKRQ',
  'BRNNKBRQ',
  'BRNNKRQB',
  'RBBNNKRQ',
  'RNBBNKRQ',
  'RNBNKBRQ',
  'RNBNKRQB',
  'RBNNBKRQ',
  'RNNBBKRQ',
  'RNNKBBRQ',
  'RNNKBRQB',
  'RBNNKRBQ',
  'RNNBKRBQ',
  'RNNKRBBQ',
  'RNNKRQBB',
  'BBQRNKNR',
  'BQRBNKNR',
  'BQRNKBNR',
  'BQRNKNRB',
  'QBBRNKNR',
  'QRBBNKNR',
  'QRBNKBNR',
  'QRBNKNRB',
  'QBRNBKNR',
  'QRNBBKNR',
  'QRNKBBNR',
  'QRNKBNRB',
  'QBRNKNBR',
  'QRNBKNBR',
  'QRNKNBBR',
  'QRNKNRBB',
  'BBRQNKNR',
  'BRQBNKNR',
  'BRQNKBNR',
  'BRQNKNRB',
  'RBBQNKNR',
  'RQBBNKNR',
  'RQBNKBNR',
  'RQBNKNRB',
  'RBQNBKNR',
  'RQNBBKNR',
  'RQNKBBNR',
  'RQNKBNRB',
  'RBQNKNBR',
  'RQNBKNBR',
  'RQNKNBBR',
  'RQNKNRBB',
  'BBRNQKNR',
  'BRNBQKNR',
  'BRNQKBNR',
  'BRNQKNRB',
  'RBBNQKNR',
  'RNBBQKNR',
  'RNBQKBNR', // Normal starting position (#518)
  'RNBQKNRB',
  'RBNQBKNR',
  'RNQBBKNR',
  'RNQKBBNR',
  'RNQKBNRB',
  'RBNQKNBR',
  'RNQBKNBR',
  'RNQKNBBR',
  'RNQKNRBB',
  'BBRNKQNR',
  'BRNBKQNR',
  'BRNKQBNR',
  'BRNKQNRB',
  'RBBNKQNR',
  'RNBBKQNR',
  'RNBKQBNR',
  'RNBKQNRB',
  'RBNKBQNR',
  'RNKBBQNR',
  'RNKQBBNR',
  'RNKQBNRB',
  'RBNKQNBR',
  'RNKBQNBR',
  'RNKQNBBR',
  'RNKQNRBB',
  'BBRNKNQR',
  'BRNBKNQR',
  'BRNKNBQR',
  'BRNKNQRB',
  'RBBNKNQR',
  'RNBBKNQR',
  'RNBKNBQR',
  'RNBKNQRB',
  'RBNKBNQR',
  'RNKBBNQR',
  'RNKNBBQR',
  'RNKNBQRB',
  'RBNKNQBR',
  'RNKBNQBR',
  'RNKNQBBR',
  'RNKNQRBB',
  'BBRNKNRQ',
  'BRNBKNRQ',
  'BRNKNBRQ',
  'BRNKNRQB',
  'RBBNKNRQ',
  'RNBBKNRQ',
  'RNBKNBRQ',
  'RNBKNRQB',
  'RBNKBNRQ',
  'RNKBBNRQ',
  'RNKNBBRQ',
  'RNKNBRQB',
  'RBNKNRBQ',
  'RNKBNRBQ',
  'RNKNRBBQ',
  'RNKNRQBB',
  'BBQRNKRN',
  'BQRBNKRN',
  'BQRNKBRN',
  'BQRNKRNB',
  'QBBRNKRN',
  'QRBBNKRN',
  'QRBNKBRN',
  'QRBNKRNB',
  'QBRNBKRN',
  'QRNBBKRN',
  'QRNKBBRN',
  'QRNKBRNB',
  'QBRNKRBN',
  'QRNBKRBN',
  'QRNKRBBN',
  'QRNKRNBB',
  'BBRQNKRN',
  'BRQBNKRN',
  'BRQNKBRN',
  'BRQNKRNB',
  'RBBQNKRN',
  'RQBBNKRN',
  'RQBNKBRN',
  'RQBNKRNB',
  'RBQNBKRN',
  'RQNBBKRN',
  'RQNKBBRN',
  'RQNKBRNB',
  'RBQNKRBN',
  'RQNBKRBN',
  'RQNKRBBN',
  'RQNKRNBB',
  'BBRNQKRN',
  'BRNBQKRN',
  'BRNQKBRN',
  'BRNQKRNB',
  'RBBNQKRN',
  'RNBBQKRN',
  'RNBQKBRN',
  'RNBQKRNB',
  'RBNQBKRN',
  'RNQBBKRN',
  'RNQKBBRN',
  'RNQKBRNB',
  'RBNQKRBN',
  'RNQBKRBN',
  'RNQKRBBN',
  'RNQKRNBB',
  'BBRNKQRN',
  'BRNBKQRN',
  'BRNKQBRN',
  'BRNKQRNB',
  'RBBNKQRN',
  'RNBBKQRN',
  'RNBKQBRN',
  'RNBKQRNB',
  'RBNKBQRN',
  'RNKBBQRN',
  'RNKQBBRN',
  'RNKQBRNB',
  'RBNKQRBN',
  'RNKBQRBN',
  'RNKQRBBN',
  'RNKQRNBB',
  'BBRNKRQN',
  'BRNBKRQN',
  'BRNKRBQN',
  'BRNKRQNB',
  'RBBNKRQN',
  'RNBBKRQN',
  'RNBKRBQN',
  'RNBKRQNB',
  'RBNKBRQN',
  'RNKBBRQN',
  'RNKRBBQN',
  'RNKRBQNB',
  'RBNKRQBN',
  'RNKBRQBN',
  'RNKRQBBN',
  'RNKRQNBB',
  'BBRNKRNQ',
  'BRNBKRNQ',
  'BRNKRBNQ',
  'BRNKRNQB',
  'RBBNKRNQ',
  'RNBBKRNQ',
  'RNBKRBNQ',
  'RNBKRNQB',
  'RBNKBRNQ',
  'RNKBBRNQ',
  'RNKRBBNQ',
  'RNKRBNQB',
  'RBNKRNBQ',
  'RNKBRNBQ',
  'RNKRNBBQ',
  'RNKRNQBB',
  'BBQRKNNR',
  'BQRBKNNR',
  'BQRKNBNR',
  'BQRKNNRB',
  'QBBRKNNR',
  'QRBBKNNR',
  'QRBKNBNR',
  'QRBKNNRB',
  'QBRKBNNR',
  'QRKBBNNR',
  'QRKNBBNR',
  'QRKNBNRB',
  'QBRKNNBR',
  'QRKBNNBR',
  'QRKNNBBR',
  'QRKNNRBB',
  'BBRQKNNR',
  'BRQBKNNR',
  'BRQKNBNR',
  'BRQKNNRB',
  'RBBQKNNR',
  'RQBBKNNR',
  'RQBKNBNR',
  'RQBKNNRB',
  'RBQKBNNR',
  'RQKBBNNR',
  'RQKNBBNR',
  'RQKNBNRB',
  'RBQKNNBR',
  'RQKBNNBR',
  'RQKNNBBR',
  'RQKNNRBB',
  'BBRKQNNR',
  'BRKBQNNR',
  'BRKQNBNR',
  'BRKQNNRB',
  'RBBKQNNR',
  'RKBBQNNR',
  'RKBQNBNR',
  'RKBQNNRB',
  'RBKQBNNR',
  'RKQBBNNR',
  'RKQNBBNR',
  'RKQNBNRB',
  'RBKQNNBR',
  'RKQBNNBR',
  'RKQNNBBR',
  'RKQNNRBB',
  'BBRKNQNR',
  'BRKBNQNR',
  'BRKNQBNR',
  'BRKNQNRB',
  'RBBKNQNR',
  'RKBBNQNR',
  'RKBNQBNR',
  'RKBNQNRB',
  'RBKNBQNR',
  'RKNBBQNR',
  'RKNQBBNR',
  'RKNQBNRB',
  'RBKNQNBR',
  'RKNBQNBR',
  'RKNQNBBR',
  'RKNQNRBB',
  'BBRKNNQR',
  'BRKBNNQR',
  'BRKNNBQR',
  'BRKNNQRB',
  'RBBKNNQR',
  'RKBBNNQR',
  'RKBNNBQR',
  'RKBNNQRB',
  'RBKNBNQR',
  'RKNBBNQR',
  'RKNNBBQR',
  'RKNNBQRB',
  'RBKNNQBR',
  'RKNBNQBR',
  'RKNNQBBR',
  'RKNNQRBB',
  'BBRKNNRQ',
  'BRKBNNRQ',
  'BRKNNBRQ',
  'BRKNNRQB',
  'RBBKNNRQ',
  'RKBBNNRQ',
  'RKBNNBRQ',
  'RKBNNRQB',
  'RBKNBNRQ',
  'RKNBBNRQ',
  'RKNNBBRQ',
  'RKNNBRQB',
  'RBKNNRBQ',
  'RKNBNRBQ',
  'RKNNRBBQ',
  'RKNNRQBB',
  'BBQRKNRN',
  'BQRBKNRN',
  'BQRKNBRN',
  'BQRKNRNB',
  'QBBRKNRN',
  'QRBBKNRN',
  'QRBKNBRN',
  'QRBKNRNB',
  'QBRKBNRN',
  'QRKBBNRN',
  'QRKNBBRN',
  'QRKNBRNB',
  'QBRKNRBN',
  'QRKBNRBN',
  'QRKNRBBN',
  'QRKNRNBB',
  'BBRQKNRN',
  'BRQBKNRN',
  'BRQKNBRN',
  'BRQKNRNB',
  'RBBQKNRN',
  'RQBBKNRN',
  'RQBKNBRN',
  'RQBKNRNB',
  'RBQKBNRN',
  'RQKBBNRN',
  'RQKNBBRN',
  'RQKNBRNB',
  'RBQKNRBN',
  'RQKBNRBN',
  'RQKNRBBN',
  'RQKNRNBB',
  'BBRKQNRN',
  'BRKBQNRN',
  'BRKQNBRN',
  'BRKQNRNB',
  'RBBKQNRN',
  'RKBBQNRN',
  'RKBQNBRN',
  'RKBQNRNB',
  'RBKQBNRN',
  'RKQBBNRN',
  'RKQNBBRN',
  'RKQNBRNB',
  'RBKQNRBN',
  'RKQBNRBN',
  'RKQNRBBN',
  'RKQNRNBB',
  'BBRKNQRN',
  'BRKBNQRN',
  'BRKNQBRN',
  'BRKNQRNB',
  'RBBKNQRN',
  'RKBBNQRN',
  'RKBNQBRN',
  'RKBNQRNB',
  'RBKNBQRN',
  'RKNBBQRN',
  'RKNQBBRN',
  'RKNQBRNB',
  'RBKNQRBN',
  'RKNBQRBN',
  'RKNQRBBN',
  'RKNQRNBB',
  'BBRKNRQN',
  'BRKBNRQN',
  'BRKNRBQN',
  'BRKNRQNB',
  'RBBKNRQN',
  'RKBBNRQN',
  'RKBNRBQN',
  'RKBNRQNB',
  'RBKNBRQN',
  'RKNBBRQN',
  'RKNRBBQN',
  'RKNRBQNB',
  'RBKNRQBN',
  'RKNBRQBN',
  'RKNRQBBN',
  'RKNRQNBB',
  'BBRKNRNQ',
  'BRKBNRNQ',
  'BRKNRBNQ',
  'BRKNRNQB',
  'RBBKNRNQ',
  'RKBBNRNQ',
  'RKBNRBNQ',
  'RKBNRNQB',
  'RBKNBRNQ',
  'RKNBBRNQ',
  'RKNRBBNQ',
  'RKNRBNQB',
  'RBKNRNBQ',
  'RKNBRNBQ',
  'RKNRNBBQ',
  'RKNRNQBB',
  'BBQRKRNN',
  'BQRBKRNN',
  'BQRKRBNN',
  'BQRKRNNB',
  'QBBRKRNN',
  'QRBBKRNN',
  'QRBKRBNN',
  'QRBKRNNB',
  'QBRKBRNN',
  'QRKBBRNN',
  'QRKRBBNN',
  'QRKRBNNB',
  'QBRKRNBN',
  'QRKBRNBN',
  'QRKRNBBN',
  'QRKRNNBB',
  'BBRQKRNN',
  'BRQBKRNN',
  'BRQKRBNN',
  'BRQKRNNB',
  'RBBQKRNN',
  'RQBBKRNN',
  'RQBKRBNN',
  'RQBKRNNB',
  'RBQKBRNN',
  'RQKBBRNN',
  'RQKRBBNN',
  'RQKRBNNB',
  'RBQKRNBN',
  'RQKBRNBN',
  'RQKRNBBN',
  'RQKRNNBB',
  'BBRKQRNN',
  'BRKBQRNN',
  'BRKQRBNN',
  'BRKQRNNB',
  'RBBKQRNN',
  'RKBBQRNN',
  'RKBQRBNN',
  'RKBQRNNB',
  'RBKQBRNN',
  'RKQBBRNN',
  'RKQRBBNN',
  'RKQRBNNB',
  'RBKQRNBN',
  'RKQBRNBN',
  'RKQRNBBN',
  'RKQRNNBB',
  'BBRKRQNN',
  'BRKBRQNN',
  'BRKRQBNN',
  'BRKRQNNB',
  'RBBKRQNN',
  'RKBBRQNN',
  'RKBRQBNN',
  'RKBRQNNB',
  'RBKRBQNN',
  'RKRBBQNN',
  'RKRQBBNN',
  'RKRQBNNB',
  'RBKRQNBN',
  'RKRBQNBN',
  'RKRQNBBN',
  'RKRQNNBB',
  'BBRKRNQN',
  'BRKBRNQN',
  'BRKRNBQN',
  'BRKRNQNB',
  'RBBKRNQN',
  'RKBBRNQN',
  'RKBRNBQN',
  'RKBRNQNB',
  'RBKRBNQN',
  'RKRBBNQN',
  'RKRNBBQN',
  'RKRNBQNB',
  'RBKRNQBN',
  'RKRBNQBN',
  'RKRNQBBN',
  'RKRNQNBB',
  'BBRKRNNQ',
  'BRKBRNNQ',
  'BRKRNBNQ',
  'BRKRNNQB',
  'RBBKRNNQ',
  'RKBBRNNQ',
  'RKBRNBNQ',
  'RKBRNNQB',
  'RBKRBNNQ',
  'RKRBBNNQ',
  'RKRNBBNQ',
  'RKRNBNQB',
  'RBKRNNBQ',
  'RKRBNNBQ',
  'RKRNNBBQ',
  'RKRNNQBB',
]
