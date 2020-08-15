// REF: https://www.techiedelight.com/single-source-shortest-paths-bellman-ford-algorithm/

function bellmanFord(edges, elementCount, source) {
  const distance = new Array(elementCount).fill(9999);
  const previous = new Array(elementCount).fill(-1);
  distance[source] = 0;

  for (let i = 0; i < elementCount; i++) {
    edges.forEach(edge => {
      const altDistance = distance[edge.source] + edge.cost;
      if (altDistance < distance[edge.destination]) {
        distance[edge.destination] = altDistance;
        previous[edge.destination] = edge.source;
      }
    })
  }

  for (let i = 0; i < elementCount; i++) {
    edges.forEach(edge => {
      const altDistance = distance[edge.source] + edge.cost;
      if (altDistance < distance[edge.destination]) {
        distance[edge.destination] = -9999;
        previous[edge.destination] = edge.source;
      }
    })
  }

  const result = []
  for (let i = 0; i < elementCount; i++) {
    result.push(
      { destination: i, distance: distance[i], previous: previous[i] }
    );
  }

  return result;
}

describe("Bellman Ford Algorithm", () => {
  it("returns shortest path & detects negative cycles", () => {
    let edges;
    let elementCount;
    let expectedOutput;

    edges = [
      {source: 0, destination: 1, cost: -1},
      {source: 0, destination: 2, cost: 4},
      {source: 1, destination: 2, cost: 3},
      {source: 1, destination: 3, cost: 2},
      {source: 1, destination: 4, cost: 2},
      {source: 3, destination: 2, cost: 5},
      {source: 3, destination: 1, cost: 1},
      {source: 4, destination: 3, cost: -3},
    ];
    elementCount = 5;
    expectedOutput = [
      {destination: 0, distance: 0, previous: -1},
      {destination: 1, distance: -1, previous: 0},
      {destination: 2, distance: 2, previous: 1},
      {destination: 3, distance: -2, previous: 4},
      {destination: 4, distance: 1, previous: 1},
    ];
    expect(bellmanFord(edges, elementCount, 0)).toEqual(expectedOutput);

    edges = [
      {source: 0, destination: 1, cost: 1},
      {source: 1, destination: 2, cost: 1},
      {source: 2, destination: 4, cost: 1},
      {source: 4, destination: 3, cost: -3},
      {source: 3, destination: 2, cost: 1},
      {source: 1, destination: 5, cost: 4},
      {source: 1, destination: 6, cost: 4},
      {source: 5, destination: 6, cost: 5},
      {source: 6, destination: 7, cost: 4},
      {source: 5, destination: 7, cost: 3},
    ];
    elementCount = 9;
    expectedOutput = [
      {destination: 0, distance: 0, previous: -1},
      {destination: 1, distance: 1, previous: 0},
      {destination: 2, distance: -9999, previous: 3},
      {destination: 3, distance: -9999, previous: 4},
      {destination: 4, distance: -9999, previous: 2},
      {destination: 5, distance: 5, previous: 1},
      {destination: 6, distance: 5, previous: 1},
      {destination: 7, distance: 8, previous: 5},
      {destination: 8, distance: 9999, previous: -1},
    ];
    expect(bellmanFord(edges, elementCount, 0)).toEqual(expectedOutput);
  });
});
