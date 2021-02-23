const assert = require('assert')
const { Graph, Edge } = require('./graph')

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

const dfsRecursive = graph => {
  const visited = new Array(graph.nodeCount).fill(false),
        result = []

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    if (!visited[vertex])
      dfsRecursiveUtil(graph, visited, result, vertex)
  }

  return result
}

const dfsRecursiveUtil = (graph, visited, result, vertex) => {
  visited[vertex] = true
  result.push(vertex)

  for (const edge of graph.list[vertex]) {
    if (!visited[edge.destination])
      dfsRecursiveUtil(graph, visited, result, edge.destination)
  }
}

graph.addEdges(edges)
assert.deepEqual(dfsRecursive(graph), [0,1,2,3,4,5,6,7,8,9,10,11,12])
console.log('dfsRecursive done.')
