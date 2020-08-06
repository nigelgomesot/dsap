// REF: https://www.techiedelight.com/check-graph-strongly-connected-one-dfs-traversal/

import Graph from './graph.js';

function isStronglyConnectedVia1DFS(graph) {
  const visited = new Array(graph.size).fill(false);
  const time = -1;
  const arrivals = [];
  let isSC = true;

  dfs(graph, visited, arrivals, time, isSC, 0);

  if (visited.includes(false))
    isSC = false;

  return isSC;
}

function dfs(graph, visited, arrivals, time, isSC, nodeIndex) {
  if (!isSC) {
    return false;
  }

  visited[nodeIndex] = true;
  time++;
  arrivals[nodeIndex] = time;
  let arrival = arrivals[nodeIndex];

  let head = graph.list[nodeIndex].head;
  while(head) {
    if (!visited[head.destination]) {
      const childArrival = dfs(graph, visited, arrivals, time, isSC, head.destination);
      arrival = Math.min(arrival, childArrival);
    } else {
      arrival = Math.min(arrival, arrivals[head.destination]);
    }

    head = head.next;
  }

  if (nodeIndex !== 0 && arrival === arrivals[nodeIndex]) {
    isSC = false;
  }

  return arrival;
}

describe('Is Strongly Connected Graph', () => {
  it('checks via 1 DFS traversal', () => {
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
    expect(isStronglyConnectedVia1DFS(graph)).toEqual(true);

    edges.pop();
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(isStronglyConnectedVia1DFS(graph)).toEqual(false);
  });
});
