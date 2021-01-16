const assert = require('assert')
const { toNamespacedPath } = require('path')

let options,
    r

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

const permutationWithoutRepetition = (array, r) => {
  const result = [],
        temp = []

  backtrackPermutationWithoutRepetition(array, r, result, temp)

  return result
}

const backtrackPermutationWithoutRepetition = (array, r, result, temp) => {
  if (temp.length === r) {
    result.push(temp.slice())

    return
  }

  for (let i = 0; i < array.length; i++) {
    const element = array[i]

    if (temp.includes(element))
      continue

    temp.push(element)
    backtrackPermutationWithoutRepetition(array, r, result, temp)
    temp.pop()
  }
}

options = ['A', 'B', 'C']
r = 3
expected = [
  ['A', 'B', 'C'],
  ['A', 'C', 'B'],
  ['B', 'A', 'C'],
  ['B', 'C', 'A'],
  ['C', 'A', 'B'],
  ['C', 'B', 'A'],
]
assert.deepEqual(permutationWithoutRepetition(options, r), expected)
console.log('permutationWithoutRepetition done.')
