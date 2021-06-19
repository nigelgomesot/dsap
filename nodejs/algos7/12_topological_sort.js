const assert = require('assert')
const { Graph, Edge } = require('./10_graph')

const topologicalSort = graph => {
  const departures = new Array(graph.nodeCount).fill(-1),
        visited = new Array(graph.nodeCount).fill(false),
        result = []

  let time = 0

  for (let i = 0; i < graph.nodeCount; i++) {
    if (!visited[i])
      time = dfs(graph, departures, visited, time, i)
  }

  for (let i = 0; i < graph.nodeCount; i++) {
    const index = departures.indexOf(Math.max(...departures))

    departures.splice(index, 1, -1)
    result.push(index)
  }

  return result
}

const dfs = (graph, departures, visited, time, vertex) => {
  visited[vertex] = true
  time++

  const edges = graph.list[vertex]

  for (const edge of edges) {
    if (!visited[edge.destination])
      time = dfs(graph, departures, visited, time, edge.destination)
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
