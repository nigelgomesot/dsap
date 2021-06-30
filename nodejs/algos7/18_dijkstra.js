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
        previous[edge.destination] = edge.source

        const nextNode = new Node(edge.destination, altDistance)
        pq.enqueue(nextNode)
      }
    }
  }

  for (let i = 0; i < graph.nodeCount; i++) {
    result.push({
      destination: i,
      distance: distance[i],
      previous: previous[i]
    })
  }

  return result
}

let nodeCount,
    graph,
    edges,
    expectedOutput

nodeCount = 5
graph = new Graph(nodeCount)
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
]
graph.addEdges(edges)
expectedOutput = [
  {destination: 0, distance: 0, previous: -1},
  {destination: 1, distance: 4, previous: 4},
  {destination: 2, distance: 6, previous: 1},
  {destination: 3, distance: 5, previous: 4},
  {destination: 4, distance: 3, previous: 0}
];

assert.deepEqual(dijkstra(graph), expectedOutput)
console.log('dijkstra done.')
