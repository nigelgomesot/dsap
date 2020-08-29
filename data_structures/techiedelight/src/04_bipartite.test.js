// REF: https://www.techiedelight.com/bipartite-graph/

import Graph from './graph.js';
import Queue from './queue.js';

function bfs(graph, startIndex) {
  const visited = new Array(graph.size).fill(false);
  const level = new Array(graph.size).fill(-1);
  const queue = new Queue();

  visited[startIndex] = true;
  level[startIndex] = 0;
  queue.enqueue(startIndex);

  while (!queue.isEmpty()) {
    const nodeIndex = queue.dequeue();
    const head = graph.list[nodeIndex].head;

    while (head) {
      if (!visited[head.destination]) {
        visited[head.destination] = true;
        queue.enqueue(head.destination);
        level[head.destination] = level[head.source] + 1;
      }

      if (level[head.source] === level[head.destination]) {
        return false;
      }

      head = head.next;
    }
  }

  return true;
}

function dfs(graph, startIndex) {
  const visited = new Array(graph.size).fill(false);
  const colored = new Array(graph.size).fill(null);
  visited[startIndex] = true;
  colored[startIndex] = true;

  const isBiGraph = dfsRecursive(graph, startIndex, visited, colored);

  return isBiGraph;
}

function dfsRecursive(graph, nodeIndex, visited, colored) {
  if (!graph.list[nodeIndex]) {
    return true;
  }

  let head = graph.list[nodeIndex].head;

  while (head) {
    if (!visited[head.destination]) {
      visited[head.destination] = true;
      colored[head.destination] = !colored[head.source];

      const isBiGraph = dfsRecursive(graph, head.destination, visited, colored);

      if (!isBiGraph) {
        return false;
      }
    }

    if (colored[head.source] === colored[head.destination]) {
      return false;
    }

    head = head.next;
  }

  return true;
}

describe('Bipartite Graph', () => {
  it('verifies is bi-graph via BFS', () => {
    let elementCount;
    let edges;
    let graph;

    elementCount = 10;
    edges = [
      {source: 1, destination: 2},
      {source: 2, destination: 3},
      {source: 2, destination: 8},
      {source: 3, destination: 4},
      {source: 4, destination: 6},
      {source: 5, destination: 7},
      {source: 5, destination: 9},
      {source: 8, destination: 9},
    ];
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(bfs(graph, 1)).toBe(true);

    edges.push({source: 2, destination: 4})
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(bfs(graph, 1)).toBe(false);
  });

  it('verifies is bi-graph via DFS', () => {
    let elementCount;
    let edges;
    let graph;


    elementCount = 3;
    edges = [
      {source: 1, destination: 2},
      {source: 1, destination: 3},
      {source: 2, destination: 3}
    ];
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(dfs(graph, 1)).toBe(false);

    elementCount = 10;
    edges = [
      {source: 1, destination: 2},
      {source: 2, destination: 3},
      {source: 2, destination: 8},
      {source: 3, destination: 4},
      {source: 4, destination: 6},
      {source: 5, destination: 7},
      {source: 5, destination: 9},
      {source: 8, destination: 9},
    ];
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(dfs(graph, 1)).toBe(true);

    edges.push({source: 2, destination: 4})
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(dfs(graph, 1)).toBe(false);
  });
});
