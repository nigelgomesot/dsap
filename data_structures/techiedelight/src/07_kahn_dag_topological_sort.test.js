// REF: https://www.techiedelight.com/kahn-topological-sort-algorithm/

import Graph from './graph.js';

function kahnTopologicalSort(edges, elementCount) {
  const graph = new Graph(elementCount);
  graph.addEdges(edges);

  const inDegrees = new Array(elementCount).fill(0);

  edges.forEach(edge => {
    inDegrees[edge.destination] += 1;
  });

  const order = new Array();
  const stack = new Array();

  inDegrees.forEach((inDegree, index) => {
    if (inDegree === 0) {
      stack.push(index);
    }
  })

  while(stack.length > 0) {
    const nodeIndex = stack.pop();
    order.push(nodeIndex);

    const head = graph.list[nodeIndex].head;

    while (head) {
      inDegrees[head.destination] -= 1;

      if (inDegrees[head.destination] === 0) {
        stack.push(head.destination)
      }

      head = head.next;
    }
  }

  inDegrees.forEach((inDegree, index) => {
    if (inDegree != 0) {
      order.splice(0, order.length);
    }
  });

  return order;
}

describe('Kahn DAG Topological Sorting', () => {
  it('returns vertices in topological order', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 0, destination: 6},
      {source: 1, destination: 2},
      {source: 1, destination: 4},
      {source: 1, destination: 6},
      {source: 3, destination: 0},
      {source: 3, destination: 4},
      {source: 5, destination: 1},
      {source: 7, destination: 0},
      {source: 7, destination: 1},
    ];
    elementCount = 8;
    expect(kahnTopologicalSort(edges, elementCount)).toEqual([7, 5, 1, 2, 3, 4, 0, 6]);

    edges.push({source: 0, destination: 7});
    expect(kahnTopologicalSort(edges, elementCount)).toEqual([]);
  });
});
