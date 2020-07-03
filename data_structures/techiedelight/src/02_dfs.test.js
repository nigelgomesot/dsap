// REF: https://www.techiedelight.com/depth-first-search/

import Graph from './graph.js';

function dfs(graph, startIndex) {
  const visited = Array(graph.size).fill(false);
  const traversed = new Array();
  const stack = new Array();

  stack.push(startIndex);

  while (stack.length > 0) {
    const nodeIndex = stack.pop();

    if (visited[nodeIndex]) {
      continue;
    }

    visited[nodeIndex] = true;
    traversed.push(nodeIndex);

    let head = graph.list[nodeIndex].head;

    while (head) {
      if (!visited[head.destination]) {
        stack.push(head.destination);
      }

      head = head.next;
    }
  }

  return traversed;
}

describe('Depth First Search', () => {
  it('iterates nodes in DFS order', () => {
    let elementCount;
    let edges;
    let graph;

    elementCount = 15;
    edges = [
      {source: 0, destination: 1},
      {source: 0, destination: 2},
      {source: 1, destination: 2},
      {source: 2, destination: 0},
      {source: 2, destination: 3},
      {source: 3, destination: 3},
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(dfs(graph,0)).toEqual([0, 1, 2, 3]);
    expect(dfs(graph,2)).toEqual([2, 0, 1, 3]);

    elementCount = 13;
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
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(dfs(graph, 0)).toEqual([0]);
    expect(dfs(graph, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
});
