const assert = require('assert')

const bubbleSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false

    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        swapped = true
      }
    }

    if (!swapped)
      break
  }

  return array
}

const array = [5,2,4,1,3]
const expected = [1,2,3,4,5]

assert.deepEqual(bubbleSort(array), expected)
console.log('done.')
