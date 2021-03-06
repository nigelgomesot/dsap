const assert = require('assert')
const { Graph, Edge } = require('./graph')

const topologicalSort = graph => {
  const visited = new Array(graph.nodeCount).fill(false),
        departures = new Array(graph.nodeCount).fill(-1),
        result = []

  let time = 0

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    if (!visited[vertex])
      time = dfs(graph, visited, departures, time, vertex)
  }

  for (let i = 0; i < graph.nodeCount; i++) {
    const vertex = departures.indexOf(Math.max(...departures))

    departures.splice(vertex, 1, -1)
    result.push(vertex)
  }

  return result
}

const dfs = (graph, visited, departures, time, vertex) => {
  visited[vertex] = true
  time++

  const edges = graph.list[vertex]

  for (const edge of edges) {
    if (!visited[edge.destination])
      time = dfs(graph, visited, departures, time, edge.destination)
  }

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
