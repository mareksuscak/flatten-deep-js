/**
 * Flattens arbitrarily nested arrays. Private in order to protect the acc
 * argument from being used externally.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {Array} [acc=[]] The initialized result accumulator.
 * @returns {Array} Returns the new flattened array.
 */
function internalFlatten(array, acc = []) {
  /**
   * Notes:
   *
   * 1. for..of is one of few ways to iterate all kinds of arrays incl. sparse arrays
   * 2. The array depth is currently limited by the maximum call stack size.
   *    In the future, when tail call optimization is enabled by default in V8,
   *    we could use a tail-recursive algorithm.
   */

  for (let item of array) { /* 1 */
    if (Array.isArray(item)) {
      internalFlatten(item, acc) /* 2 */
    } else {
      acc.push(item)
    }
  }

  return acc
}

/**
 * Flattens arbitrarily nested arrays.
 *
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
module.exports = function flattenDeep(array) {
  // We can't use Array.isArray because it returns false for `arguments`
  // array-like object
  if (!array || !array.length) { return [] }

  return internalFlatten(array)
}
