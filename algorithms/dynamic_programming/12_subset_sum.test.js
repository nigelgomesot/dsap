import subsetSum from './12_subset_sum.js';

describe('subsetSum', () => {
  it('checks if subset of numbers equals to sum', () => {
    expect(subsetSum([3, 2, 7, 1], 6)).toBe(1);
    expect(subsetSum([3, 2, 7, 1], 14)).toBe(0);
  });
});

