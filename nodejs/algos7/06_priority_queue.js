const assert = require('assert')

class PriorityQueue {
  constructor(compareFn) {
    this.list = []
    this.compareFn = compareFn
  }

  size() {
    return this.list.length
  }

  isEmpty() {
    return this.size() === 0
  }

  enqueue(item) {
    this.list[this.size()] = item

    this.percolateUp(this.size() - 1)
  }

  percolateUp(child) {
    const parent = Math.floor((child - 1) / 2)

    if (parent < 0)
      return

    if (this.compareFn(this.list[parent], this.list[child])) {
      [this.list[parent], this.list[child]] = [this.list[child], this.list[parent]]

      this.percolateUp(parent)
    }
  }

  dequeue() {
    const dequeued = this.list[0]

    this.list[0] = this.list[this.size() - 1]
    this.list.pop()

    this.percolateDown(0)

    return dequeued
  }

  percolateDown(parent) {
    const lChild = 2 * parent + 1,
          rChild = lChild + 1

    let child = -1

    if (lChild < this.size())
      child = lChild

    if (this.compareFn(this.list[lChild], this.list[rChild]))
    child = rChild

    if (this.compareFn(this.list[parent], this.list[child])) {
      [this.list[parent], this.list[child]] = [this.list[child], this.list[parent]]

      this.percolateDown(child)
    }
  }
}

const compareFn = (item1, item2) => {
  return item1 > item2
}

const pq = new PriorityQueue(compareFn)

assert.deepEqual(pq.list, [])
pq.enqueue(3)
pq.enqueue(2)
pq.enqueue(1)
assert.deepEqual(pq.list, [1,3,2])

assert.equal(pq.dequeue(), 1)
assert.deepEqual(pq.list, [2,3])
assert.equal(pq.dequeue(), 2)
assert.deepEqual(pq.list, [3])
assert.equal(pq.dequeue(), 3)
assert.deepEqual(pq.list, [])
assert.equal(pq.dequeue(), null)
assert.deepEqual(pq.list, [])
console.log('PriorityQueue done.')

module.exports = PriorityQueue
