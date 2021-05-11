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

  depth() {
    return this.depthUtil(this.root)
  }

  depthUtil(node) {
    if (!node)
      return 0

    const lDepth = this.depthUtil(node.left),
          rDepth = this.depthUtil(node.right),
          maxDepth = Math.max(lDepth, rDepth)

    return maxDepth + 1
  }

  diameter() {
    return this.diameterUtil(this.root)
  }

  diameterUtil(node) {
    if (!node)
      return 0

    const lDepth = this.depthUtil(node.left),
          rDepth = this.depthUtil(node.right),
          diameter = lDepth + rDepth + 1

    const lDiameter = this.diameterUtil(node.left),
          rDiameter = this.diameterUtil(node.right)

    return Math.max(diameter, lDiameter, rDiameter)
  }

  fetchDFS() {
    const result = [],
          stack = []

    stack.push(this.root)

    while (stack.length) {
      const node = stack.pop()

      result.push(node.value)

      if (node.right)
        stack.push(node.right)

      if (node.left)
        stack.push(node.left)
    }

    return result
  }

  fetchBFS() {
    const result = [],
          queue = []

    queue.push(this.root)

    while (queue.length) {
      const node = queue.shift()

      result.push(node.value)

      if (node.left)
        queue.push(node.left)

      if (node.right)
        queue.push(node.right)
    }

    return result
  }

  leafCount() {
    return this.leafCountUtil(this.root)
  }

  leafCountUtil(node) {
    if (!node)
      return 0

    if (!node.left && !node.right)
      return 1

    const leftLeafCount = this.leafCountUtil(node.left),
          rightLeafCount = this.leafCountUtil(node.right)

    return (leftLeafCount + rightLeafCount)
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

// post order
tree = new Tree()
tree.setBinaryLevelOrder(values)
expectedResult = [4,5,2,3,1]
assert.deepEqual(tree.fetchPostOrder(), expectedResult)

// in order
tree = new Tree()
tree.setBinaryLevelOrder(values)
expectedResult = [4,2,5,1,3]
assert.deepEqual(tree.fetchInOrder(), expectedResult)

// tree depth
tree = new Tree()
tree.setBinaryLevelOrder(values)
assert.equal(tree.depth(), 3)

// tree diameter
tree = new Tree()
tree.setBinaryLevelOrder(values)
assert.equal(tree.diameter(), 4)

// DFS
tree = new Tree()
tree.setBinaryLevelOrder(values)
expectedResult = [1,2,4,5,3]
assert.deepEqual(tree.fetchDFS(), expectedResult)

// BFS
tree = new Tree()
tree.setBinaryLevelOrder(values)
expectedResult = [1,2,3,4,5]
assert.deepEqual(tree.fetchBFS(), expectedResult)

// leaf count
tree = new Tree()
tree.setBinaryLevelOrder(values)
assert.equal(tree.leafCount(), 3)

console.log('Tree done.')
