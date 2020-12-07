
const assert = require('assert')

class PriorityQueue {
  constructor() {
    this.list = []
    this.length = 0
  }

  compare(item1, item2) {
    return item1 > item2
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

    if (this.compare(this.list[parent], this.list[child])) {
      const temp = this.list[parent]
      this.list[parent] = this.list[child]
      this.list[child] =  temp

      this.percolateUp(parent)
    }
  }

  isEmpty() {
    return (this.length === 0)
  }

  dequeue() {
    if (this.isEmpty())
      return null

    const dequeued = this.list[0]
    this.list[0] = this.list[this.length - 1]
    this.list.pop()
    this.length--

    this.percolateDown(0)

    return dequeued
  }

  percolateDown(parent) {
    const lChild = (2 * parent) + 1
    const rChild = lChild + 1
    let child = -1

    if (lChild <= this.length)
      child = lChild

    if (rChild <= this.length && this.compare(this.list[lChild], this.list[rChild]))
      child = rChild

    if (child != -1 && this.compare(this.list[parent], this.list[child])) {
      const temp = this.list[parent]
      this.list[parent] = this.list[child]
      this.list[child] = temp

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
