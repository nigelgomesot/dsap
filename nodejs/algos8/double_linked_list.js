'use strict'

class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }

    removeBindings() {
        if (this.prev)
            this.prev.next = this.next

        if (this.next)
            this.next.prev = this.prev
        
        this.prev = null
        this.next = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addHead(node) {
        // head is same, head is null, head === tail, else (its a tail)
        if (!this.head) {
            this.head = node
            this.tail = node
        } if (this.head.value === node.value) {
            return
        } else if (this.head === this.tail) {
            this.head = node
            this.head.next = this.tail
            this.tail.prev = node
        } else {
            if (this.tail.value === node.value)
                this.removeTail()

            node.removeBindings()
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
    }

    removeTail() {
        // tail is missing, head === tail, else
        if (!this.tail) {
            return
        } else if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
    }

    items() {
        const array = []

        let current = this.head
        while (current) {
            array.push(current.value)
            current = current.next
        }

        return array
    }
}

module.exports = { DoubleLinkedList, Node }
