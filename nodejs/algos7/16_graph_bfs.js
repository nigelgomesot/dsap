const assert = require('assert')
const { Graph, Edge } = require('./10_graph')
const PriorityQueue = require('./06_priority_queue')

const compareFn = (item1, item2) => {
  return item1 > item2
}

const bfs = graph => {
  const visited = new Array(graph.nodeCount).fill(false),
        queue = new PriorityQueue(compareFn),
        result = []

  for (let i = 0; i < graph.nodeCount; i++) {
    if (!visited[i]) {
      queue.enqueue(i)
      bfsUtil(graph, visited, queue, result)
    }
  }

  return result
}

const bfsUtil = (graph, visited, queue, result) => {
  while (!queue.isEmpty()) {
    const vertex = queue.dequeue()

    if (!visited[vertex]) {
      visited[vertex] = true
      result.push(vertex)
    }

    const edges = graph.list[vertex]

    for (const edge of edges) {
      if (!visited[edge.destination])
        queue.enqueue(edge.destination)
    }
  }
}

let nodeCount,
    graph,
    edges

nodeCount = 13
graph = new Graph(nodeCount, true)
edges = [
  {source: 1, destination: 2},
  {source: 1, destination: 7},
  {source: 1, destination: 8},
  {source: 2, destination: 3},
  {source: 2, destination: 6},
  {source: 3, destination: 4},
  {source: 3, destination: 5},
  {source: 8, destination: 9},
  {source: 8, destination: 12},
  {source: 9, destination: 10},
  {source: 9, destination: 11},
]
graph.addEdges(edges)
assert.deepEqual(bfs(graph), [0,1,2,3,4,5,6,7,8,9,10,11,12])
console.log('bfs done.')
