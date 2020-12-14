
const assert = require('assert')

const permutationWithRepetition = (array, r) => {
  const result = []
  const temp = []

  backtrackPermutationWithRepetition(array, r, result, temp)

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

const permutationWithoutRepetition = array => {
  const result = []
  const temp = []

  backtrackPermutationWithoutRepetition(array, result, temp)

  return result
}

const backtrackPermutationWithoutRepetition = (array, result, temp) => {
  if (array.length === temp.length)
    return result.push(temp.slice())

  for (let index = 0; index < array.length; index++) {
    const element = array[index]

    if (temp.includes(element))
      continue

    temp.push(element)
    backtrackPermutationWithoutRepetition(array, result, temp)
    temp.pop()
  }
}

options = ['A', 'B', 'C']
expected = [
  ['A', 'B', 'C'],
  ['A', 'C', 'B'],
  ['B', 'A', 'C'],
  ['B', 'C', 'A'],
  ['C', 'A', 'B'],
  ['C', 'B', 'A'],
]
assert.deepEqual(permutationWithoutRepetition(options), expected)
console.log('permutationWithoutRepetition done.')
