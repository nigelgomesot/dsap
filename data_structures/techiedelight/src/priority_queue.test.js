// REF: https://github.com/nigelgomesot/dsap/blob/8ec55757c0189b383bfd3480542fa9faa009364a/data_structures/heap.html

class PriorityQueue {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(item) {
    this.list.push(item);
    this.length++;

    this.percolateUp(this.length - 1);
  }

  percolateUp(child) {
    let parent = Math.floor((child - 1) / 2);

    if (parent < 0)
      return;

    if (this.list[parent] > this.list[child]) {
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

    if (rChild <= this.length && this.list[lChild] > this.list[rChild]) {
      child = rChild;
    }

    if (child !== -1 && this.list[parent] > this.list[child]) {
      let temp = this.list[parent];
      this.list[parent] = this.list[child];
      this.list[child] = temp;
      this.percolateDown(child);
    }
  }
}

describe('Priority Queue', () => {
  it('checks if heap is empty', () => {
    const pq = new PriorityQueue();
    expect(pq.isEmpty()).toEqual(true);
  });

  it('enqueues an item', () => {
    const pq = new PriorityQueue();
    pq.enqueue(20);
    expect(pq.size()).toEqual(1);
    pq.enqueue(10);
    expect(pq.size()).toEqual(2);
  });

  it('dequeues an item', () => {
    const pq = new PriorityQueue();
    pq.enqueue(20);
    pq.enqueue(10);

    expect(pq.dequeue()).toEqual(10);
    expect(pq.dequeue()).toEqual(20);
  });

  it('dequeues items in sorted order', () => {
    const pq = new PriorityQueue();
    const array = [50, 40, 30, 20, 10];
    const result = []
    array.forEach(item => {
      pq.enqueue(item);
    });

    for (let i = 0; i < array.length; i++) {
      result.push(pq.dequeue());
    }
    expect(result).toEqual([10, 20, 30, 40, 50]);
  });
});
