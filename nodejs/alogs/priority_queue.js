// REF: https://github.com/nigelgomesot/dsap/blob/task_algos/data_structures/techiedelight/src/priority_queue.js

const assert = require('assert')

class PriorityQueue {
  constructor(comparator) {
    this.list = []
    this.length = 0
    this.compare = comparator
  }

  isEmpty() {
    return this.length === 0
  }

  enqueue(item) {
    this.list[this.length] = item
    this.length++
    this.percolateUp(this.length - 1)
  }

  percolateUp(child) {
    let parent = Math.floor((child - 1) / 2)

    if (parent < 0)
      return

    if (this.compare(this.list[parent], this.list[child])) {
      let temp = this.list[parent]
      this.list[parent] = this.list[child]
      this.list[child] = temp
      this.percolateUp(parent)
    }
  }

  dequeue() {
    if (this.isEmpty())
      return

    const dequeued = this.list[0]
    this.list[0] = this.list[this.length - 1]
    this.length--

    this.percolateDown(0)

    return dequeued
  }

  percolateDown(parent) {
    const lChild = (parent * 2) + 1
    const rChild = lChild + 1
    let child = -1

    if (lChild <= this.length)
      child = lChild

    if (rChild <= this.length && this.compare(this.list[lChild], this.list[rChild]))
      child = rChild

    if (child !== -1 && this.compare(this.list[parent], this.list[child])) {
      let temp = this.list[parent]
      this.list[parent] = this.list[child]
      this.list[child] = temp

      this.percolateDown(child)
    }
  }
}

const comparator = (value1, value2) => {
  return value1 > value2
}

let pq,
    dequeued

pq = new PriorityQueue(comparator)

pq.enqueue(3)
pq.enqueue(2)
pq.enqueue(1)
assert.deepEqual(pq.list, [1,3,2])


dequeued = pq.dequeue()
assert.deepEqual(dequeued, 1)

dequeued = pq.dequeue()
assert.deepEqual(dequeued, 2)

dequeued = pq.dequeue()
assert.deepEqual(dequeued, 3)

console.log('passed.')
