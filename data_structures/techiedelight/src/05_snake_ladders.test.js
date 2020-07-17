// REF: https://www.techiedelight.com/min-throws-required-to-win-snake-and-ladder-game/

import Graph from './graph.js';
import Queue from './queue.js';

function getMinThrows(snakes, ladders) {
}

describe('Snakes & Ladders', () => {
  it('returns minimum throws required to win the game', () => {
    const elementCount = 10*10;
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
