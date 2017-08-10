/**
 * Flattens arbitrarily nested arrays.
 *
 * @param {Array} array The array to flatten.
 * @param {Array} [acc=[]] The initialized result accumulator.
 * @returns {Array} Returns the new flattened array.
 */
function flattenDeep(array, acc = []) {
  // We can't use Array.isArray because it returns false for `arguments`
  // array-like object
  if (!array || !array.length) { return [] }

  // One of a few ways which works with sparse arrays
  for (let item of array) {
    if (Array.isArray(item)) {
      // The depth is currently limited by the maximum call stack size.
      // In the future, when tail call optimization is enabled by default,
      // we could make this a tail-recursive algorithm in theory.
      flattenDeep(item, acc)
    } else {
      acc.push(item)
    }
  }

  return acc
}

module.exports = flattenDeep
