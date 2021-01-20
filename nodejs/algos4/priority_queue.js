const assert = require('assert')

class PriorityQueue {
  constructor() {
    this.list = []
    this.length = 0
  }

  compare(index1, index2) {
    return this.list[index1] > this.list[index2]
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
      const temp = this.list[parent]
      this.list[parent] = this.list[child]
      this.list[child] = temp

      this.percolateUp(parent)
    }
  }
}

const pq = new PriorityQueue()

assert.deepEqual(pq.list, [])
pq.enqueue(3)
pq.enqueue(2)
pq.enqueue(1)
assert.deepEqual(pq.list, [1,3,2])