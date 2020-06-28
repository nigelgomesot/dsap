class AdjNode {
  constructor(source, destination, cost = 1) {
    this.source = source;
    this.destination = destination;
    this.cost = cost;
    this.next = null;
  }
}

class AdjList {
  constructor() {
    this.head = null;
  }
}

export default class Graph {
  constructor(elementCount) {
    this.size = elementCount;
    this.list = new Array(elementCount);

    for (let i = 0; i < elementCount; i++) {
      this.list[i] = new AdjList();
    }
  }

  addEdge(source, destination, cost = 1) {
    const node = new AdjNode(source, destination, cost);
    let head = this.list[source].head;

    if (!head) {
      this.list[source].head = node;
      return;
    } else {
      while (head.next) {
        head = head.next;
      }
      head.next = node;
    }
  }

  addEdges(edges) {
    edges.forEach(edge => {
      this.addEdge(edge.source, edge.destination);
    });
  }
}
