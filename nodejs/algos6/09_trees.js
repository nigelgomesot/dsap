const assert = require('assert')

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

  setBinaryLevelOrder(values) {
    this.root = this.setBinaryLevelOrderUtil(values, 0)
  }

  setBinaryLevelOrderUtil(values, nodeIndex) {
    const len = values.length

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
}

const values = [1,2,3,4,5]
let tree,
    expectedResult

tree = new Tree()

// pre order
tree = new Tree()
tree.setBinaryLevelOrder(values)
expectedResult = [1,2,4,5,3]
assert.deepEqual(tree.fetchPreOrder(), expectedResult)


console.log('Tree done.')
