// REF: https://www.techiedelight.com/disjoint-set-data-structure-union-find-algorithm/

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

  getSets(universe) {
    const sets = []

    for (const element of universe) {
      const parent = this.find(element)

      sets.push(parent)
    }

    return sets
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
}

const disjointSet = new DisjointSet()
const universe = [1,2,3,4,5]

disjointSet.makeSet(universe)
assert.deepEqual(disjointSet.getSets(universe), [1,2,3,4,5])

disjointSet.union(4,3)
assert.deepEqual(disjointSet.getSets(universe), [1,2,3,3,5])

disjointSet.union(2,1)
assert.deepEqual(disjointSet.getSets(universe), [1,1,3,3,5])

disjointSet.union(1,3)
assert.deepEqual(disjointSet.getSets(universe), [3,3,3,3,5])
console.log('disjoint set passed')

module.exports = DisjointSet
