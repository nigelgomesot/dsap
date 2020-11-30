
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

  union(element1, element2) {
    const parent1 = this.find(element1)
    const parent2 = this.find(element2)

    if (parent1 !== parent2)
      this.parent[parent1] = parent2
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

ds.union(4,3)
assert.deepEqual(ds.getSets(universe), [1,2,3,3,5])

ds.union(2,1)
assert.deepEqual(ds.getSets(universe), [1,1,3,3,5])

ds.union(1,3)
assert.deepEqual(ds.getSets(universe), [3,3,3,3,5])
