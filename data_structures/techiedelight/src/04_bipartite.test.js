// REF: https://www.techiedelight.com/bipartite-graph/

import Graph from './graph.js';

function isBiGraphViaBFS(graph, startIndex) {

}

describe('Bipartite Graph', () => {
  it('verifies bigraph via BFS', () => {
    let elementCount;
    let edges;
    let graph;

    elementCount = 10;
    edges = [
      {source: 1, destination: 2},
      {source: 2, destination: 3},
      {source: 2, destination: 8},
      {source: 3, destination: 4},
      {source: 4, destination: 6},
      {source: 5, destination: 7},
      {source: 5, destination: 9},
      {source: 8, destination: 9},
    ];
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(isBiGraphViaBFS(graph, 1)).toBe(true);

    edges.push({source: 2, destination: 4})
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(isBiGraphViaBFS(graph, 1)).toBe(false);
  });
});
