// REF: https://www.techiedelight.com/print-k-colorable-configurations-graph-vertex-coloring-graph/

import Graph from './graph';

describe('Vertex Coloring', () => {
  it('returns all k-colorable assignments', () => {
    let graph,
        edges,
        elementCount,
        colorCount,
        colors,
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
    colors = [];
    colorCount = 3;

    graph.kColorable(0, colors, colorCount);

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

    expect(graph.kColorable(0, colors, colorCount)).toEqual(expectedColors);
  });
});
