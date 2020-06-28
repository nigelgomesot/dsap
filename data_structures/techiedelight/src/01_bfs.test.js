// REF: https://www.techiedelight.com/breadth-first-search/

import Graph from './graph.js';
import Queue from './queue.js';

function bfs(graph, startIndex) {
  const visited = new Array(graph.size).fill(false);
  const traversed = new Array();
  let q = new Queue();

  visited[startIndex] = true;
  q.enqueue(startIndex);

  while (q.size() > 0) {
    console.log(`q size start ${q.size()}`);
    console.dir(q);
    const nodeIndex = q.dequeue();
    let head = graph.list[nodeIndex].head;
    traversed.push(head.source);

    while (head) {
      if (!visited[head.destination]) {
        visited[head.destination] = true;
        q.enqueue(head.destination);
      }

      head = head.next;
    }
    console.log(`q size end ${q.size()}`);
    console.dir(q);

  }

  return traversed;
}

describe('Breadth First Search', () => {
  it('iterates nodes in BFS order', () => {
    let elementCount;
    let edges;
    let graph;

    elementCount = 4;
    edges = [
      {source: 0, destination: 1},
      {source: 0, destination: 2},
      {source: 1, destination: 2},
      {source: 2, destination: 0},
      {source: 2, destination: 3},
      {source: 3, destination: 3}
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    //expect(bfs(graph, 0)).toEqual([0, 1, 2, 3]);
   expect(bfs(graph, 2)).toEqual([2, 0, 3, 1]);

    elementCount = 15;
    edges = [
      {source: 1, destination: 2},
      {source: 1, destination: 3},
      {source: 1, destination: 4},
      {source: 2, destination: 5},
      {source: 2, destination: 6},
      {source: 5, destination: 9},
      {source: 5, destination: 10},
      {source: 4, destination: 7},
      {source: 4, destination: 8},
      {source: 7, destination: 11},
      {source: 7, destination: 12},
    ]
    graph = new Graph(elementCount);
    graph.addEdges(edges);
    expect(bfs(graph, 0)).toBe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  });
});
