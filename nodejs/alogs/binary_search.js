// REF: https://www.youtube.com/watch?v=P3YID7liBug

const assert =  require('assert')

const array = [1,2,3,4,5,7,8,9]

const binarySearchRecursive = (array, value) => {
  return binarySearchRecursiveUtil(array, value, 0, array.length - 1)
}

const binarySearchRecursiveUtil = (array, value, left, right) => {
  if (left > right)
    return false

  const mid = Math.floor((left + right) / 2)

  if (array[mid] == value) {
    return true
  } else if (array[mid] > value) {
    return binarySearchRecursiveUtil(array, value, left, mid - 1)
  } else {
    return binarySearchRecursiveUtil(array, value, mid + 1, right)
  }
}

assert.strictEqual(binarySearchRecursive(array, 8), true)
assert.strictEqual(binarySearchRecursive(array, 6), false)
console.log('completed')
