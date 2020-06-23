import minKnightMoves from './10_min_knight_moves.js';

describe('minKnightMoves', () => {
  it('returns minimum number of moves required between source & destination', () => {
    let x1,y1,x2,y2;

    x1 = 4;
    x2 = 5;
    y1 = 1;
    y2 = 1;
    expect(minKnightMoves(x1, y1, x2, y2)).toBe(3);

    x1 = 0;
    x2 = 7;
    y1 = 7;
    y2 = 0;
    expect(minKnightMoves(x1, y1, x2, y2)).toBe(3);
  });
});
