var flattenDeep = require('./flattenDeep')

test('flattens shallow arrays', () => {
  expect(flattenDeep([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('flattens nested arrays', () => {
  expect(flattenDeep([2, 3, [4, [5]]])).toEqual([2, 3, 4, 5])
})

test('works with empty arrays', () => {
  var emptyArray = []

  expect(flattenDeep(emptyArray)).toEqual([])
  expect(flattenDeep(emptyArray)).not.toBe(emptyArray)
})

test('works with `arguments` array-like object', () => {
  // Can't use arrow function because those don't bind their own `arguments`
  var fn = function () {
    return flattenDeep(arguments)
  }

  expect(fn(3, [4, [5]], 6)).toEqual([3, 4, 5, 6])
})

test('returns an empty array for non array-like objects', () => {
  expect(flattenDeep(null)).toEqual([])
  expect(flattenDeep(undefined)).toEqual([])
  expect(flattenDeep(true)).toEqual([])
  expect(flattenDeep(1)).toEqual([])
  expect(flattenDeep(1.1)).toEqual([])
  expect(flattenDeep({ a: 'b' })).toEqual([])
})

test('treats sparse arrays as dense arrays', () => {
  expect(flattenDeep(Array(3))).toEqual([undefined, undefined, undefined])
})

test('works with large arrays', () => {
  var expected = Array(1e6)

  expect(flattenDeep([expected])).toEqual(expected)
})

// Skip this test until tail-recursive algorithm is written
xtest('works with deep arrays', () => {
  var deepArray = createDeepDummyArray(1e5)

  expect(flattenDeep(deepArray)).toEqual([])
})
