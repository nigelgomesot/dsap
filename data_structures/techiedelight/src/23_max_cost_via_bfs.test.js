// REF: https://www.techiedelight.com/maximum-cost-path-graph-source-destination/

import Graph from './graph';
import Queue from './queue';

class Node {
  constructor(vertex, cost, vertices) {
    this.vertex = vertex;
    this.cost = cost;
    this.vertices = vertices;
  }
}

function bfs(graph, source, costThreshold) {
  const q = new Queue();
  const startNode = new Node(source, 0, [source]);
  let maxCost = -9999;

  q.enqueue(startNode);

  while (!q.isEmpty()) {
    const dequeuedNode = q.dequeue();

    if (dequeuedNode.cost > costThreshold) {
      maxCost = Math.max(maxCost, dequeuedNode.cost);
    }

    let head = graph.list[dequeuedNode.vertex].head;

    while (head) {
      if (!dequeuedNode.vertices.includes(head.destination)) {
        const vertices = [...dequeuedNode.vertices];
        vertices.push(head.destination);
        const cost = dequeuedNode.cost + head.cost;

        const enqueuedNode = new Node(head.destination, cost, vertices);
        q.enqueue(enqueuedNode);
      }

      head = head.next;
    }
  }

  return maxCost;
}


describe('Maximum Cost Via BFS', () => {
  it('returns maximum cost above the threshold', () => {
    let edges;
    let graph;
    let elementCount;
    let costThreshold;
    let source;

    edges = [
      {source: 0, destination: 6, cost: 11},
      {source: 0, destination: 1, cost: 5},
      {source: 1, destination: 6, cost: 3},
      {source: 1, destination: 5, cost: 5},
      {source: 1, destination: 2, cost: 7},
      {source: 2, destination: 3, cost: -8},
      {source: 3, destination: 4, cost: 10},
      {source: 5, destination: 2, cost: -1},
      {source: 5, destination: 3, cost: 9},
      {source: 5, destination: 4, cost: 1},
      {source: 6, destination: 5, cost: 2},
      {source: 7, destination: 6, cost: 9},
      {source: 7, destination: 1, cost: 6},
    ];
    elementCount = 8;
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);
    costThreshold = 50;
    source = 0;
    expect(bfs(graph, source, costThreshold)).toEqual(51);
  })
});
