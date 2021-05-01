const assert = require('assert')
const { Graph, Edge } = require('./10_graph')
const PriorityQueue = require('./06_priority_queue')

const bfs = graph => {
  const visited = new Array(graph.nodeCount).fill(false),
        result = []

  for (let i = 0; i < graph.nodeCount; i++) {
    if (!visited[i])
      bfsUtil(graph, visited, result, i)
  }

  return result
}

