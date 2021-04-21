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

