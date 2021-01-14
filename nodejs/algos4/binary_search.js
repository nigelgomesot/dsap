const assert = require('assert')

const array = [1,2,3,4,5]

const binarySearchRecursive = (array, value) => {
  return binarySearchRecursiveUtil(array, value, 0, array.length - 1)
}

const binarySearchRecursiveUtil = (array, value, left, right) => {
  if (left > right) return false

  const mid = Math.floor((left + right) / 2)

  if (array[mid] === value)
    return true
  else if (array[mid] > value)
    return binarySearchRecursiveUtil(array, value, left, mid - 1)
  else
  return binarySearchRecursiveUtil(array, value, mid + 1, right)
}

assert.strictEqual(binarySearchRecursive(array, 4), true)
assert.strictEqual(binarySearchRecursive(array, 6), false)
console.log('binarySearchRecursive done.')

const binarySearchIterative = (array, value) => {
  let left = 0,
      right = array.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (array[mid] === value)
      return true
    else if (array[mid] < value)
      left = mid + 1
    else
      right = mid - 1
  }

  return false
}

assert.strictEqual(binarySearchIterative(array, 4), true)
assert.strictEqual(binarySearchIterative(array, 6), false)
console.log('binarySearchIterative done.')
