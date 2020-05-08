import maxSubArraySum from './05_max_sub_array_sum.js';

describe('maxSubArraySum', () => {
  it('returns maximum sub array sum', () => {
    expect(maxSubArraySum([0])).toBe(0);
    expect(maxSubArraySum([1, 2, 3, 4])).toBe(10);
    expect(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7);
  });
});
