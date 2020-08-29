// REF: https://www.techiedelight.com/check-given-digraph-dag-directed-acyclic-graph-not/

import Graph from './graph.js';

function isDAG(graph) {
  const visited = new Array(graph.size).fill(false);
  const departures = new Array(graph.size).fill(-1);
  let time = 0;

  for (let i = 0; i < graph.size; i++) {
    if (!visited[i])
      time = dfs(graph, visited, departures, i, time);
  }

  for (let i = 0; i < graph.size; i++) {
    let head = graph.list[i].head;

    while (head) {
      if (departures[i] <= departures[head.destination]) {
        return false;
      }

      head = head.next;
    }
  }

  return true;
}

function dfs(graph, visited, departures, nodeIndex, time) {
  visited[nodeIndex] = true;

  let head = graph.list[nodeIndex].head;

  while (head) {
    if (!visited[head.destination]) {
      time = dfs(graph, visited, departures, head.destination, time);
    }

    head = head.next;
  }

  departures[nodeIndex] = time++;

  return time;
}

describe('Is DAG', () => {
  it('checks graph is DAG via DFS', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 0, destination: 1},
      {source: 0, destination: 3},
      {source: 1, destination: 2},
      {source: 1, destination: 3},
      {source: 3, destination: 2},
      {source: 3, destination: 4},
      {source: 5, destination: 6},
      {source: 6, destination: 3},
    ];
    elementCount = 7;
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(isDAG(graph)).toEqual(true);

    edges.push({source: 3, destination: 0});
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(isDAG(graph)).toEqual(false);
  });
});
