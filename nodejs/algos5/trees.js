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

  setBinaryLevelOrder(values) {
    this.root = this.setBinaryLevelOrderUtil(values, 0)
  }

  setBinaryLevelOrderUtil(values, nodeIndex) {
    let len = values.length
    const node = new Node(values[nodeIndex]),
          leftIndex = 2 * nodeIndex + 1,
          rightIndex = leftIndex + 1

    if (leftIndex < len)
      node.left = this.setBinaryLevelOrderUtil(values, leftIndex)

    if (rightIndex < len)
      node.right = this.setBinaryLevelOrderUtil(values, rightIndex)

    return node
  }

  fetchPreOrder() {
    const result = []

    this.fetchPreOrderUtil(this.root, result)

    return result
  }

  fetchPreOrderUtil = (node, result) => {
    if (node) {
      result.push(node.value)
      this.fetchPreOrderUtil(node.left, result)
      this.fetchPreOrderUtil(node.right, result)
    }
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

const values = [1,2,3,4,5]
let expectedResult

// pre order
tree = new Tree()
tree.setBinaryLevelOrder(values)

expectedResult = [1,2,4,5,3]
assert.deepEqual(tree.fetchPreOrder(), expectedResult)

console.log('Tree done.')
