import { rodCut } from './08_rod_cutting.js';

describe('Rod Cutting', () => {
  it ('returns number of cuts required for maximum profit', () => {
    let prices;
    let rodLength;

    prices = [1, 5, 8, 9, 10, 17, 17, 20];
    rodLength = 4;
    expect(rodCut(prices, rodLength)).toBe(10);

    prices = [1, 5, 8, 9, 10, 17, 17, 20];
    rodLength = 8;
    expect(rodCut(prices, rodLength)).toBe(22);

  });
});
