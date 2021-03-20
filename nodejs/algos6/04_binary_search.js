const assert = require('assert')

const array = [1,2,3,4,5]

const binarySearchRecursive = (array, target) => {
  return  binarySearchRecursiveUtil(array, target, 0, array.length - 1)
}

const binarySearchRecursiveUtil = (array, target, left, right) => {
  if (left > right)
    return false

  const mid = Math.floor((left + right)/ 2)

  if (array[mid] === target)
    return true
  else if (array[mid] < target)
    return binarySearchRecursiveUtil(array, target, mid + 1, right)
  else
    return binarySearchRecursiveUtil(array, target, left, mid - 1)
}

assert.strictEqual(binarySearchRecursive(array, 4), true)
assert.strictEqual(binarySearchRecursive(array, 6), false)
console.log('binarySearchRecursive done.')

// REF: https://www.techiedelight.com/binary-search/
// Time Complexity: O(logn)
//                  space search reduces by 1/2, so n -> n/2 -> n/4 -> ... -> 1
//                  after k steps if search space is 1 then n/2^k = 1
//                  n = 2^k
//                  k = logn
// Space Complexity: O(logn) (for recursive stack)
