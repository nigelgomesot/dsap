const assert = require('assert')
const { Graph, Edge } = require('./graph')
const PriorityQueue = require('./priority_queue')

class Node {
  constructor(vertex, distance) {
    this.vertex = vertex
    this.distance = distance
  }
}

const dijkstra = graph => {
  const destination = new Array(graph.nodeCount).fill(Number.MAX_SAFE_INTEGER),
        previous = new Array(graph.nodeCount).fill(-1),
        pq = new PriorityQueue(),
        result = []

  const startNode = new Node(0,0)
  pq.enqueue(startNode)
  destination[0] = 0

  while (!pq.isEmpty()) {
    const node = pq.dequeue()

    const edges = graph.list[node.vertex]

    for (const edge of edges) {
      const altDistance = node.distance + edge.cost

      if (distance[edge.destination] > altDistance) {
        distance[edge.destination] = altDistance
        previous[edge.destination] = edge.source

        const newNode = new Node(edge.destination, altDistance)
        pq.enqueue(newNode)
      }
    }
  }

  // PENDING
}
