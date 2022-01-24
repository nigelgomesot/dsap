'use strict'

const Heap = require('../heap')

test('creates a minHeap', () => {
    const compareFn = (a, b) => { return a < b }
    const array = [5,4,3,2,1],
          minHeap = new Heap(array, compareFn),
          result = []

    expect(minHeap.peek()).toBe(1)

    // minHeap.insert(5)
    // minHeap.insert(-10)
    // minHeap.insert(10)
    // expect(minHeap.peek()).toBe(-10)
})
