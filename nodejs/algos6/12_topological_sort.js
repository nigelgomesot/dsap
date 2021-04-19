const assert = require('assert')
const {Graph, Edge } = require('./10_graph')

const topologicalSort = graph => {
  const visited = new Array(graph.nodeCount).fill(false),
        departures = new Array(graph.nodeCount).fill(-1),
        result = []

  let time = 0

  for (let i = 0; i < graph.nodeCount; i++) {
    if (!visited[i])
      time = dfs(graph, visited, departures, i, time)
  }

  for (let i = 0; i < graph.nodeCount; i++) {
    const index = departures.indexOf(Math.max(...departures))

    departures.splice(index, 1, -1)
    result.push(index)
  }

  return result
}
