// REF: https://www.youtube.com/watch?v=6Gv8vg0kcHc

const assert = require('assert')

const bubbleSort = array => {
 let isSorted = false
 let maxIndex = array.length - 1
  while(!isSorted) {
    isSorted = true

    for (let i = 0; i < maxIndex; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        isSorted = false
      }
    }

    maxIndex--
  }

  return array
}

const array = [5,2,4,1,3]
const expected = [1,2,3,4,5]

assert.deepEqual(bubbleSort(array), expected)
console.log('passed.')
