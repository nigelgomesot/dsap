// REF: https://www.techiedelight.com/single-source-shortest-paths-dijkstras-algorithm/

import Graph from './graph';
import PriorityQueue from './priority_queue';

class Node {
  constructor(vertex, distance) {
    this.vertex = vertex;
    this.distance = distance;
  }
}

function comparator(item1, item2) {
  return item1.distance > item2.distance;
}

function dijkstra(graph) {
  const distance = new Array(graph.size).fill(9999);
  const previous = new Array(graph.size).fill(-1);
  const pq = new PriorityQueue(comparator);

  distance[0] = 0;
  const startNode = new Node(0, 0);
  pq.enqueue(startNode);

  while (!pq.isEmpty()) {
    const dequeuedNode = pq.dequeue();
    let head = graph.list[dequeuedNode.vertex].head;

    while (head) {
      const altDistance = distance[dequeuedNode.vertex] + head.cost;
      if (altDistance < distance[head.destination]) {
        distance[head.destination] = altDistance;
        previous[head.destination] = head.source;

        const enqueuedNode =  new Node(head.destination, altDistance);
        pq.enqueue(enqueuedNode);
      }

      head = head.next;
    }
  }

  const result = [];
  for(let i = 0; i < graph.size; i++) {
    result.push({
      destination: i,
      distance: distance[i],
      previous: previous[i],
    })
  }

  return result;
}

describe('Dijkstra Algorithm', () => {
  it('returns shortest path details', () => {
    let edges;
    let elementCount;
    let graph;

    edges = [
      {source: 0, destination: 1, cost: 10},
      {source: 0, destination: 4, cost: 3},
      {source: 1, destination: 2, cost: 2},
      {source: 1, destination: 4, cost: 4},
      {source: 2, destination: 3, cost: 9},
      {source: 3, destination: 2, cost: 7},
      {source: 4, destination: 1, cost: 1},
      {source: 4, destination: 2, cost: 8},
      {source: 4, destination: 3, cost: 2},

    ];
    elementCount = 5;
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    const expectedOutput = [
      {destination: 0, distance: 0, previous: -1},
      {destination: 1, distance: 4, previous: 4},
      {destination: 2, distance: 6, previous: 1},
      {destination: 3, distance: 5, previous: 4},
      {destination: 4, distance: 3, previous: 0}
    ];
    expect(dijkstra(graph)).toEqual(expectedOutput);
  });
});
