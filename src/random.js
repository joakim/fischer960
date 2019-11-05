/**
 * Function for getting cryptographically strong random values.
 */
// prettier-ignore
const getRandomValues = process.browser?window.crypto.getRandomValues:require('crypto').randomFillSync

/**
 * The maximum value for a 32-bit unsigned integer, with decimals added to
 * ensure that random() never returns 1.
 */
const MAX = 4294967295.0000007

/**
 * Like `Math.random()`, only _randomer_.
 */
export function random() {
  return getRandomValues(new Uint32Array(1))[0] / MAX
}
