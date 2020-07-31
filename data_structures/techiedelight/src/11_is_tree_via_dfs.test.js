// REF: https://www.techiedelight.com/determine-undirected-graph-tree-acyclic-connected-graph/

import Graph from './graph.js';

function isTreeViaDFS(graph) {
  const visited = new Array(graph.size).fill(false);

  const isTree = dfs(graph, visited, 0, -1);

  if (!isTree)
    return false;

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i])
      return false;
  }

  return true;
}

function dfs(graph, visited, nodeIndex, parentIndex) {
  visited[nodeIndex] = true;

  let head = graph.list[nodeIndex].head;

  while (head) {
    if (!visited[head.destination]) {
      if (!dfs(graph, visited, head.destination, nodeIndex)) {
        return false;
      }
    } else if (head.destination != parentIndex) {
      return false;
    }

    head = head.next;
  }

  return true;
}

describe('Is Tree Via DFS', () => {
  it('checks if undirected graph is a tree via DFS', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 0, destination: 1},
      {source: 1, destination: 2},
      {source: 2, destination: 3},
    ];
    elementCount = 4;
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);
    expect(isTreeViaDFS(graph)).toEqual(true);

    edges.push({source: 3, destination: 1});
    elementCount = 4;
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);
    expect(isTreeViaDFS(graph)).toEqual(false);

    edges = [
      {source: 0, destination: 1},
      {source: 1, destination: 2},
      {source: 2, destination: 3},
      {source: 3, destination: 4},
      {source: 4, destination: 5},
    ];
    elementCount = 6;
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);
    expect(isTreeViaDFS(graph)).toEqual(true);

    edges.push({source: 5, destination: 0});
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);
    expect(isTreeViaDFS(graph)).toEqual(false);
  });
});
