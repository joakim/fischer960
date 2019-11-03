/**
 * A function to get random values that works both in the browser and in node.
 */
const randomValue =
  typeof window === 'undefined' && typeof require === 'function'
    ? require('crypto').randomFillSync
    : window.crypto.getRandomValues

/**
 * A more random implementation than Math.random().
 */
module.exports = function random() {
  return randomValue(new Uint32Array(1))[0] / 4294967295.0000007 // Added decimals to never go above 0.999…
}
