// REF: https://www.techiedelight.com/print-k-colorable-configurations-graph-vertex-coloring-graph/

import Graph from './graph';

const COLORS = ["", 'b', 'g', 'r'];

function isSafe(graph, vertex, colors, color) {
  let head = graph.list[vertex].head;

  while (head) {
    if (colors[head.destination] === color)
      return false;

    head = head.next;
  }

  return true;
}

function kColorable(graph, vertex, colorCount, colors, result) {
  if (vertex == graph.size) {
    const row = [];

    for (let i = 0; i < graph.size; i++) {
      row.push(COLORS[colors[i]]);
    }
    result.push(row);

    return;
  }

  for (let color = 1; color <= colorCount; color++) {
    if (isSafe(graph, vertex, colors, color)) {
      colors[vertex] = color;

      kColorable(graph, vertex + 1, colorCount, colors, result);

      colors[vertex] = 0;
    }
  }

  return result;
}

describe('Vertex Coloring', () => {
  it('returns all k-colorable assignments', () => {
    let graph,
        edges,
        elementCount,
        colorCount,
        colors,
        result,
        expectedColors;

    edges = [
      { source: 0, destination: 1 },
      { source: 0, destination: 4 },
      { source: 0, destination: 5 },
      { source: 4, destination: 5 },
      { source: 1, destination: 4 },
      { source: 1, destination: 3 },
      { source: 2, destination: 3 },
      { source: 2, destination: 4 }
    ];
    elementCount = 6;

    graph = new Graph(elementCount);
    graph.addBiEdges(edges);
    colorCount = 3;
    colors = new Array(graph.size).fill(0);
    result = [];

    expectedColors = [
      ['b', 'g', 'b', 'r', 'r', 'g'],
      ['b', 'g', 'g', 'b', 'r', 'g'],
      ['b', 'g', 'g', 'r', 'r', 'g'],
      ['b', 'r', 'b', 'g', 'g', 'r'],
      ['b', 'r', 'r', 'b', 'g', 'r'],
      ['b', 'r', 'r', 'g', 'g', 'r'],

      ['g', 'b', 'b', 'g', 'r', 'b'],
      ['g', 'b', 'b', 'r', 'r', 'b'],
      ['g', 'b', 'g', 'r', 'r', 'b'],
      ['g', 'r', 'g', 'b', 'b', 'r'],
      ['g', 'r', 'r', 'b', 'b', 'r'],
      ['g', 'r', 'r', 'g', 'b', 'r'],

      ['r', 'b', 'b', 'g', 'g', 'b'],
      ['r', 'b', 'b', 'r', 'g', 'b'],
      ['r', 'b', 'r', 'g', 'g', 'b'],
      ['r', 'g', 'g', 'b', 'b', 'g'],
      ['r', 'g', 'g', 'r', 'b', 'g'],
      ['r', 'g', 'r', 'b', 'b', 'g'],
    ];

    expect(kColorable(graph, 0, colorCount, colors, result)).toEqual(expectedColors);
  });
});
