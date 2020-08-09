// REF: https://www.techiedelight.com/union-find-algorithm-cycle-detection-graph/

import Graph from './graph.js';

class DisjointSet {
  constructor() {
    this.parent = {};
  }

  makeSet(elementCount) {
    for (let i = 1; i <= elementCount; i++) {
      this.parent[i] = i;
    }
  }

  find(element) {
    if (this.parent[element] === element)
      return element

    return this.find(this.parent[element]);
  }

  union(element1, element2) {
    const root1 = this.find(element1);
    const root2 = this.find(element2);

    this.parent[root1] = root2;
  }
}

function detectCycle(graph) {
  const ds = new DisjointSet();
  ds.makeSet(graph.size - 1);

  for (let nodeIndex = 1; nodeIndex < graph.size; nodeIndex++) {
    let head = graph.list[nodeIndex].head;

    while (head) {
      const nodeRoot = ds.find(nodeIndex);
      const destinationRoot = ds.find(head.destination);

      if (nodeRoot === destinationRoot)
        return true
      else
        ds.union(nodeRoot, destinationRoot);

      head = head.next;
    }
  }

  return false;
}

describe('Cycle Detection via Union-Find', () => {
  it('detects cycle exists', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 1, destination: 2},
      {source: 1, destination: 7},
      {source: 1, destination: 8},
      {source: 2, destination: 3},
      {source: 2, destination: 6},
      {source: 3, destination: 4},
      {source: 3, destination: 5},
      {source: 8, destination: 9},
      {source: 8, destination: 12},
      {source: 9, destination: 10},
      {source: 9, destination: 11},
      {source: 11, destination: 12},
    ];
    elementCount = 13;
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(detectCycle(graph)).toEqual(true);

    edges.pop();
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(detectCycle(graph)).toEqual(false);
  });
});
