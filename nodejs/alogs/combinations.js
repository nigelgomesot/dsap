// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/combinations

'use strict'

const assert = require('assert')

const combineWithRepetition = (options, r) => {
  const combos = []

  if (r === 1) {
    for (const option of options) {
      combos.push([option])
    }

    return combos
  }

  options.forEach((option, index) => {
    const smallerCombos = combineWithRepetition(
      options.slice(index),
      r - 1
    )

    for (const smallerCombo of smallerCombos) {
      const combo = [option].concat(smallerCombo)
      combos.push(combo)
    }
  })

  return combos
}

let options,
    r,
    expected

    options = ['A', 'B', 'C']
r = 1
expected = [
  ['A'],
  ['B'],
  ['C'],
]
assert.deepEqual(combineWithRepetition(options, r), expected)

options = ['A', 'B', 'C']
r = 2
expected = [
  ['A', 'A'],
  ['A', 'B'],
  ['A', 'C'],
  ['B', 'B'],
  ['B', 'C'],
  ['C', 'C'],
]
assert.deepEqual(combineWithRepetition(options, r), expected)
console.log('passed')
