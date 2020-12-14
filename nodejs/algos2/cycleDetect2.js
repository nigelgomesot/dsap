const assert = require('assert')
const { Graph, Edge } = require('./graph')
const DisjointSet = require('./disjoint_set')

const cycleDetect2 = graph => {
  const ds = new DisjointSet()
  const nodes = []

  for (let node = 0; node < graph.nodeCount; node++)
    nodes.push(node)

  ds.makeSet(nodes)

  for (let node = 0; node < graph.nodeCount; node++) {
    const edges = graph.list[node]

    for (const edge of edges) {
      const sourceParent = ds.find(edge.source)
      const destinationParent =  ds.find(edge.destination)

      if (sourceParent === destinationParent)
        return true
      else
        ds.union(sourceParent, destinationParent)
    }
  }

  return false
}

let edges,
    nodeCount,
    graph

edges = [
  {source: 1, destination: 2},
  {source: 1, destination: 7},
  {source: 1, destination: 8},
  {source: 2, destination: 3},
  {source: 2, destination: 6},
  {source: 3, destination: 4},
  {source: 3, destination: 5},
  {source: 8, destination: 9},
  {source: 8, destination: 12},
  {source: 9, destination: 10},
  {source: 9, destination: 11},
  {source: 11, destination: 12},
];
nodeCount = 13;
graph = new Graph(nodeCount, false)
graph.addEdges(edges)
assert.equal(cycleDetect2(graph), true);

edges.pop();
graph = new Graph(nodeCount, false)
graph.addEdges(edges)
assert.equal(cycleDetect2(graph), false);

console.log('done.')
