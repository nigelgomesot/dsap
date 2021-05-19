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

// PENDING
