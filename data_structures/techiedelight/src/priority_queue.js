export default class PriorityQueue {
// class PriorityQueue {
  constructor(comparator) {
    this.list = [];
    this.length = 0;
    this.compare = comparator;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(item) {
    this.list[this.length] = item;
    this.length++;
    this.percolateUp(this.length - 1);
  }

  percolateUp(child) {
    let parent = Math.floor((child - 1) / 2);

    if (parent < 0)
      return;

    if (this.compare(this.list[parent], this.list[child])) {
      let temp = this.list[parent];
      this.list[parent] = this.list[child];
      this.list[child] = temp;
      this.percolateUp(parent);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }

    const removed = this.list[0];
    this.list[0] = this.list[this.length - 1];
    this.length--;

    this.percolateDown(0);

    return removed;
  }

  percolateDown(parent) {
    const lChild = (2 * parent) + 1;
    const rChild = lChild + 1;
    let child = -1;

    if (lChild <= this.length) {
      child = lChild;
    }

    if (rChild <= this.length && this.compare(this.list[lChild], this.list[rChild])) {
      child = rChild;
    }

    if (child !== -1 && this.compare(this.list[parent], this.list[child])) {
      let temp = this.list[parent];
      this.list[parent] = this.list[child];
      this.list[child] = temp;
      this.percolateDown(child);
    }
  }
}

// const a = [30,20,10]
// const pq = new PriorityQueue()
// pq.enqueue(a[0])
// pq.enqueue(a[1])
// pq.enqueue(a[2])
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())


// const a = [
//   {k: 10, cost: 3},
//   {k: 20, cost: 2},
//   {k: 30, cost: 1},
// ]
// function comparator(item1, item2) {
//   return item1.cost > item2.cost
// }
// const pq = new PriorityQueue(comparator)
// pq.enqueue(a[0])
// pq.enqueue(a[1])
// pq.enqueue(a[2])
// console.log('pq', pq)
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.length)
