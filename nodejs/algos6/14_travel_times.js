const assert = require('assert')
const { Graph, Edge } = require('./10_graph')

const travelTime = graph => {
  const visited = new Array(graph.nodeCount).fill(false),
        arrivals = new Array(graph.nodeCount).fill(-1),
        departures = new Array(graph.nodeCount).fill(-1),
        result = []

  let time = 0

  for (let i = 0; i < graph.nodeCount; i++) {
    if (!visited[i])
      time = dfs(graph, visited, departures, arrivals, i, time)
  }

  for (let i = 0; i < graph.nodeCount; i++) {
    result.push({
      vertex: i,
      arrival: arrivals[i],
      departure: departures[i]
    })
  }

  return result
}

