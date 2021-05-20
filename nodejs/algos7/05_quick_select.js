const assert = require('assert')

let array,
    position

const quickSelectRecursive = (array, position) => {
  return quickSelectRecursiveUtil(array, position - 1, 0, array.length - 1) || -1
}

const quickSelectRecursiveUtil = (array, targetIndex, left, right) => {
  const pivotIndex = partition(array, left, right)

  if (pivotIndex === targetIndex)
    return array[pivotIndex]
  else if (pivotIndex > targetIndex)
    return quickSelectRecursiveUtil(array, targetIndex, left, pivotIndex - 1)
  else
    return quickSelectRecursiveUtil(array, targetIndex, pivotIndex + 1, right)
}

const partition = (array, left, right) => {
  const pivot =  array[right]
  let pivotIndex = left

  for (i = left; i <= right; i++) {
    if (array[i] < pivot)
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]
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
