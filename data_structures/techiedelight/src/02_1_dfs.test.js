// REF: https://www.techiedelight.com/depth-first-search/

import Graph from './graph';

const dfsMain = graph => {
  const visited = new Array(graph.size).fill(false);
  const result = [];

  for (let i = 0; i < graph.size; i++) {
    if (!visited[i])
      dfs(graph, i, visited, result);
  }

  return result;
}

const dfs = (graph, startVertex, visited, result) => {
  visited[startVertex] = true;
  result.push(startVertex);

  let head = graph.list[startVertex].head;

  while (head) {
    if (!visited[head.destination])
      dfs(graph, head.destination, visited, result);

    head = head.next;
  }
}

describe('DFS', () => {
  it('returns vertices in DFS order', () => {
    let graph,
        elementCount,
        edges;

    edges = [
      { source: 1, destination: 2 },
      { source: 1, destination: 7 },
      { source: 1, destination: 8 },
      { source: 2, destination: 3 },
      { source: 2, destination: 6 },
      { source: 3, destination: 4 },
      { source: 3, destination: 5 },
      { source: 8, destination: 9 },
      { source: 8, destination: 12 },
      { source: 9, destination: 10 },
      { source: 9, destination: 11 },
    ];
    elementCount = 13;
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);

    expect(dfsMain(graph)).toEqual(
      [0,1,2,3,4,5,6,7,8,9,10,11,12]
    );
  });
});
