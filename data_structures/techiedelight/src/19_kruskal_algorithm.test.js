// REF: https://www.techiedelight.com/kruskals-algorithm-for-finding-minimum-spanning-tree/

class DisjointSet {
  constructor() {
    this.parent = {};
  }

  makeSet(elementCount) {
    for(let i = 0; i < elementCount; i++) {
      this.parent[i] = i;
    }
  }

  find(element) {
    if (this.parent[element] === element)
      return element;

    return this.find(this.parent[element]);
  }

  union(element1, element2) {
    const root1 = this.find(element1);
    const root2 = this.find(element2);

    if (root1 !== root2) {
      this.parent[root1] = root2;
    }
  }
}

// sort the edges
// make set
// for elementCount - 1
  // fetch an edge
  // determine root for src, dest
  // if not same then add in mst
//return mst in format {source: 0, destination: 1, cost: 7},
function mst(edges, elementCount) {
    const mstEdges = [];
    const ds = new DisjointSet();

    edges.sort((a, b) => a.cost - b.cost);

    ds.makeSet(elementCount);

    let index = 0;
    while(mstEdges.length != elementCount - 1) {
      const edge = edges[index];

      const srcRoot = ds.find(edge.source);
      const destRoot = ds.find(edge.destination);

      if (srcRoot !== destRoot) {
        mstEdges.push(edge);
        ds.union(srcRoot, destRoot);
      }

      index++;
    }

    return mstEdges;
}

describe('Kruskal Algorithm', () => {
  it('finds minimum spanning tree', () => {
    let edges;
    let elementCount;

    edges = [
      {source: 0, destination: 1, cost: 7},
      {source: 1, destination: 2, cost: 8},
      {source: 0, destination: 3, cost: 5},
      {source: 1, destination: 3, cost: 9},
      {source: 1, destination: 4, cost: 7},
      {source: 2, destination: 4, cost: 5},
      {source: 3, destination: 4, cost: 15},
      {source: 3, destination: 5, cost: 6},
      {source: 4, destination: 5, cost: 8},
      {source: 4, destination: 6, cost: 9},
      {source: 5, destination: 6, cost: 11},
    ];
    elementCount = 7;

    const expectedEdges = [
      {source: 0, destination: 3, cost: 5},
      {source: 2, destination: 4, cost: 5},
      {source: 3, destination: 5, cost: 6},
      {source: 0, destination: 1, cost: 7},
      {source: 1, destination: 4, cost: 7},
      {source: 4, destination: 6, cost: 9},
    ];
    expect(mst(edges, elementCount)).toEqual(expectedEdges);
  });
});
