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

  union(element1, element2) {
    const parent1 = this.find(element1),
          parent2 = this.find(element2)

    if (parent1 !== parent2) {
      this.parent[parent1] = parent2
    }
  }
}

const universe = [1,2,3,4,5]
ds = new DisjointSet()
ds.makeSet(universe)

assert.deepEqual(ds.getSet(universe), [1,2,3,4,5])

ds.union(4,3)
assert.deepEqual(ds.getSet(universe), [1,2,3,3,5])

ds.union(2,1)
assert.deepEqual(ds.getSet(universe), [1,1,3,3,5])

ds.union(1,3)
assert.deepEqual(ds.getSet(universe), [3,3,3,3,5])

console.log('DisjointSet done')

module.exports = DisjointSet
