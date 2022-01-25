'use strict'

const Heap = require('../heap')

test('creates a minHeap', () => {
    const compareFn = (a, b) => { return a < b }
    const array = [5,4,3,2,1],
          minHeap = new Heap(array, compareFn),
          result = []

    expect(minHeap.peek()).toBe(1)

    let removed
    removed = minHeap.remove()
    expect(removed).toStrictEqual(1)

    removed = minHeap.remove()
    expect(removed).toStrictEqual(2)

    removed = minHeap.remove()
    expect(removed).toStrictEqual(3)

    // minHeap.insert(-10)
    // minHeap.insert(10)
    // expect(minHeap.peek()).toBe(-10)
})
