
const assert = require('assert')

class Edge {
  constructor(source, destination, cost) {
    this.source = source
    this.destination = destination
    this.cost = cost
  }
}

class Graph {
  constructor(nodeCount, undirected = false) {
    this.nodeCount = nodeCount
    this.undirected = undirected

    this.list = new Array(nodeCount).fill(null).map(() => new Array())
  }

  addEdges(items) {
    for (const item of items) {
      this.addEdge(
        item.source,
        item.destination,
        item.cost
      )

      if (this.undirected)
        this.addEdge(
          item.destination,
          item.source,
          item.cost
        )
    }
  }

  addEdge(source, destination, cost) {
    const edge = new Edge(
      source,
      destination,
      cost || 1
    )

    const vertex = this.list[source]
    vertex.push(edge)
  }
}

const items = [
  {source: 0, destination: 1, cost: 100},
  {source: 0, destination: 2, cost: 300},
  {source: 1, destination: 2, cost: 200}
]

let graph
let result = []
let expectedResult = []

graph = new Graph(3)
graph.addEdges(items)
graph.list.forEach((edges) => {
  if (edges.length === 0)
    return

  for (const edge of edges)
    result.push({source: edge.source, destination: edge.destination, cost: edge.cost})
})
expectedResult = items
assert.deepEqual(result, expectedResult)

result = []
graph = new Graph(3, true)
graph.addEdges(items)

graph.list.forEach((edges) => {
  if (edges.length === 0)
    return

  for (const edge of edges)
    result.push({source: edge.source, destination: edge.destination, cost: edge.cost})
})
expectedResult = [
  {source: 0, destination: 1, cost: 100},
  {source: 0, destination: 2, cost: 300},
  {source: 1, destination: 0, cost: 100},
  {source: 1, destination: 2, cost: 200},
  {source: 2, destination: 0, cost: 300},
  {source: 2, destination: 1, cost: 200}
]
assert.deepEqual(result, expectedResult)

console.log('done')
