// REF: https://www.techiedelight.com/2-edge-connectivity-graph/

import Graph from './graph.js';

function getBridges(graph) {
  const visited = new Array(graph.size).fill(false);
  const arrival = new Array(graph.size).fill(-1);
  let time = 0;
  const bridges = [];

  dfs(graph, visited, arrival, 0, -1, time, bridges);

  console.log(bridges);
  return bridges;
}

function dfs(graph, visited, arrival, nodeIndex, parentIndex, time, bridges) {
  visited[nodeIndex] = true;
  arrival[nodeIndex] = time;
  time++;
  let minArrivalTime = arrival[nodeIndex];

  let head = graph.list[nodeIndex].head;

  while (head) {
    if (!visited[head.destination]) {
      const childMinArrivalTime = dfs(graph, visited, arrival, head.destination, nodeIndex, time, bridges);
      minArrivalTime = Math.min(minArrivalTime, childMinArrivalTime);
    } else if (head.destination != parentIndex) {
      minArrivalTime = Math.min(minArrivalTime, arrival[head.destination]);
    }

    head = head.next;
  }

  if (minArrivalTime === arrival[nodeIndex] && parentIndex != -1) {
    bridges.push([parentIndex, nodeIndex]);
  }

  return minArrivalTime;
}

describe('Graph Bridges', () => {
  it('returns graph bridges via DFS', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 0, destination: 2},
      {source: 1, destination: 2},
      {source: 2, destination: 3},
      {source: 2, destination: 4},
      {source: 3, destination: 4},
      {source: 3, destination: 5},
    ];
    elementCount = 6;
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);
    expect(getBridges(graph)).toEqual([
      [2,1],
      [3,5],
      [0,2],
    ]);
  });
});
