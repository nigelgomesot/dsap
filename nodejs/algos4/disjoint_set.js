const assert = require('assert')

class DisjointSet {
  constructor() {
    this.parent = {}
  }

  makeSet(universe) {
    for (const element of universe)
      this.parent[element] = element
  }

  getSet(universe) {
    const set = []

    for (const element of universe)
      set.push(this.find(element))

    return set
  }

  find(element) {
    if (this.parent[element] === element)
      return element

    return this.find(this.parent[element])
  }
}

const universe = [1,2,3,4,5]
ds = new DisjointSet()
ds.makeSet(universe)

assert.deepEqual(ds.getSet(universe), [1,2,3,4,5])
