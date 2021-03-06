
const assert = require('assert')
const { Graph, Edge } = require('./graph')

const topologicalSort = graph => {
  const visited = new Array(graph.nodeCount).fill(false)
  const departures = new Array(graph.nodeCount).fill(-1)
  const vertices = []
  let time = 0

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    if (!visited[vertex])
      time = topologicalSortUtil(graph, visited, departures, vertex, time)
  }

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    const vertex = departures.indexOf(Math.max(...departures))
    departures.splice(vertex, 1, -1)
    vertices.push(vertex)
  }

  return vertices
}

const topologicalSortUtil = (graph, visited, departures, vertex, time) => {
  visited[vertex] = true
  // track arrival at `vertex`
  time++

  const edges = graph.list[vertex]

  for (const edge of edges) {
    if (!(visited[edge.destination]))
      time = topologicalSortUtil(graph, visited, departures, edge.destination, time)
  }

  // track departure at `vertex`
  departures[vertex] = time
  time++

  return time
}

let nodeCount,
    graph,
    edges

nodeCount = 8
edges = [
  {source: 0, destination: 6},
  {source: 1, destination: 2},
  {source: 1, destination: 4},
  {source: 1, destination: 6},
  {source: 3, destination: 0},
  {source: 3, destination: 4},
  {source: 5, destination: 1},
  {source: 7, destination: 0},
  {source: 7, destination: 1},
]

graph = new Graph(nodeCount)
graph.addEdges(edges)
assert.deepEqual(topologicalSort(graph),[7,5,3,1,4,2,0,6])
console.log('topologicalSort done')
