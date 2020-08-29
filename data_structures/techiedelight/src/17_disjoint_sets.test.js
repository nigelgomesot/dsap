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
      sets.push(set);
    });

    return sets;
  }

  find(element) {
    if (this.parent[element] !== element)
      this.parent[element] = this.find(this.parent[element]);

    return this.parent[element];
  }

  union(element1, element2) {
    const root1 = this.find(element1);
    const root2 = this.find(element2);

    if (root1 === root2) return;

    if (this.rank[root1] > this.rank[root2]) this.parent[root2] = root1
    else if (this.rank[root1] < this.rank[root2]) this.parent[root1] = root2
    else {
      this.parent[root1] = root2;
      this.rank[root2] += 1;
    }
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
