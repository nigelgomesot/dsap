// REF: https://www.youtube.com/watch?v=SLauY6PpjW4

const assert = require('assert')

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

const array = [5,2,4,1,3]
const expected = [1,2,3,4,5]

assert.deepEqual(quickSort(array), expected)
console.log('passed.')
