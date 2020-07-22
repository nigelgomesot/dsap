// REF: https://www.techiedelight.com/topological-sorting-dag/

import Graph from './graph.js';


function topologicalSort(graph) {
  const visited = new Array(graph.size).fill(false);
  const departure = new Array(graph.size).fill(-1);
  let time = 0;

  for (let i = 0; i < graph.size; i++) {
    if (!visited[i]) {
      time = dfs(graph, i, visited, departure, time);
    }
  }

  // TODO: fix departure.
  return departure;
}

function dfs(graph, nodeIndex, visited, departure, time) {
  visited[nodeIndex] = true;
  time++;
  let head = graph.list[nodeIndex].head;

  while (head) {
    if (!visited[head.destination]) {
      time = dfs(graph, head.destination, visited, departure, time);
    }

    head = head.next;
  }
  departure[nodeIndex] = time;
  time++;

  return time;
}

describe('DAG Topological Sorting', () => {
  it('returns vertices in topological order', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 0, destination: 6},
      {source: 1, destination: 2},
      {source: 1, destination: 4},
      {source: 1, destination: 6},
      {source: 3, destination: 0},
      {source: 3, destination: 4},
      {source: 5, destination: 1},
      {source: 7, destination: 0},
      {source: 7, destination: 1},
    ];
    elementCount = 8;
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(topologicalSort(graph)).toEqual([7, 5, 3, 1, 4, 2, 0, 6]);
  });
});
