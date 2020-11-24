
const assert = require('assert')

const combinationWithRepetition = (array, r) => {
  const result = []
  const temp = []

  backtrackCombinationWithRepetition(array, r, result, temp, 0)

  return result
}

const backtrackCombinationWithRepetition = (array, r, result, temp, startIndex) => {
  if (temp.length === r)
    return result.push(temp.slice())

  for (let index = startIndex; index < array.length; index++) {
    const element = array[index]

    temp.push(element)
    backtrackCombinationWithRepetition(array, r, result, temp, index)
    temp.pop()
  }
}

array = ['A', 'B', 'C']
r = 2
expected = [
  ['A', 'A'],
  ['A', 'B'],
  ['A', 'C'],
  ['B', 'B'],
  ['B', 'C'],
  ['C', 'C'],
]
assert.deepEqual(combinationWithRepetition(array, r), expected)
console.log('combinationWithRepetition done.')
