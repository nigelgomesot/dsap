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

  fetchPostOrder() {
    const result = []

    this.fetchPostOrderUtil(this.root, result)

    return result
  }

  fetchPostOrderUtil(node, result) {
    if (node) {
      this.fetchPostOrderUtil(node.left, result)
      this.fetchPostOrderUtil(node.right, result)
      result.push(node.value)
    }
  }

  fetchInOrder() {
    const result = []

    this.fetchInOrderUtil(this.root, result)

    return result
  }

  fetchInOrderUtil(node, result) {
    if (node) {
      this.fetchInOrderUtil(node.left, result)
      result.push(node.value)
      this.fetchInOrderUtil(node.right, result)
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
          rDepth = this.depthUtil(node.right)

    let diameter = lDepth + rDepth + 1

    const lDiameter = this.diameterUtil(node.left),
          rDiameter = this.diameterUtil(node.right)

    diameter = Math.max(diameter, lDiameter, rDiameter)

    return diameter
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

  trim(minValue, maxValue) {
    return this.trimUtil(this.root, minValue, maxValue)
  }

  trimUtil(node, minValue, maxValue) {
    if (!node)
      return null

    node.lChild = this.trimUtil(node.lChild, minValue, maxValue)
    node.rChild = this.trimUtil(node.rChild, minValue, maxValue)

    if (node.value > maxValue)
      return node.lChild

    if (node.value < minValue)
      return node.rChild

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

const values = [1,2,3,4,5]
let expectedResult

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


// trim tree
// PENDING

console.log('Tree done.')
