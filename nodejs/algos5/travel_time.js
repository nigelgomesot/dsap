const assert = require('assert')
const { Graph, Edge } = require('./graph')

let nodeCount,
    graph,
    edges,
    expectedResult

// REF: https://www.techiedelight.com/arrival-departure-time-vertices-dfs/

const dfsTravelTime = graph => {
  const visited = new Array(graph.nodeCount).fill(false),
        arrivals = new Array(graph.nodeCount).fill(-1),
        departures = new Array(graph.nodeCount).fill(-1),
        result = []

  let time = 0

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    if (!visited[vertex])
      time = dfsTravelTimeUtil(graph, visited, arrivals, departures, vertex, time)
  }

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    result.push({
      vertex: vertex,
      arrival: arrivals[vertex],
      departure: departures[vertex]
    })
  }

  return result
}

const dfsTravelTimeUtil = (graph, visited, arrivals, departures, vertex, time) => {
  visited[vertex] = true
  arrivals[vertex] = time
  time++

  const edges = graph.list[vertex]

  for (const edge of edges) {
    if (!visited[edge.destination])
      time = dfsTravelTimeUtil(graph, visited, arrivals, departures, edge.destination, time)
  }

  departures[vertex] = time
  time++

  return time
}

nodeCount = 8
edges = [
  {source: 0, destination: 1},
  {source: 0, destination: 2},
  {source: 2, destination: 3},
  {source: 2, destination: 4},
  {source: 3, destination: 1},
  {source: 3, destination: 5},
  {source: 4, destination: 5},
  {source: 6, destination: 7},
]
expectedResult = [
  {vertex: 0, arrival: 0, departure: 11},
  {vertex: 1, arrival: 1, departure: 2},
  {vertex: 2, arrival: 3, departure: 10},
  {vertex: 3, arrival: 4, departure: 7},
  {vertex: 4, arrival: 8, departure: 9},
  {vertex: 5, arrival: 5, departure: 6},
  {vertex: 6, arrival: 12, departure: 15},
  {vertex: 7, arrival: 13, departure: 14},
]

graph = new Graph(nodeCount)
graph.addEdges(edges)
assert.deepEqual(dfsTravelTime(graph), expectedResult)
console.log('dfsTravelTime done.')
