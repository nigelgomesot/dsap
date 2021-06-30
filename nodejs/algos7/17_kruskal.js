const assert = require('assert')
const DisjointSet = require('./11_disjoint_set')

const kruskal = (edges, nodeCount) => {
  const ds = new DisjointSet(),
        mst = [],
        nodes = []

  for (let i = 0; i < nodeCount; i++)
    nodes.push(i)

  ds.makeSet(nodes)

  edges.sort((a, b) => a.cost - b.cost)

  while (mst.length != nodeCount - 1) {
    const edge = edges.shift(),
          sourceParent = ds.find(edge.source),
          destinationParent = ds.find(edge.destination)

    if (sourceParent != destinationParent) {
      mst.push(edge)
      ds.union(sourceParent, destinationParent)
    }
  }

  return mst
}

let edges,
    nodeCount,
    expectedEdges

edges = [
  {source: 0, destination: 1, cost: 7},
  {source: 1, destination: 2, cost: 8},
  {source: 0, destination: 3, cost: 5},
  {source: 1, destination: 3, cost: 9},
  {source: 1, destination: 4, cost: 7},
  {source: 2, destination: 4, cost: 5},
  {source: 3, destination: 4, cost: 15},
  {source: 3, destination: 5, cost: 6},
  {source: 4, destination: 5, cost: 8},
  {source: 4, destination: 6, cost: 9},
  {source: 5, destination: 6, cost: 11},
]
nodeCount = 7

expectedEdges = [
  {source: 0, destination: 3, cost: 5},
  {source: 2, destination: 4, cost: 5},
  {source: 3, destination: 5, cost: 6},
  {source: 0, destination: 1, cost: 7},
  {source: 1, destination: 4, cost: 7},
  {source: 4, destination: 6, cost: 9},
]
assert.deepEqual(kruskal(edges, nodeCount),expectedEdges)
console.log('kruskal done.')
