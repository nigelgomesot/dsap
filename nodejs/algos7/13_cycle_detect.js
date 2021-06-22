const assert = require('assert')
const { Graph, Edge } = require('./10_graph')
const DisjointSet = require('./11_disjoint_set')

let nodeCount,
    graph,
    edges

const cycleDetect1 = graph => {
  const visited = new Array(graph.nodeCount).fill(false),
        departures = new Array(graph.nodeCount).fill(-1)

  let time = 0

  for (let i = 0; i < graph.nodeCount; i++) {
    if (!visited[i])
      time = dfs(graph, visited, departures, time, i)
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

const cycleDetect2 = graph => {
  const ds = new DisjointSet(),
        nodes = []

  for (let i = 0; i < graph.nodeCount; i++)
    nodes.push(i)

  ds.makeSet(nodes)

  for (let i = 0; i < graph.nodeCount; i++) {
    const edges = graph.list[i]

    for (const edge of edges) {
      const sourceParent = ds.find(edge.source),
            destinationParent = ds.find(edge.destination)

      if (sourceParent === destinationParent)
        return true
      else
        ds.union(sourceParent, destinationParent)
    }
  }

  return false
}

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
  {source: 11, destination: 12},
];
nodeCount = 13;
graph = new Graph(nodeCount, false)
graph.addEdges(edges)
assert.equal(cycleDetect2(graph), true);

edges.pop();
graph = new Graph(nodeCount, false)
graph.addEdges(edges)
assert.equal(cycleDetect2(graph), false);

console.log('cycleDetect2 done.')
