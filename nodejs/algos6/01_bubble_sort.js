const assert = require('assert')

const bubbleSort = array => {
  for (let i = 0; i < array.length - 1; i++) { // O(n)
    let swapped = false

    for (let j = 0; j < array.length - i - 1; j++) {// O(n)
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]] // O(1)
        swapped = true
      }
    }

    if (!swapped)
      break
  }

  return array
}

/*
Time: O(n) * O(n) = O(n^2)
Space: O(1)
*/

const array = [5,2,4,1,3]
const expected = [1,2,3,4,5]

assert.deepEqual(bubbleSort(array), expected)
console.log('done.')
