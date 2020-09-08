// REF: https://www.techiedelight.com/breadth-first-search/

const assert = require('assert')

class Edge {
  constructor(source, destination, cost) {
    this.source = source
    this.destination = destination
    this.cost = cost || 1
  }
}

class Graph {
  constructor(nodeCount, undirected = false) {
    this.nodeCount = nodeCount
    this.list = new Array(nodeCount).fill(null).map(() => new Array())
    this.undirected = undirected
  }

  addEdge(source, destination, cost) {
    const edge = new Edge(source, destination, cost)
    this.list[source].push(edge)
  }

  addEdges(edges) {
    for (const edge of edges) {
      this.addEdge(edge.source, edge.destination, edge.cost)

      if (this.undirected)
        this.addEdge(edge.destination, edge.source, edge.cost)
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
//    assert.deepEqual(dfs(graph), [0,1,2,3,4,5,6,7,8,9,10,11,12])
//    console.log('passed.')
