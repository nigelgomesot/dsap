const assert = require('assert')
const { toNamespacedPath } = require('path')

const permutationWithRepetition = (array, r) => {
  const result = [],
        temp = []

  backtrackPermutationWithRepetition(array, r, result, temp)

  return result
}

const backtrackPermutationWithRepetition = (array, r, result, temp) => {
  if (temp.length === r) {
    result.push(temp.slice())

    return
  }

  for (let i = 0; i < array.length; i++) {
    const element = array[i]

    temp.push(element)
    backtrackPermutationWithRepetition(array, r, result, temp)
    temp.pop()
  }
}

options = ['A', 'B', 'C']
r = 2
expected = [
  ['A', 'A'],
  ['A', 'B'],
  ['A', 'C'],
  ['B', 'A'],
  ['B', 'B'],
  ['B', 'C'],
  ['C', 'A'],
  ['C', 'B'],
  ['C', 'C'],
]
assert.deepEqual(permutationWithRepetition(options, r), expected)
console.log('permutationWithRepetition done.')