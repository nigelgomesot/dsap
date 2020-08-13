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
    console.log('pq', pq)
    const dequeuedNode = pq.dequeue();
    console.log('dequeuedNode', dequeuedNode)
    console.log('graph.list', graph.list)
    let head = graph.list[dequeuedNode.vertex].head;

    while (head) {
      console.log('head', head)
      const altDistance = distance[dequeuedNode.vertex] + head.cost;
      if (altDistance < distance[head.destination]) {
        distance[head.destination] = altDistance;
        previous[head.destination] = head.source;

        const enqueuedNode =  new Node(head.destination, altDistance);
        console.log('enqueuedNode', enqueuedNode)
        pq.enqueue(enqueuedNode);
      }

      head = head.next;
    }
  }

  console.log('distances', distance);
  console.log('previous', previous);

  return null
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
      {destination: 1, cost: 4, route: [0,4,1]},
      {destination: 2, cost: 6, route: [0,4,1,2]},
      {destination: 3, cost: 5, route: [0,4,3]},
      {destination: 4, cost: 3, route: [0,4]}
    ];
    expect(dijkstra(graph)).toEqual(expectedOutput);
  });
});
