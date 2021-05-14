const assert = require('assert')

const quickSort = array => {
  quickSortUtil(array, 0, array.length - 1)

  return array
}

const quickSortUtil = (array, left, right) => {
  if (left >= right)
    return

  const pivot = array[Math.floor((left + right) / 2)]
  const pivotIndex = partition(array, left, right, pivot)

  quickSortUtil(array, left, pivotIndex)
  quickSortUtil(array, pivotIndex + 1, right)
}

// PENDING
