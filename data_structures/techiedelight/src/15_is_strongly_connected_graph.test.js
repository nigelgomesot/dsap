// REF: https://www.techiedelight.com/check-given-graph-strongly-connected-not/

import Graph from './graph.js';

function isStronglyConnectedViaDFS(graph) {
  for (let i = 0; i < graph.size; i++) {
    const visited = new Array(graph.size).fill(false);

    dfs(graph, visited, i);

    if (visited.includes(false))
      return false;
  }

  return true;
}

function dfs(graph, visited, nodeIndex) {
  visited[nodeIndex] = true;
  let head = graph.list[nodeIndex].head;

  while (head) {
    if (!visited[head.destination]) {
      dfs(graph, visited, head.destination);
    }

    head = head.next;
  }
}

describe('Is Strongly Connected Graph', () => {
  it('checks via DFS', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 0, destination: 4},
      {source: 1, destination: 0},
      {source: 1, destination: 2},
      {source: 2, destination: 1},
      {source: 2, destination: 4},
      {source: 3, destination: 1},
      {source: 3, destination: 2},
      {source: 4, destination: 3},
    ];
    elementCount = 5;
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(isStronglyConnectedViaDFS(graph)).toEqual(true);

    edges.pop();
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(isStronglyConnectedViaDFS(graph)).toEqual(false);
  });
});
