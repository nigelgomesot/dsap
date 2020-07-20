// REF: https://www.techiedelight.com/min-throws-required-to-win-snake-and-ladder-game/

import Graph from './graph.js';
import Queue from './queue.js';

class Node {
  constructor(vertex, minimumDistance = 0) {
    this.vertex = vertex;
    this.minimumDistance = minimumDistance;
  }
}

function bfs(graph, startIndex) {
  const visited = new Array(graph.size + 1).fill(false);
  const queue = new Queue();

  visited[startIndex] = true;
  const startNode = new Node(startIndex, 0);
  queue.enqueue(startNode);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    console.log('reached node', node);
    if (node.vertex === 100) {
      return node.minimumDistance;
    }

    let head = graph.list[node.vertex].head;
    //console.log(`head`, head);
    while (head) {
      if (!visited[head.destination]) {
        visited[head.destination] = true;
        const nextNode = new Node(head.destination, node.minimumDistance + 1);
        queue.enqueue(nextNode);
      }

      head = head.next;
    }
  }
}

function getMinThrows(snakes, ladders) {
  const elementCount = 10*10;
  const edges = [];

  for (let i = 0; i < elementCount; i++) {
    for (let j = 1; j <= 6 && i + j < elementCount; j++) {
      const source = i;
      let destination;

      const snake = snakes[i + j] != null ? snakes[i + j] : null;
      const ladder = ladders[i + j] != null ? ladders[i + j] : null;

      if (snake || ladder) {
        destination = snake || ladder;
      } else {
        destination = source + j;
      }

      edges.push({
        source: source, destination: destination
      });
    }
  }

  const graph = new Graph(elementCount);
  graph.addEdges(edges);

  return bfs(graph, 0);
}

describe('Snakes & Ladders', () => {
  it('returns minimum throws required to win the game', () => {

    const snakes = {
      17: 7,
      54: 34,
      62: 19,
      64: 60,
      87: 36,
      93: 73,
      95: 75,
      98: 79,
    };
    const ladders = {
      1: 38,
      4: 14,
      9: 31,
      21: 42,
      28: 84,
      51: 67,
      72: 91,
      80: 99,
    };

    expect(getMinThrows(snakes, ladders)).toEqual(7);
  });
});
