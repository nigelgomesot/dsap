const assert = require('assert')

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  build(values) {
    this.root = this.buildUtil(values, 0)
  }

  buildUtil(values, nodeIndex) {
    const len = values.length

    const node = new Node(values[nodeIndex]),
          leftIndex = 2 * nodeIndex + 1,
          rightIndex = leftIndex + 1

    if (leftIndex < len)
      node.left = this.buildUtil(values, leftIndex)

    if (rightIndex < len)
      node.right = this.buildUtil(values, rightIndex)

    return node
  }

  fetchPreOrder() {
    const result = []

    this.fetchPreOrderUtil(result, this.root)

    return result
  }

  fetchPreOrderUtil(result, node) {
    if (node) {
      result.push(node.value)
      this.fetchPreOrderUtil(result, node.left)
      this.fetchPreOrderUtil(result, node.right)
    }
  }

  fetchPostOrder() {
    const result = []

    this.fetchPostOrderUtil(result, this.root)

    return result
  }

  fetchPostOrderUtil(result, node) {
    if (node) {
      this.fetchPostOrderUtil(result, node.left)
      this.fetchPostOrderUtil(result, node.right)
      result.push(node.value)
    }
  }

  fetchInOrder() {
    const result = []

    this.fetchInOrderUtil(result, this.root)

    return result
  }

  fetchInOrderUtil(result, node) {
    if (node) {
      this.fetchInOrderUtil(result, node.left)
      result.push(node.value)
      this.fetchInOrderUtil(result, node.right)
    }
  }
}

const values = [1,2,3,4,5]
let tree,
    expectedResult

// pre order
tree = new BinaryTree()
tree.build(values)
expectedResult = [1,2,4,5,3]
assert.deepEqual(tree.fetchPreOrder(), expectedResult)

// post order
tree = new BinaryTree()
tree.build(values)
expectedResult = [4,5,2,3,1]
assert.deepEqual(tree.fetchPostOrder(), expectedResult)

// in order
tree = new BinaryTree()
tree.build(values)
expectedResult = [4,2,5,1,3]
assert.deepEqual(tree.fetchInOrder(), expectedResult)

console.log('BinaryTree done.')
