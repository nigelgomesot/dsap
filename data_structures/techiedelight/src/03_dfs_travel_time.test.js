// REF: https://www.techiedelight.com/arrival-departure-time-vertices-dfs/

import Graph from './graph.js';

function dfsTravelTime(graph) {

}

describe('DFS Travel Time', () => {
  it('returns arrival & departure time for each node', () => {
    let elementCount;
    let edges;
    let graph;

    elementCount = 8;
    edges = [
      {source: 0, destination: 1},
      {source: 0, destination: 2},
      {source: 2, destination: 3},
      {source: 2, destination: 4},
      {source: 3, destination: 1},
      {source: 3, destination: 5},
      {source: 4, destination: 5},
      {source: 6, destination: 7},
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    const travelTimes = dfsTravelTime(graph);

    expect(travelTimes['arrival']).toEqual([0, 1, 3, 4, 8, 5, 12, 13]);
    expect(travelTimes['departure']).toEqual([11, 2, 10, 7, 9, 6, 15, 14]);
  });
});
