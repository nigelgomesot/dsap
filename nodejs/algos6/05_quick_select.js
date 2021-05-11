const assert = require('assert')

let array,
    position

const quickSelectRecursive = (array, position) => {
  return quickSelectRecursiveUtil(array, position - 1, 0, array.length - 1) || -1
}

const quickSelectRecursiveUtil = (array, targetIndex, left, right) => {
  const pivotIndex = partitionRecursive(array, left, right)

  if (pivotIndex === targetIndex)
    return array[pivotIndex]
  else if (pivotIndex > targetIndex)
    return quickSelectRecursiveUtil(array, targetIndex, left, pivotIndex - 1)
  else
    return quickSelectRecursiveUtil(array, targetIndex, pivotIndex + 1, right)
}

const partitionRecursive = (array, left, right) => {
  const pivot = array[right]
  let pivotIndex = left

  for (let i = left; i <= right; i++) {
    if (array[i] < pivot) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]
      pivotIndex++
    }
  }

  [array[right], array[pivotIndex]] = [array[pivotIndex], array[right]]

  return pivotIndex
}

array = [10, 4, 5, 8, 6, 11, 26]
position = 3
assert.strictEqual(quickSelectRecursive(array, position), 6)
position = 10
assert.strictEqual(quickSelectRecursive(array, position), -1)
console.log('quickSelectRecursive done.')

// REF: https://www.geeksforgeeks.org/quickselect-algorithm/
// Time Complexity: O(n)
// Space Complexity: O(n) (for recursive stack)

const quickSelectIterative = (array, position) => {
  return quickSelectIterativeUtil(array, position  - 1)
}

const quickSelectIterativeUtil = (array, targetIndex) => {
  let left = 0,
      right = array.length - 1

  while (left <= right) {
    const pivotIndex = partitionIterative(array, left, right)

    if (pivotIndex === targetIndex)
      return array[pivotIndex]
    else if (pivotIndex < targetIndex)
      left = pivotIndex + 1
    else
      right = pivotIndex - 1
  }

  return -1
}

const partitionIterative = (array, left, right) => {
  let pivot = array[right],
      pivotIndex = left

  for (let i = left; i <= right; i++) {
    if (array[i] < pivot) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]
      pivotIndex++
    }
  }

  [array[right], array[pivotIndex]] = [array[pivotIndex], array[right]]

  return pivotIndex
}

array = [10, 4, 5, 8, 6, 11, 26]
position = 3
assert.strictEqual(quickSelectIterative(array, position), 6)
position = 10
assert.strictEqual(quickSelectIterative(array, position), -1)
console.log('quickSelectIterative done.')

// Time Complexity: O(n)
// Space Complexity: O(1)
