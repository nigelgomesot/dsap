// REF: https://www.techiedelight.com/check-undirected-graph-contains-cycle-not/

import Graph from './graph.js';
import Queue from './queue.js';

class Node {
  constructor(vertex, parent) {
    this.vertex = vertex;
    this.parent = parent;
  }
}

function bfs(graph, startIndex) {
  const visited = new Array(graph.size).fill(false);
  const queue = new Queue();

  visited[startIndex] = true;
  const startNode = new Node(startIndex, -1);
  queue.enqueue(startNode);

  while (!queue.isEmpty()) {
    const dequeuedNode = queue.dequeue();
    const head = graph.list[dequeuedNode.vertex].head;

    while (head) {
      if (!visited[head.destination]) {
        visited[head.destination] = true;
        const enqueuedNode = new Node(head.destination, dequeuedNode.vertex);
        queue.enqueue(enqueuedNode);

      } else if (head.destination != dequeuedNode.parent) {
          return true;
      }

      head = head.next;
    }
  }

  return false;
}


describe('Verify Cycles', () => {
  it('verifies cycles in a graph via BFS', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 1, destination: 2},
      {source: 1, destination: 3},
      {source: 2, destination: 3},
    ];
    elementCount = 4;
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);
    expect(bfs(graph, 1)).toEqual(true);

    edges = [
      {source: 1, destination: 2},
      {source: 1, destination: 3},
      {source: 1, destination: 4},
      {source: 2, destination: 5},
      {source: 2, destination: 6},
      {source: 5, destination: 9},
      {source: 5, destination: 10},
      {source: 4, destination: 7},
      {source: 4, destination: 8},
      {source: 7, destination: 11},
      {source: 7, destination: 12},
    ];
    elementCount = 13;
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);
    expect(bfs(graph, 1)).toEqual(false);

    edges.push({source: 6, destination: 10})
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);
    expect(bfs(graph, 1)).toEqual(true);
  });
});
