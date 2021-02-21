const assert = require('assert')

class Edge {
  constructor(source, destination, cost) {
    this.source = source
    this.destination = destination
    this.cost = cost
  }
}

class Graph {
  constructor(nodeCount, undirected = false) {
    this.nodeCount = nodeCount
    this.undirected = undirected
    this.list = new Array(nodeCount).fill(null).map(() => new Array())
  }

  addEdge(source, destination, cost) {
    const edge = new Edge(source, destination, cost)
    const vertex = this.list[source]
    vertex.push(edge)
  }
}

