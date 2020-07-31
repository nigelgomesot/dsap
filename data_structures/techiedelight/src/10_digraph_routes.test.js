// REF: https://www.techiedelight.com/total-paths-in-digraph-from-source-to-destination-m-edges/

import Graph from './graph.js';
import Queue from './queue.js';

class Node {
  constructor(vertex, depth) {
    this.vertex = vertex;
    this.depth = depth;
  }
}

function bfs(graph, src, dest, maxEdges) {
  let result = 0;
  const queue = new Queue();
  const startNode = new Node(src, 0);

  queue.enqueue(startNode);

  while (!queue.isEmpty()) {
    const dequeuedNode = queue.dequeue();

    const nodeIndex = dequeuedNode.vertex;
    const depth = dequeuedNode.depth;

    if (nodeIndex === dest && depth === maxEdges) {
      result++;
    }

    if (depth > maxEdges) {
      break;
    }

    const head = graph.list[nodeIndex].head;

    while (head) {
      const enqueuedNode = new Node(head.destination, depth + 1);
      queue.enqueue(enqueuedNode);

      head = head.next;
    }
  }

  return result;
}

describe('Directed Graph Routes', () => {
  it('returns number of routes for given number of edges via BFS', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 1, destination: 2},
      {source: 1, destination: 3},
      {source: 1, destination: 4},
      {source: 2, destination: 4},
      {source: 3, destination: 4},
    ];
    elementCount = 5;
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(bfs(graph, 1, 4, 2)).toEqual(2);

    edges = [
      {source: 0, destination: 6},
      {source: 0, destination: 1},
      {source: 1, destination: 6},
      {source: 1, destination: 5},
      {source: 1, destination: 2},
      {source: 2, destination: 3},
      {source: 3, destination: 4},
      {source: 5, destination: 2},
      {source: 5, destination: 3},
      {source: 5, destination: 4},
      {source: 6, destination: 5},
      {source: 7, destination: 6},
      {source: 7, destination: 1},
    ]

    elementCount = 8;
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(bfs(graph, 0, 3, 4)).toEqual(3);
  });
});
