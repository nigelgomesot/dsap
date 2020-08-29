// REF: https://www.techiedelight.com/transitive-closure-graph/

import Graph from './graph.js';

function getConnectivityMatrix(graph) {
  const connectivityMatrix = new Array(graph.size).fill(null).map(() => new Array(graph.size).fill(0));

  for (let i = 0; i < graph.size; i++) {
    connectivityMatrix[i][i] = 1;
    dfs(graph, i, i, connectivityMatrix);
  }

  console.log(connectivityMatrix);
  return connectivityMatrix;
}

function dfs(graph, root, currentVertex, connectivityMatrix) {
  let head = graph.list[currentVertex].head;

  while (head) {
    const child = head.destination;
    if (connectivityMatrix[root][child] === 0) {
      connectivityMatrix[root][child] = 1;
      dfs(graph, root, child, connectivityMatrix);
    }

    head = head.next;
  }
}

describe('Transitive Closure DFS', () => {
  it('returns connectivity matrix', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 0, destination: 2},
      {source: 1, destination: 0},
      {source: 3, destination: 1},
    ];
    elementCount = 4;
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(getConnectivityMatrix(graph)).toEqual([
      [1, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 0 ,1, 0],
      [1, 1, 1, 1],
    ]);
  });
});
