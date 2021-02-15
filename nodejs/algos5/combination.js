const assert = require('assert')

let array,
    r,
    expected

const combinationWithRepetition = (array, r) => {
  const result = [],
        temp = []

  backtrackCombinationWithRepetition(array, r, result, temp, 0)

  return result
}

const backtrackCombinationWithRepetition = (array, r, result, temp, startIndex) => {
  if (temp.length === r)
    return result.push(temp.slice())

  for (let i = startIndex; i < array.length; i++) {
    const element = array[i]

    temp.push(element)
    backtrackCombinationWithRepetition(array, r, result, temp, i)
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
