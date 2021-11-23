'use strict'

const MinHeap = require('../priority_queue')

test('creates a minHeap', () => {
    const array = [5,4,3,2,1],
          minHeap = new MinHeap(array),
          result = []

    minHeap.insert(-10)
    minHeap.insert(5)
    minHeap.insert(10)

    console.log('>>>>>minHeap', minHeap)
    expect(minHeap.peek()).toBe(-10)


    while (!minHeap.isEmpty()) {
        result.push(minHeap.remove())
    }
    const expected = [-10,1,2,3,4,5,5,10]
    expect(result).toStrictEqual(expected)
})
