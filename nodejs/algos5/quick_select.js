const assert = require('assert')

const array = [10, 4, 5, 8, 6, 11, 26]
let position

const quickSelectRecursive = (array, position) => {
  return quickSelectRecursiveUtil(array, position - 1, 0, array.length - 1) || -1
}

const quickSelectRecursiveUtil = (array, targetIndex, left, right) => {
  let pivotIndex = partitionRecursive(array, left, right)

  if (pivotIndex === targetIndex)
    return array[pivotIndex]
  else if (pivotIndex < targetIndex)
    return quickSelectRecursiveUtil(array, targetIndex, pivotIndex + 1, right)
  else
    return quickSelectRecursiveUtil(array, targetIndex, left, pivotIndex - 1)
}

const partitionRecursive = (array, left, right) => {
  const pivot = array[right]
  let pivotIndex = left

  for (let i = left; i <= right; i++) {
    if (array[i] < pivot) {
      const temp = array[i]
      array[i] = array[pivotIndex]
      array[pivotIndex] = temp
      pivotIndex++
    }
  }

  const temp = array[right]
  array[right] = array[pivotIndex]
  array[pivotIndex] = temp

  return pivotIndex
}

position = 3
assert.strictEqual(quickSelectRecursive(array, position), 6)

position = 10
assert.strictEqual(quickSelectRecursive(array, position), -1)

console.log('quickSelectRecursive done.')
