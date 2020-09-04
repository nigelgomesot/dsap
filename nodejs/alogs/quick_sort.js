// REF: https://www.youtube.com/watch?v=SLauY6PpjW4

const assert = require('assert')

const array = [5,2,4,1,3]
const expected = [1,2,3,4,5]

const quickSort = array => {
  quickSortUtil(array, 0, array.length - 1)

  return array
}

const quickSortUtil = (array, left, right) => {
  if (left >= right)
    return

  const pivot = array[Math.floor((right + left) / 2)]
  const index = partition(array, left, right, pivot)
  quickSortUtil(array, left, index)
  quickSortUtil(array, index + 1, right)
}

const partition = (array, left, right, pivot) => {
  while (left < right) {
    while (array[left] < pivot)
      left++

    while (array[right] > pivot)
      right--

    if (left < right) {
      const temp = array[left]
      array[left] = array[right]
      array[right] = temp
    }
  }

  return left
}

assert.deepEqual(quickSort(array), expected)
console.log('passed.')

const quickSort2 = (array) => {
  quickSortUtil2(array, 0, array.length - 1)

  return array
}

const quickSortUtil2 = (array, left, right) => {
  if (left >= right)
    return

  let low = left,
      high = right,
      pivot = array[left]

  while (low < high) {
    while (array[low] <= pivot && low < high)
      low++

    while (pivot < array[high] && low <= high)
      high--

    if (low < high)
      swap(array, low, high)
  }

  swap(array, high, left)

  quickSortUtil2(array, left, high - 1)
  quickSortUtil2(array, high + 1, right)
}

const swap = (array, index1, index2) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

assert.deepEqual(quickSort(array), expected)
console.log('passed.')
