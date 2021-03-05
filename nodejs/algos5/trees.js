// REF: https://github.com/nigelgomesot/dsap/blob/master/data_structures/trees.html

const assert = require('assert')
const { equal } = require('assert')

class Node {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  insertNode(value) {
    this.root = this.insertNodeUtil(this.root, value)
  }

  insertNodeUtil(node, value) {
    if (!node)
      return new Node(value)

    if (node.value > value)
      node.left = this.insertNodeUtil(node.left, value)
    else
      node.right = this.insertNodeUtil(node.right, value)

    return node
  }
}

let tree

tree = new Tree()
tree.insertNode(5)
assert.equal(tree.root.value, 5)
tree.insertNode(4)
assert.equal(tree.root.left.value, 4)
tree.insertNode(6)
assert.equal(tree.root.right.value, 6)

console.log('Tree done.')