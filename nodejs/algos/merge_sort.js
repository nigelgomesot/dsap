// REF: https://www.youtube.com/watch?v=KF2j-9iSf4Q

const assert = require('assert')

const mergeSortUtil = (array, temp, leftStart, rightEnd) => {
  if (leftStart >= rightEnd)
    return

  const middle = Math.floor((leftStart + rightEnd) / 2)
  mergeSortUtil(array, temp, leftStart, middle)
  mergeSortUtil(array, temp, middle + 1, rightEnd)
  merge(array, temp, leftStart, middle, rightEnd)
}

const merge = (array, temp, leftStart, middle, rightEnd) => {
  let leftEnd = middle,
        rightStart = middle + 1,
        left = leftStart,
        right = rightStart,
        tempIndex = leftStart

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

const mergeSort = (array) => {
  const temp = new Array(array.length)

  mergeSortUtil(array, temp, 0, array.length - 1)

  return array
}

const array = [5,2,4,1,3]
const expected = [1,2,3,4,5]

assert.deepEqual(mergeSort(array), expected)
console.log('passed.')
