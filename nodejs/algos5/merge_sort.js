const assert = require('assert')
const { merge } = require('../../../jsnad/node-express-realworld-example-app/routes/api')

const mergeSort = array => {
  const temp = []

  mergeSortUtil(array, temp, 0, array.length - 1)

  return array
}

const mergeSortUtil = (array, temp, leftStart, rightEnd) => {
  if (leftStart >= rightEnd)
    return

  const mid = Math.floor((leftStart + rightEnd) / 2)

  mergeSortUtil(array, temp, leftStart, mid)
  mergeSortUtil(array, temp, mid + 1, rightEnd)

  merge(array, temp, leftStart, mid, rightEnd)
}
