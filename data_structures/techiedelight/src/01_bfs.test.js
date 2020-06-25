// REF: https://www.techiedelight.com/breadth-first-search/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue(item) {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }
}


describe('Breadth First Search', () => {
  it('iterates nodes in BFS order', () => {
    let elementCount;
    let edges;
    let graph;

    elementCount = 4;
    edges = [
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 0],
      [2, 3],
      [3, 3]
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(graph.bfs).toBe([0, 1, 2, 3]);

    elementCount = 15;
    edges = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [5, 9],
      [5, 10],
      [4, 7],
      [4, 8],
      [7, 11],
      [7, 12],
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(graph.bfs).toBe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  });
});
