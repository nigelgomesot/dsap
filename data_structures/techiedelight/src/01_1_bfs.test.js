// REF: https://www.techiedelight.com/breadth-first-search/

import Graph from './graph';
import Queue from './queue';

const bfsMain = graph => {
  const discovered = new Array(graph.size).fill(false);
  const result = [];

  for (let i = 0; i < graph.size; i++) {
    if (!discovered[i])
      bfs(graph, i, discovered, result);
  }

  return result;
}

const bfs = (graph, startVertex, discovered, result) => {
  const q = new Queue();

  q.enqueue(startVertex);

  while (!q.isEmpty()) {
    const dequeuedVertex = q.dequeue();

    discovered[dequeuedVertex] = true;
    result.push(dequeuedVertex);

    let head = graph.list[dequeuedVertex].head;

    while (head) {
      const adjVertex = head.destination;
      if (!discovered[adjVertex])
        q.enqueue(adjVertex);

      head = head.next;
    }
  }
}


describe('BFS', () => {
  it('returns vertices in BFS order', () => {
    let graph,
        elementCount,
        edges;

    edges = [
      { source: 1, destination: 2 },
      { source: 1, destination: 3 },
      { source: 1, destination: 4 },
      { source: 2, destination: 5 },
      { source: 2, destination: 6 },
      { source: 5, destination: 9 },
      { source: 5, destination: 10 },
      { source: 4, destination: 7 },
      { source: 4, destination: 8 },
      { source: 7, destination: 11 },
      { source: 7, destination: 12 },
    ];
    elementCount = 15;
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);

    expect(bfsMain(graph)).toEqual(
      [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    );
  });
});
