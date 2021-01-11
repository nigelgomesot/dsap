const assert = require('assert')

const array = [10, 4, 5, 8, 6, 11, 26]
let position

const quickSelectRecursive = (array, position) => {
  return quickSelectRecursiveUtil(array, position - 1, 0, array.length - 1)
}

const quickSelectRecursiveUtil = (array, targetIndex, left, right) => {
  const partitionIndex = partitionIndexRecursive(array, left, right)

  if (partitionIndex === targetIndex)
    return array[partitionIndex]
  else if (partitionIndex < targetIndex)
    return quickSelectRecursiveUtil(array, targetIndex, partitionIndex + 1, right)
  else
    return quickSelectRecursiveUtil(array, targetIndex, left, partitionIndex - 1)
}

const partitionIndexRecursive = (array, left, right) => {
  const pivot = array[right]
  let partitionIndex = left

  for (let i = left; i <= right; i++) {
    if (array[i] < pivot) {
      const temp = array[i]
      array[i] = array[partitionIndex]
      array[partitionIndex] = temp
      partitionIndex++
    }
  }

  const temp = array[right]
  array[right] = array[partitionIndex]
  array[partitionIndex] = temp

  return partitionIndex
}

position = 3
assert.strictEqual(quickSelectRecursive(array, position), 6)
console.log('quickSelectRecursive done.')
