import { lisLength } from './03_longest_increasing_subsequence.js';

describe('Longest Increasing Subsequence', () => {
  it('returns length of LIS', () => {
    let array;

    array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    expect(lisLength(array)).toBe(1);

    array = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
    expect(lisLength(array)).toBe(6);
  })
});
