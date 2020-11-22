
const assert = require('assert')

const permutationWithRepetition = (array, r) => {
  const result = []
  const temp = []

  backtrackPermutationWithRepetition(array, r, result, temp, 0)

  return result
}

const backtrackPermutationWithRepetition = (array, r, result, temp) => {
  if (temp.length === r)
    return result.push(temp.slice())

  for (let index = 0; index < array.length; index++) {
    const element = array[index]

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

