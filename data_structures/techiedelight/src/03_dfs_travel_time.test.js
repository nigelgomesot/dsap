// REF: https://www.techiedelight.com/arrival-departure-time-vertices-dfs/
// REF: https://medium.com/@kumarrocky436/dfs-time-stamp-on-nodes-da76a51a50cb

import Graph from './graph.js';

function dfsTravelTime(graph, startIndex) {
  const visited = Array(graph.size).fill(false);
  const arrivalTime = Array(graph.size).fill(-1);
  const departureTime = Array(graph.size).fill(-1);
  let time = 0;

  dfsTravelTimeRecursive(graph,
    startIndex,
    visited,
    arrivalTime,
    departureTime,
    time);

  return {
    arrivalTime: arrivalTime,
    departureTime: departureTime,
  };
}

function dfsTravelTimeRecursive(graph,
  nodeIndex,
  visited,
  arrivalTime,
  departureTime,
  time) {
  visited[nodeIndex] = true;
  arrivalTime[nodeIndex] = time++;

  let head = graph.list[nodeIndex].head;

  while (head) {
    if (!visited[head.destination]) {
      time = dfsTravelTimeRecursive(graph,
        head.destination,
        visited,
        arrivalTime,
        departureTime,
        time);
    }
    head = head.next;
  }

  departureTime[nodeIndex] = time++;

  return time;
}

describe('DFS Travel Time', () => {
  it('returns arrival & departure time for each node', () => {
    let elementCount;
    let edges;
    let graph;
    let travelTimes;

    elementCount = 5;
    edges = [
      {source: 0, destination: 1},
      {source: 1, destination: 2},
      {source: 2, destination: 3},
      {source: 3, destination: 4},
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    travelTimes = dfsTravelTime(graph, 0);
    console.dir('travelTimes', travelTimes);
    expect(travelTimes['arrivalTime']).toEqual([0, 1, 2, 3, 4]);
    expect(travelTimes['departureTime']).toEqual([9, 8, 7, 6, 5]);

    elementCount = 7;
    edges = [
      {source: 1, destination: 2},
      {source: 1, destination: 3},
      {source: 2, destination: 4},
      {source: 2, destination: 5},
      {source: 3, destination: 6},
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    travelTimes = dfsTravelTime(graph, 1);
    console.dir('travelTimes', travelTimes);
    expect(travelTimes['arrivalTime']).toEqual([-1, 0, 1, 7, 2, 4, 8]);
    expect(travelTimes['departureTime']).toEqual([-1, 11, 6, 10, 3, 5, 9]);

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
    travelTimes = dfsTravelTime(graph, 0);
    console.dir('travelTimes', travelTimes);
    expect(travelTimes['arrivalTime']).toEqual([0, 1, 3, 4, 8, 5, -1, -1]);
    expect(travelTimes['departureTime']).toEqual([11, 2, 10, 7, 9, 6, -1, -1]);
  });
});
