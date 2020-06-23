import { subsetSum, subsetSumPath } from './12_subset_sum.js';

describe('subsetSum', () => {
  it('checks if subset of numbers equals to sum', () => {
    expect(subsetSum([3, 2, 7, 1], 6)).toBe(1);
    expect(subsetSum([3, 2, 7, 1], 14)).toBe(0);
  });
});

describe('subsetSumPath', () => {
  it('returns subset of numbers equals to sum', () => {
    expect(subsetSumPath([1, 2, 3, 7], 6)).toBe([1,2,3]);
    expect(subsetSumPath([1, 2, 3, 7], 14)).toBe([]);
  });
});
