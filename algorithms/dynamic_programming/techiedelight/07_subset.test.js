import { isPartitionEqualSum } from './07_subset.js';

describe('Subset', () => {
  it ('checks if partition with equal sum exists', () => {
    let array;

    array = [7, 3, 1, 5, 4, 8];
    expect(isPartitionEqualSum(array)).toBe(true);

    array = [7, 3, 1, 5, 4, 9];
    expect(isPartitionEqualSum(array)).toBe(false);
  });
});
