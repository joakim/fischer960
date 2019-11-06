/**
 * @file Cryptographically strong pseudo-random number generator.
 */

/**
 * Maximum value for a 32-bit unsigned integer.
 *
 * @const {number}
 */
const MAX = 4294967295

/**
 * A function that returns cryptographically strong pseudo-random values.
 *
 * The appropriate function for the environment is selected during build time.
 *
 * @function
 */
// prettier-ignore
const getRandomValues = process.browser?window.crypto.getRandomValues:require('crypto').randomFillSync

/**
 * Like `Math.random()` only _randomer_ (better entropy) at the cost of speed.
 *
 * @returns {number} A pseudo-random number in the range 0–1 (inclusive of 0,
 *    but not 1)
 */
export function strongRandom() {
  return getRandomValues(new Uint32Array(1))[0] / (MAX + 0.0000007)
}
