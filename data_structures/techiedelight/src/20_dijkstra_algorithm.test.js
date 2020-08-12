// REF: https://www.techiedelight.com/single-source-shortest-paths-dijkstras-algorithm/

import Graph from './graph';
import PriorityQueue from './priority_queue';

describe('Dijkstra Algorithm', () => {
  it('returns shortest path details', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 0, destination: 1, cost: 10},
      {source: 0, destination: 4, cost: 3},
      {source: 1, destination: 2, cost: 2},
      {source: 1, destination: 4, cost: 4},
      {source: 2, destination: 3, cost: 9},
      {source: 3, destination: 2, cost: 7},
      {source: 4, destination: 1, cost: 1},
      {source: 4, destination: 2, cost: 8},
      {source: 4, destination: 3, cost: 2},

    ];
    elementCount = 5;
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    const expectedOutput = [
      {destination: 1, cost: 4, route: [0,4,1]},
      {destination: 2, cost: 6, route: [0,4,1,2]},
      {destination: 3, cost: 5, route: [0,4,3]},
      {destination: 4, cost: 3, route: [0,4]}
    ];
    expect(dijkstra(graph)).toEqual(expectedOutput);
  });
});
