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
