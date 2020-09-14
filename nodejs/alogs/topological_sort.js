// REF: https://www.techiedelight.com/topological-sorting-dag/

const assert =  require('assert')
const Graph = require('./graph')

const topologicalSort = graph => {
  const visited = new Array(graph.nodeCount).fill(false)
  const departures = new Array(graph.nodeCount).fill(-1)
  const result = []
  let time = 0

  for (let vertex = 0; vertex < graph.nodeCount; vertex++) {
    if (!visited[vertex])
      time = dfs(graph, visited, departures, vertex, time)
  }

  for (let vertex = (2 * graph.nodeCount - 1); vertex >= 0; vertex--) {
    if (departures[vertex] > -1)
      result.push(departures[vertex])
  }

  console.log('departures', departures)
  return result
}

const dfs = (graph, visited, departures, vertex, time) => {
  visited[vertex] = true
  const edges = graph.list[vertex]

  for (const edge of edges) {
    const adjVertex = edge.destination

    if (!visited[adjVertex])
      time = dfs(graph, visited, departures, adjVertex, time)
  }

  departures[vertex] = time++

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
