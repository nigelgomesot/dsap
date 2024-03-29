const assert = require('assert')

const quickSort = array => {
  quickSortUtil(array, 0, array.length - 1)

  return array
}

const quickSortUtil = (array, left, right) => {
  if (left >= right)
    return

  const pivot = array[Math.floor((left + right) / 2)]
  const pivotIndex = partition(array, left, right, pivot) // O(n)

  quickSortUtil(array, left, pivotIndex)
  quickSortUtil(array, pivotIndex + 1, right)
}

const partition = (array, left, right, pivot) => {
  while (left < right) {
    while (array[left] < pivot)
      left++

    while (array[right] > pivot)
      right--

    if (left < right) {
      [array[left], array[right]] = [array[right], array[left]]
    }
  }

  return left
}

const array = [5,4,2,1,3]
const expected = [1,2,3,4,5]

assert.deepEqual(quickSort(array), expected)
console.log('done.')

// REF: https://www.interviewbit.com/tutorial/quicksort-algorithm/#h827ske1ht0ea2fcemd1dxxl7u1ndu40q
// Time Complexity: O(n^2) (for unbalanced array when 1 sub array has all elements & other has 0 elements)
// Space Complexity: O(n) (for stack)
