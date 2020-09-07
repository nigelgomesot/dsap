// REF: https://www.techiedelight.com/depth-first-search/

const assert = require('assert')

class Edge {
  constructor(source, destination, cost) {
    this.source =  source
    this.destination = destination
    this.cost =  cost
  }
}

class Graph {
  constructor(nodeCount, undirected = false) {
    this.nodeCount = nodeCount
    this.undirected = undirected

    this.list = new Array(nodeCount).fill(null).map(() => new Array())
  }

  addEdges(items) {
    for (const item of items) {
      this.addEdge(
        item.source,
        item.destination,
        item.cost
      )

      if (this.undirected) {
        this.addEdge(
          item.destination,
          item.source,
          item.cost
        )
      }
    }
  }

  addEdge(source, destination, cost) {
    const edge = new Edge(
      source,
      destination,
      cost || 1
    )
    const vertex = this.list[edge.source]
    vertex.push(edge)
  }
}

const dfs = graph => {
  const visited = new Array(graph).fill(false)
  const result = []

  for (let vertex = 0; vertex < graph.nodeCount; vertex++)
    if (!visited[vertex])
      dfsRecursive(graph, vertex, visited, result)

  return result
}

const dfsRecursive = (graph, vertex, visited, result) => {
  visited[vertex] = true
  result.push(vertex)

  for (let edge of graph.list[vertex]) {
    if (!visited[edge.destination])
      dfsRecursive(graph, edge.destination, visited, result)
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
assert.deepEqual(dfs(graph), [0,1,2,3,4,5,6,7,8,9,10,11,12])
console.log('passed.')
