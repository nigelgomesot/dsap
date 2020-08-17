// REF: https://www.techiedelight.com/pairs-shortest-paths-floyd-warshall-algorithm/

describe('Floyd Warshall Algorithm', () => {
  it('returns shortest path for all vertices', () => {
    let adjMatrix = [
      [0,    9999, -2,   9999],
      [4,    0,    3,    9999],
      [9999, 9999, 0,    2   ],
      [9999, -1,   9999, 0   ]
    ]

    expect(floyWarshall(adjMatrix)).toEqual([
      {source: 0, destination: 1, route: [0,2,3,1]},
      {source: 0, destination: 2, route: [0,2]},
      {source: 0, destination: 3, route: [0,2,3]},
      {source: 1, destination: 0, route: [1,0]},
      {source: 1, destination: 2, route: [1,0,2]},
      {source: 1, destination: 3, route: [1,0,2,3]},
      {source: 2, destination: 0, route: [2,3,1,0]},
      {source: 2, destination: 1, route: [2,3,1]},
      {source: 2, destination: 3, route: [2,3]},
      {source: 3, destination: 0, route: [3,1,0]},
      {source: 3, destination: 1, route: [3,1]},
      {source: 3, destination: 2, route: [3,1,0,2]},
    ])
  });
});
