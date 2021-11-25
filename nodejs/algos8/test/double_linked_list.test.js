'use strict'

const { DoubleLinkedList, Node } = require('../double_linked_list')

test('constructs a double linked list', () => {
    const dll = new DoubleLinkedList()

    dll.addHead(new Node('a', 1))
    expect(dll.items()).toStrictEqual([1])

    dll.addHead(new Node('b', 2))
    expect(dll.items()).toStrictEqual([2, 1])

    dll.addHead(new Node('c', 3))
    expect(dll.items()).toStrictEqual([3, 2, 1])

    dll.addHead(new Node('c', 3))
    expect(dll.items()).toStrictEqual([3, 2, 1])

    dll.addHead(new Node('a', 1))
    expect(dll.items()).toStrictEqual([1, 3, 2])

    dll.removeTail()
    expect(dll.items()).toStrictEqual([1, 3])

    dll.removeTail()
    expect(dll.items()).toStrictEqual([1])

    dll.removeTail()
    expect(dll.items()).toStrictEqual([])
})
