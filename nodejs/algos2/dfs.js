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

const dfsRecursive = graph => {
  const visited = new Array(graph.nodeCount).fill(false)
  const result = []

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    if (!visited[vertex])
      dfsRecursiveUtil(graph, vertex, visited, result)
  }

  return result
}

const dfsRecursiveUtil = (graph, vertex, visited, result) => {
  visited[vertex] = true
  result.push(vertex)

  for (let edge of graph.list[vertex]) {
    if (!visited[edge.destination])
      dfsRecursiveUtil(graph, edge.destination, visited, result)
  }
}


const dfsIterative = graph => {
  const visited = new Array(graph.nodeCount).fill(false)
  const result = []
  const stack = []

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    if (!visited[vertex]) {
      stack.push(vertex)
      dfsIterativeUtil(graph, result, visited, stack)
    }
  }

  return result
}

const dfsIterativeUtil = (graph, result, visited, stack) => {
  while (stack.length) {
    const vertex = stack.pop()

    if (!visited[vertex]) {
      visited[vertex] = true
      result.push(vertex)
    }

    for (const edge of graph.list[vertex]) {
      if (!visited[edge.destination])
        stack.push(edge.destination)
    }
  }
}

let nodeCount,
    graph,
    edges

nodeCount = 13
graph = new Graph(nodeCount, true)
edges = [
  {source: 1, destination: 2},
  {source: 1, destination: 7},
  {source: 1, destination: 8},
  {source: 2, destination: 3},
  {source: 2, destination: 6},
  {source: 3, destination: 4},
  {source: 3, destination: 5},
  {source: 8, destination: 9},
  {source: 8, destination: 12},
  {source: 9, destination: 10},
  {source: 9, destination: 11},
]
graph.addEdges(edges)
assert.deepEqual(dfsRecursive(graph), [0,1,2,3,4,5,6,7,8,9,10,11,12])
console.log('dfsRecursive done.')

assert.deepEqual(dfsIterative(graph), [0,1,2,3,4,5,6,7,8,9,10,11,12])
console.log('dfsIterative done.')
