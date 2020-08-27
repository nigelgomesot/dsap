// REF: https://www.techiedelight.com/greedy-coloring-graph/

import Graph from './graph';

const COLORS = ['', 'b', 'g', 'r', 'y', 'o', 'p', 'bl', 'br', 'w', 'pl', 'v'];

function greedyColorable(graph) {
  const result = [];
  const vertexMap = new Map();

  for (let vertex = 0; vertex < graph.size; vertex++) {
    const assignedSet = new Set();

    let head = graph.list[vertex].head;

    while (head) {
      const assignedColor = vertexMap.get(head.destination);
      if (assignedColor)
        assignedSet.add(assignedColor);

      head = head.next;
    }

    const color = 1;
    for (let i = 1; i < COLORS.length; i++) {
      if (!assignedSet.has(color))
        break;
      color++;
    }

    vertexMap.set(vertex, color);
  }

  for (let i = 0; i < graph.size; i++) {
    result.push(COLORS[vertexMap.get(i)]);
  }

  return result;
}


describe('Greed Coloring', () => {
  it("returns all greedy color assignments", () => {
    let graph,
        elementCount,
        edges;

    edges = [
      { source: 0, destination: 1 },
      { source: 0, destination: 4 },
      { source: 0, destination: 5 },
      { source: 4, destination: 5 },
      { source: 1, destination: 4 },
      { source: 1, destination: 3 },
      { source: 2, destination: 3 },
      { source: 2, destination: 4 },
    ];
    elementCount = 6;
    graph = new Graph(elementCount);
    graph.addBiEdges(edges);

    expect(greedyColorable(graph)).toEqual([
      'b', 'g', 'b', 'r', 'r', 'g'
    ]);
  });
});
