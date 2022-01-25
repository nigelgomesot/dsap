'use strict'

class Heap {
    constructor(array, compareFn) {
        this.compareFn = compareFn
        this.heap = this.buildHeap(array)
    }

    // S: O(1)
    // T: O(N)
    buildHeap(array) {
        let lastParent = Math.floor(array.length / 2)

        for (let i = lastParent; i >= 0; i--) {
            this.percolateDown(array, i, array.length - 1)
        }

        return array
    }

    // S: O(1)
    // T: O(LogN)
    percolateDown(heap, parent, endIdx) {
        let child1 = parent * 2 + 1

        while (child1 <= endIdx) {
            let child2 = child1 + 1 <= endIdx ?  child1 + 1 : -1

            let swapIdx
            if (child2 != -1 && this.compareFn(heap[child2], heap[child1]))
                swapIdx = child2
            else
                swapIdx = child1

            if (this.compareFn(heap[swapIdx], heap[parent])) {
                this.swap(heap, swapIdx, parent)
                parent = swapIdx
                child1 = parent * 2 + 1
            } else
                return
        }
    }

    remove() {
        this.swap(this.heap, 0, this.heap.length - 1)
        const removed = this.heap.pop()
        this.percolateDown(this.heap, 0, this.heap.length - 1)

        return removed
    }

    swap(heap, idx1, idx2) {
        [heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]]
    }

    // S: O(1)
    // T: O(1)
    peek() {
        return this.heap[0]
    }
}

module.exports = Heap
