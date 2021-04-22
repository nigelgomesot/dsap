const assert = require('assert')
const { Graph, Edge } = require('./10_graph')

let nodeCount,
    graph,
    edges

const cycleDetect1 = graph => {
  const departures = new Array(graph.nodeCount).fill(-1),
        visited =  new Array(graph.nodeCount).fill(false)

  let time = 0

  for (let i = 0; i < graph.nodeCount; i++) {
    if (!visited[i])
      time = dfs(graph, departures, visited, time, i)
  }

  for (let i = 0; i < graph.nodeCount; i++) {
    const edges = graph.list[i]

    for (const edge of edges) {
      if (departures[edge.source] <= departures[edge.destination])
        return true
    }
  }

  return false
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

