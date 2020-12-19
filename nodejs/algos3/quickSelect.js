// REF: https://www.geeksforgeeks.org/quickselect-algorithm/

const assert = require('assert')

const quickSelectRecursive = (array, position) => {
  return quickSelectRecursiveUtil(array, position - 1, 0, array.length - 1)
}

const quickSelectRecursiveUtil = (array, targetIndex, left, right) => {
  const partition = getPartitionRecursiveUtil(array, left, right)

  if (partition === targetIndex)
    return array[targetIndex]
  else if (partition < targetIndex)
    return quickSelectRecursiveUtil(array, targetIndex, partition + 1, right)
  else
  return quickSelectRecursiveUtil(array, targetIndex, left, partition - 1)
}

const getPartitionRecursiveUtil = (array, left, right) => {
  let pivot = array[right]
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

const array = [10, 4, 5, 8, 6, 11, 26]
const position = 3

assert.strictEqual(quickSelectRecursive(array, position), 6)
console.log('quickSelectRecursive done.')
