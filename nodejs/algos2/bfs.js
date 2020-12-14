
const assert = require('assert')
const { Graph, Edge } = require('./graph')
const PriorityQueue  = require('./priority_queue')

const bfs = graph => {
  const visited = new Array(graph.nodeCount).fill(false)
  const result = []

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    if (!visited[vertex])
      bfsUtil(graph, result, visited, vertex)
  }

  return result
}

const bfsUtil = (graph, result, visited, vertex) => {
  const pq = new PriorityQueue()
  pq.enqueue(vertex)

  while (!pq.isEmpty()) {
    const dequeuedVertex = pq.dequeue()

    visited[dequeuedVertex] = true
    result.push(dequeuedVertex)

    const edges = graph.list[dequeuedVertex]
    for (const edge of edges) {
      if (!visited[edge.destination])
        pq.enqueue(edge.destination)
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
console.log('bfs done.')
