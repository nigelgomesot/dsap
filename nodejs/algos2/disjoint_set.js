
const assert = require('assert')

class DisjointSet {
  constructor() {
    this.parent = {}
  }

  makeSet(universe) {
    for (const element of universe) {
      this.parent[element] = element
    }
  }

  find(element) {
    if (this.parent[element] === element)
      return element

    return this.find(this.parent[element])
  }

  getSets(unverse) {
    const sets = []

    for (const element of universe) {
      const parent = this.find(element)

      sets.push(parent)
    }

    return sets
  }
}

const universe = [1,2,3,4,5]
ds = new DisjointSet()
ds.makeSet(universe)

assert.deepEqual(ds.getSets(universe), [1,2,3,4,5])
