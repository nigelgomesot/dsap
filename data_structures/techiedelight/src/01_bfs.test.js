// REF: https://www.techiedelight.com/breadth-first-search/

import Graph from './graph.js';

describe('Breadth First Search', () => {
  it('iterates nodes in BFS order', () => {
    let elementCount;
    let edges;
    let graph;

    elementCount = 4;
    edges = [
      {source: 0, destination: 1},
      {source: 0, destination: 2},
      {source: 1, destination: 2},
      {source: 2, destination: 0},
      {source: 2, destination: 3},
      {source: 3, destination: 3}
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(graph.bfs).toBe([0, 1, 2, 3]);

    elementCount = 15;
    edges = [
      {source: 1, destination: 2},
      {source: 1, destination: 3},
      {source: 1, destination: 4},
      {source: 2, destination: 5},
      {source: 2, destination: 6},
      {source: 5, destination: 9},
      {source: 5, destination: 10},
      {source: 4, destination: 7},
      {source: 4, destination: 8},
      {source: 7, destination: 11},
      {source: 7, destination: 12},
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(graph.bfs).toBe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  });
});
