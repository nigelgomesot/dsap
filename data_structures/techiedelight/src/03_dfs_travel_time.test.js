// REF: https://www.techiedelight.com/arrival-departure-time-vertices-dfs/
// REF: https://medium.com/@kumarrocky436/dfs-time-stamp-on-nodes-da76a51a50cb

import Graph from './graph.js';

function dfsTravelTime(graph, startIndex) {
  const visited = Array(graph.size).fill(false);
  const arrivalTime = Array(graph.size).fill(-1);
  const departureTime = Array(graph.size).fill(-1);
  const traversed = new Array();
  const stack = new Array();
  let time = -1;

  arrivalTime[startIndex] = ++time;
  stack.push(startIndex);

  while (stack.length > 0) {
    const nodeIndex = stack.pop();

    if (visited[nodeIndex]) {
      continue;
    }
    visited[nodeIndex] = true;
    departureTime[nodeIndex] = ++time;
    traversed.push(nodeIndex);

    let head = graph.list[nodeIndex].head;

    while (head) {
      if (!visited[head.destination]) {
        arrivalTime[head.destination] = ++time;
        stack.push(head.destination);
      }

      head = head.next;
    }
  }

  return {
    arrivalTime: arrivalTime,
    departureTime: departureTime,
    traversed: traversed,
  };
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
    graph = new Graph(elementCount, true);
    graph.addEdges(edges);
    const travelTimes = dfsTravelTime(graph, 0);
    console.dir('travelTimes', travelTimes);
    expect(travelTimes['arrivalTime']).toEqual([0, 1, 3, 4, 8, 5, 12, 13]);
    expect(travelTimes['departureTime']).toEqual([11, 2, 10, 7, 9, 6, 15, 14]);
  });
});
