const assert = require('assert')

class PriorityQueue {
  constructor() {
    this.list = []
    this.length = 0
  }

  compare(index1, index2) {
    return this.list[index1] > this.list[index2]
  }

  swap(index1, index2) {
    const temp = this.list[index1]
    this.list[index1] = this.list[index2]
    this.list[index2] = temp
  }

  enqueue(item) {
    this.list[this.length] = item
    this.length++

    this.percolateUp(this.length - 1)
  }

  percolateUp(child) {
    const parent = Math.floor((child - 1) / 2)

    if (parent < 0)
      return

    if (this.compare(parent, child)) {
      this.swap(parent, child)

      this.percolateUp(parent)
    }
  }

  isEmpty() {
    return this.list.length === 0
  }

  dequeue() {
    if (this.isEmpty())
      return

    const dequeued = this.list[0]
    this.list[0] = this.list[this.length - 1]
    this.list.pop()
    this.length--

    this.percolateDown(0)

    return dequeued
  }

  percolateDown(parent) {
    let lChild = parent * 2 + 1,
        rChild = lChild + 1,
        child = -1

    if (lChild <= this.length)
      child = lChild

    if (rChild <= this.length && this.compare(lChild, rChild))
      child = rChild

    if (child != -1 && this.compare(parent, child)) {
      this.swap(parent, child)

      this.percolateDown(child)
    }
  }
}

const pq = new PriorityQueue()

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

class PriorityQueueNew {
  constructor(compareFn) {
    this.list = []
    this.compare = compareFn
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

    if (this.compare(this.list[parent], this.list[child])) {
      const temp = this.list[parent]
      this.list[parent] = this.list[child]
      this.list[child] = temp

      this.percolateUp(parent)
    }
  }

  dequeue() {
    if (this.isEmpty())
      return

    const dequeued = this.list[0]
    this.list[0] = this.list[this.size() - 1]
    this.list.pop()

    this.percolateDown(0)

    return dequeued
  }

  percolateDown(parent) {
    const lChild = (parent * 2) + 1,
          rChild = lChild + 1
    let child = -1

    if (lChild < this.size())
      child = lChild

    if (rChild < this.size() && this.compare(this.list[lChild], this.list[rChild]))
      child = rChild

    if (child !== -1 && this.compare(this.list[parent], this.list[child])) {
      const temp = this.list[parent]
      this.list[parent] = this.list[child]
      this.list[child] = temp

      this.percolateDown(child)
    }
  }
}

