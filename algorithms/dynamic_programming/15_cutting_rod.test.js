import { getMaxProfit } from './15_cutting_rod.js';

describe('Cutting Rod', () => {
  it('returns maximum profit', () => {
    let values;
    let rodLength;

    values = [0, 2, 5, 7, 8];
    rodLength = 5;
    expect(getMaxProfit(values, rodLength)).toBe(12);

    // values = [0, 1, 5, 8, 9, 10, 17, 17, 20];
    // length = 4;
    // expect(getMaxProfit(values, rodLength)).toBe(10);
  });
});
