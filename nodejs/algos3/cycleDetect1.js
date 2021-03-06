const assert = require('assert')
const { Graph, Edge } = require('./graph')

const cycleDetect1 = graph => {
  const visited = new Array(graph.nodeCount).fill(false),
        departures = new Array(graph.nodeCount).fill(0)

  let time = 0

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    if (!visited[vertex])
      time = dfs(graph, visited, departures, time, vertex)
  }

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
      const edges = graph.list[vertex]

      for (const edge of edges) {
        if (departures[edge.source] <= departures[edge.destination])
          return true
      }
  }

  return false
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

nodeCount = 7
edges = [
  {source: 0, destination: 1},
  {source: 0, destination: 3},
  {source: 1, destination: 2},
  {source: 1, destination: 3},
  {source: 3, destination: 2},
  {source: 3, destination: 4},
  {source: 5, destination: 6},
  {source: 6, destination: 3},
]

graph = new Graph(7)
graph.addEdges(edges)
assert.equal(cycleDetect1(graph), false)

edges.push({source: 3, destination: 0})
graph = new Graph(7)
graph.addEdges(edges)
assert.equal(cycleDetect1(graph), true)
console.log('cycleDetect1 done.')
