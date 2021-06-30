const assert = require('assert')

const mergeSort = array => {
  const temp = []

  mergeSortUtil(array, temp, 0, array.length - 1)

  return array
}

const mergeSortUtil = (array, temp, leftStart, rightEnd) => {
  if (leftStart >= rightEnd)
    return

  const mid = Math.floor((leftStart + rightEnd) / 2)

  mergeSortUtil(array, temp, leftStart, mid)
  mergeSortUtil(array, temp, mid + 1, rightEnd)

  merge(array, temp, leftStart, mid, rightEnd)
}

const merge = (array, temp, leftStart, mid, rightEnd) => {
  let left =  leftStart,
      leftEnd = mid,
      right = mid + 1,
      tempIndex = left

  while (left <= leftEnd && right <= rightEnd) {
    if (array[left] <= array[right]) {
      temp[tempIndex] = array[left]
      left++
    } else {
      temp[tempIndex] = array[right]
      right++
    }
    tempIndex++
  }

  while (left <= leftEnd) {
    temp[tempIndex] = array[left]
    left++
    tempIndex++
  }

  while (right <= rightEnd) {
    temp[tempIndex] = array[right]
    right++
    tempIndex++
  }

  for (let i = leftStart; i <= rightEnd; i++) {
    array[i] = temp[i]
  }
}

const array = [5,4,2,1,3]
const expected = [1,2,3,4,5]

assert.deepEqual(mergeSort(array), expected)
console.log('done.')
