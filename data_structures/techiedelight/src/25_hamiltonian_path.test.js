// REF: https://www.techiedelight.com/print-all-hamiltonian-path-present-in-a-graph/

import Graph from './graph';

function hamiltonPaths(graph, startVertex) {
  const visited = new Array(graph.size).fill(false);
  const path = [];
  const allPaths = [];

  visited[startVertex] = true;
  path.push(startVertex);

  backtrack(graph, startVertex, visited, path, allPaths);

  return allPaths;
}

function backtrack(graph, vertex, visited, path, allPaths) {

  if (path.length === graph.size) {
    allPaths.push([...path]);

    return;
  }

  let head = graph.list[vertex].head;

  while (head) {
    if (!visited[head.destination]) {
      visited[head.destination] = true;
      path.push(head.destination);

      backtrack(graph, head.destination, visited, path, allPaths);

      visited[head.destination] = false;
      path.pop();
    }

    head = head.next;
  }
}

describe('Hamiltonian Path', () => {
  it('returns list of all hamiltonian paths', () => {
    let graph,
        elementCount,
        edges,
        startVertex,
        expectedPaths;

    edges = [
      { source: 0, destination: 1 },
      { source: 0, destination: 2 },
      { source: 0, destination: 3 },
      { source: 1, destination: 2 },
      { source: 1, destination: 3 },
      { source: 2, destination: 3 },
    ];
    elementCount = 4;
    graph =  new Graph(elementCount);
    graph.addBiEdges(edges);
    startVertex = 0;

    expectedPaths = [
      [0,1,2,3],
      [0,1,3,2],
      [0,2,1,3],
      [0,2,3,1],
      [0,3,1,2],
      [0,3,2,1],
    ];
    expect(hamiltonPaths(graph, startVertex)).toEqual(expectedPaths);
  });
});
