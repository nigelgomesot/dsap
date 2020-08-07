// REF: https://www.techiedelight.com/disjoint-set-data-structure-union-find-algorithm/

class DisjointSet {
  constructor() {
    this.parent = [];
    this.rank = [];
  }

  makeSet(universe) {
    universe.forEach(element => {
      this.parent[element] = element;
      this.rank[element] = 0;
    });
  }

  getSets(universe) {
    const sets = [];
    universe.forEach(element => {
      const set = this.find(element);
      if (set) sets.push(set);
    });

    return sets;
  }

  find(element) {
    if (this.parent[element] === element) return element;

    this.parent[element] = find(parent[element]);
    return this.parent[element];
  }
}

describe('Disjoint Sets', () => {
  it('performs basic operations', () => {
    const disjointSet = new DisjointSet();
    const universe = [1, 2, 3, 4, 5];

    disjointSet.makeSet(universe);
    expect(disjointSet.getSets(universe)).toEqual([1,2,3,4,5]);

    disjointSet.union(4, 3);
    expect(disjointSet.getSets(universe)).toEqual([1,2,3,3,5]);

    disjointSet.union(2, 1);
    expect(disjointSet.getSets(universe)).toEqual([1,1,3,3,5]);

    disjointSet.union(1, 3);
    expect(disjointSet.getSets(universe)).toEqual([3,3,3,3,5]);
  });
});
