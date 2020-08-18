// REF: https://www.techiedelight.com/pairs-shortest-paths-floyd-warshall-algorithm/

function floyWarshall(adjMatrix) {
  const length = adjMatrix.length;
  const cost = new Array(length).fill(null).map(() => new Array(length));
  const path = new Array(length).fill(null).map(() => new Array(length));
  const result = [];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {

      cost[i][j] = adjMatrix[i][j];

      if (i === j)
        path[i][j] = 0;
      else if (adjMatrix[i][j] === 9999)
        path[i][j] = -1;
      else
      path[i][j] = i;
    }
  }

  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        const altCost = cost[i][k] + cost[k][j];
        if (altCost < cost[i][j]) {
          cost[i][j] = altCost;
          path[i][j] = path[k][j];
        }
      }
    }
  }

  console.log('cost', cost)
  console.log('path', path)

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const route = [];
      route = getRoute(i, j, route, path);

      result.push({
        source: i,
        destination: j,
        route: route
      })
    }
  }

  console.log('result', result);
  return result;
}

function getRoute(v1, v2, route, path) {
  if (v1 === v2)
    return route;

  route.push(v1);
  route = getRoute(v1, path[v1][v2], route, path);

  return route;
}


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
