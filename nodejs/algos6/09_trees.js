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

    const node = Node.new(values[nodeIndex]),
          leftIndex = 2 * nodeIndex + 1,
          rightIndex = leftIndex + 1

    if (leftIndex < len)
      node.left = setBinaryLevelOrderUtil(values, leftIndex)

    if (rightIndex < len)
      node.right = setBinaryLevelOrderUtil(values, rightIndex)

    return node
  }
}


