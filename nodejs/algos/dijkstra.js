// REF: https://www.techiedelight.com/single-source-shortest-paths-dijkstras-algorithm/

const assert = require('assert')
const Graph = require('./graph')
const PriorityQueue = require('./priority_queue')
const { Console } = require('console')

class Node {
  constructor(vertex, distance) {
    this.vertex = vertex
    this.distance = distance
  }
}

const comparator = (value1, value2) => {
  return value1 > value2
}

const dijkstra = graph => {
  const distance = new Array(graph.nodeCount).fill(9999)
  const previous = new Array(graph.nodeCount).fill(-1)
  const pq = new PriorityQueue(comparator)

  const startNode = new Node(0, 0)
  distance[0] = 0
  pq.enqueue(startNode)


  while (!pq.isEmpty()) {
    const node = pq.dequeue()
    console.log('node', node)
    const edges = graph.list[node.vertex]

    for (const edge of edges) {
      const altDistance = node.distance + edge.cost
      if (altDistance < distance[edge.destination]) {
        distance[edge.destination] = altDistance
        previous[edge.destination] = edge.source

        const nextNode = new Node(edge.destination, altDistance)
        pq.enqueue(nextNode)
      }
    }
  }

  console.log('previous', previous)
  console.log('distance', distance)

  const result = []
    for (let i = 0; i < graph.nodeCount; i++) {
      result.push({
        destination: i,
        previous: previous[i],
        distance: distance[i]
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
console.log('passed.')
