import { minMCM } from './05_matrix_chain_multiplication.js';

describe('Matrix Chain Multiplication', () => {
  it ('returns minimum operations required', () => {
    let dimensions;

    dimensions = [10];
    expect(minMCM(dimensions)).toBe(0);

    dimensions = [10, 30, 5, 60];
    expect(minMCM(dimensions)).toBe(4500);

    dimensions = [2, 3, 6, 4, 5];
    expect(minMCM(dimensions)).toBe(124);
  });
});
