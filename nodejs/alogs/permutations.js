// REF: https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/permutations

const assert = require('assert')

let options,
    r,
    expected

const permutationWithRepetition = (options, r) => {
  const permutations = []

  if (r === 1) {
    for (let option of options)
      permutations.push([option])

    return permutations
  }

  const smallerPermutations = permutationWithRepetition(
    options,
    r - 1
  )

  for (const option of options) {
    for (const smallerPermutation of smallerPermutations) {
      const permutation = [option].concat(smallerPermutation)
      permutations.push(permutation)
    }
  }

  return permutations
}

options = ['A', 'B', 'C']
r = 1
expected = [
  ['A'],
  ['B'],
  ['C'],
]
assert.deepEqual(permutationWithRepetition(options, r), expected)

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

options = ['A', 'B', 'C']
r = 3
expected = [
  ['A', 'A', 'A'],
  ['A', 'A', 'B'],
  ['A', 'A', 'C'],
  ['A', 'B', 'A'],
  ['A', 'B', 'B'],
  ['A', 'B', 'C'],
  ['A', 'C', 'A'],
  ['A', 'C', 'B'],
  ['A', 'C', 'C'],
  ['B', 'A', 'A'],
  ['B', 'A', 'B'],
  ['B', 'A', 'C'],
  ['B', 'B', 'A'],
  ['B', 'B', 'B'],
  ['B', 'B', 'C'],
  ['B', 'C', 'A'],
  ['B', 'C', 'B'],
  ['B', 'C', 'C'],
  ['C', 'A', 'A'],
  ['C', 'A', 'B'],
  ['C', 'A', 'C'],
  ['C', 'B', 'A'],
  ['C', 'B', 'B'],
  ['C', 'B', 'C'],
  ['C', 'C', 'A'],
  ['C', 'C', 'B'],
  ['C', 'C', 'C'],
]
assert.deepEqual(permutationWithRepetition(options, r), expected)
console.log('passed')
