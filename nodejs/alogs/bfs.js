// REF: https://www.techiedelight.com/breadth-first-search/

const assert = require('assert')
const PriorityQueue = require('./priority_queue')

class Edge {
  constructor(source, destination, cost) {
    this.source = source
    this.destination = destination
    this.cost = cost || 1
  }
}

class Graph {
  constructor(nodeCount, undirected = false) {
    this.nodeCount = nodeCount
    this.list = new Array(nodeCount).fill(null).map(() => new Array())
    this.undirected = undirected
  }

  addEdge(source, destination, cost) {
    const edge = new Edge(source, destination, cost)
    this.list[source].push(edge)
  }

  addEdges(edges) {
    for (const edge of edges) {
      this.addEdge(edge.source, edge.destination, edge.cost)

      if (this.undirected)
        this.addEdge(edge.destination, edge.source, edge.cost)
    }
  }
}

const comparator = (value1, value2) => {
  return value1 > value2
}

const bfs = (graph) => {
  const visited = new Array(graph.nodeCount).fill(false)
  const result = new Array()

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    if (!visited[vertex])
      bfsUtil(graph, vertex, visited, result)
  }

  return result
}

const bfsUtil = (graph, startVertex, visited, result) => {
  const pq = new PriorityQueue(comparator)
  pq.enqueue(startVertex)

  while (!pq.isEmpty()) {
    const dequeuedVertex = pq.dequeue()

    visited[dequeuedVertex] = true
    result.push(dequeuedVertex)

    for (const edge of graph.list[dequeuedVertex]) {
      if(!visited[edge.destination]) {
        pq.enqueue(edge.destination)
      }
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
assert.deepEqual(bfs(graph), [0,1,2,3,4,5,6,7,8,9,10,11,12])
console.log('passed.')
