const assert = require('assert')
const { Graphh, Edge } = require('./graph')

const cycleDetect1 = graph => {
  const visited = new Array(graph.nodeCount).fill(false),
        departures = new Array(graph.nodeCount).fill(0)

  let time = 0

  for (let i = 0; i < graph.nodeCount; i++) {
    if (!visited[i])
      time = dfs(graph, visited, departures, i, time)
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

