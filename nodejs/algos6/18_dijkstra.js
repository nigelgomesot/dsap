const assert = require('assert')
const { Graph, Edge } = require('./10_graph')
const PriorityQueue = require('./06_priority_queue')

class Node {
  constructor(vertex, distance) {
    this.vertex = vertex
    this.distance = distance
  }
}

const compareFn = (item1, item2) => {
  return item1 > item2
}

const dijkstra = graph => {
  const distance = new Array(graph.nodeCount).fill(Number.MAX_SAFE_INTEGER),
        previous = new Array(graph.nodeCount).fill(-1),
        pq = new PriorityQueue(compareFn),
        result = []

  const startNode = new Node(0, 0)
  pq.enqueue(startNode)
  distance[0] = 0

  while (!pq.isEmpty()) {
    const node = pq.dequeue()

    const edges = graph.list[node.vertex]

    for (const edge of edges) {
      const altDistance = node.distance + edge.cost

      if (distance[edge.destination] > altDistance) {
        distance[edge.destination] = altDistance
        previous[edge.destination] > edge.source

        const nextNode = new Node(edge.destination, altDistance)
        pq.enqueue(nextNode)
      }
    }
  }

  // PENDING.
}
