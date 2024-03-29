const assert = require('assert')

const array = [1,2,3,4,5]

const binarySearchRecursive = (array, target) => {
  return binarySearchRecursiveUtil(array, target, 0, array.length - 1)
}

const binarySearchRecursiveUtil = (array, target, left, right) => {
  if (left > right)
    return false

  const mid = Math.floor((left + right) / 2)

  if (array[mid] === target)
    return true
  else if (array[mid] > target)
    return binarySearchRecursiveUtil(array, target, left, mid - 1)
  else
    return binarySearchRecursiveUtil(array, target, mid + 1, right)
}

assert.strictEqual(binarySearchRecursive(array, 4), true)
assert.strictEqual(binarySearchRecursive(array, 6), false)
console.log('binarySearchRecursive done.')

const binarySearchIterative = (array, target) => {
  let left = 0,
      right = array.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (array[mid] === target)
      return true
    else if (array[mid] > target)
      right = mid - 1
    else
      left = mid + 1
  }

  return false
}

assert.strictEqual(binarySearchIterative(array, 4), true)
assert.strictEqual(binarySearchIterative(array, 6), false)
console.log('binarySearchIterative done.')
