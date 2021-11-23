'use strict'

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array)
    }

    // S: O(1), T: O(N)
    buildHeap(array) {
        const lastParent = Math.floor((array.length - 2) / 2)

        for (let parent = lastParent; parent >= 0; parent--)
            this.percolateDown(array, parent, array.length -1)

        return array
    }

	// S: O(1), T: O(Log(N))
    percolateDown(heap, currentIdx, endIdx) {
        let child1 = currentIdx * 2 + 1

        while (child1 <= endIdx) {
            const child2 = child1 + 1 <= endIdx ? child1 + 1 : -1
            
            let swapIdx
            if (child2 !== -1 && heap[child2] < heap[child1])
                swapIdx = child2
            else
                swapIdx = child1

            if (heap[swapIdx] <= heap[currentIdx]) {
                this.swap(heap, swapIdx, currentIdx)
                currentIdx = swapIdx
                child1 = currentIdx * 2 + 1
            } else
                return
        }
    }

    // S: O(1), T: O(Log(N))
    percolateUp(heap, currentIdx) {
        let parentIdx = Math.floor((currentIdx - 1) / 2)

        while (parentIdx >= 0 && heap[currentIdx] < heap[parentIdx]) {
            this.swap(heap, currentIdx, parentIdx)
            currentIdx = parentIdx
            parentIdx = Math.floor((currentIdx - 1) / 2)
        }
    }

    swap(array, idx1, idx2) {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    }

	// S: O(1), T: O(1)
    peek() {
        return this.heap[0]
    }

    isEmpty() {
        return this.heap.length === 0
    }

	// S: O(1), T: O(Log(N))
    insert(value) {
        this.heap.push(value)
        this.percolateUp(this.heap, this.heap.length - 1)
    }

	// S: O(1), T: O(Log(N))
    remove() {
        this.swap(this.heap, 0, this.heap.length - 1)
        const removed = this.heap.pop()

        this.percolateDown(this.heap, 0, this.heap.length - 1)

        return removed
    }
}

module.exports = MinHeap