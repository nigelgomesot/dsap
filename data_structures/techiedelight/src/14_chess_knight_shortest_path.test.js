// REF: https://www.techiedelight.com/chess-knight-problem-find-shortest-path-source-destination/

import Queue from './queue.js';

const MAX_ROWS = 8;
const KNGHT_VALID_MOVES_X = [2, 2, -2, -2, 1, 1, -1, -1];
const KNGHT_VALID_MOVES_Y = [-1, 1, 1, -1, 2, -2, 2, -2];

class Node {
  constructor(x, y, dist = 0) {
    this.x = x;
    this.y = y;
    this.dist = dist;
  }
}

function shortestPath(src_coord, dest_coord) {
  const src = new Node(src_coord[0], src_coord[1]);
  const dest = new Node(dest_coord[0], dest_coord[1]);

  return bfs(src, dest);
}

function isValidMove(x, y) {
  if (x < 0 || y < 0 || x >= MAX_ROWS || y >= MAX_ROWS)
    return false;

  return true;
}

function isNodeVisited(visited, nextNode) {
  return visited.filter(node => {
    node.x === nextNode.x && node.y === nextNode.y
  }).length > 0;
}

function bfs(src, dest) {
  const visited = [];
  const queue = new Queue();

  queue.enqueue(src);

  while(!queue.isEmpty()) {
    const node = queue.dequeue();

    if (node.x === dest.x && node.y === dest.y) {
      return node.dist;
    }

    for (let i = 0; i < MAX_ROWS; i++) {
      const nextMoveX = node.x + KNGHT_VALID_MOVES_X[i];
      const nextMoveY = node.y + KNGHT_VALID_MOVES_Y[i];

      if (isValidMove(nextMoveX, nextMoveY)) {
        const nextNode = new Node(nextMoveX, nextMoveY, node.dist + 1);

        if (!isNodeVisited(visited, nextNode)) {
          //console.log('nextNode', nextNode);
          queue.enqueue(nextNode);
        }
      }
    }
  }

  return -1;
}

describe('Chess Knight Shortest Path', () => {
  it('returns shortest path via BFS', () => {
    let src;
    let dest;

    src = [0,7];
    dest = [7,0];
    expect(shortestPath(src, dest)).toEqual(6);

    src = [0,7];
    dest = [0,6];
    expect(shortestPath(src, dest)).toEqual(3);
  });
});
