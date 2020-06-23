import { getMaxProfit } from './15_cutting_rod.js';

describe('Cutting Rod', () => {
  it('returns maximum profit', () => {
    let values;
    let rodLength;

    values = [2,5,7,8];
    rodLength = 5;
    expect(getMaxProfit(values, rodLength)).toBe(12);

    values = [2,5,9,6];
    rodLength = 5;
    expect(getMaxProfit(values, rodLength)).toBe(14);

    values = [1,5,8,9,10,17,17,20];
    rodLength = 4;
    expect(getMaxProfit(values, rodLength)).toBe(10);
  });
});
