/**
 * @file Utility function for getting cryptographically strong random values.
 */

/**
 * A function that returns cryptographically strong random values.
 *
 * The appropriate function for the environment is selected during build time.
 *
 * @function
 */
// prettier-ignore
const getRandomValues = process.browser?window.crypto.getRandomValues:require('crypto').randomFillSync

/**
 * Maximum value for a 32-bit unsigned integer.
 *
 * @const {number}
 */
const MAX = 4294967295

/**
 * Like `Math.random()` only _randomer_.
 *
 * @returns {number} A pseudo-random number in the range 0–1 (inclusive of 0,
 *     but not 1)
 */
export function random() {
  return getRandomValues(new Uint32Array(1))[0] / (MAX + 0.0000007)
}
