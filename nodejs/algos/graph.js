
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

module.exports = Graph
