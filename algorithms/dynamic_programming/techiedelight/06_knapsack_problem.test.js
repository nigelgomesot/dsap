import { maxValue } from './06_knapsack_problem.js';

describe('KnapSack Problem', () => {
  it ('returns maximum value for specified weight', () => {
    let values;
    let weights;
    let maxWeight;

    values = [20, 5, 10, 40, 15, 25];
    weights = [1, 2,  3,  8,  7, 4];
    maxWeight = 10;
    expect(maxValue(values, weights, maxWeight)).toBe(60);

    values = [1, 4, 5, 7];
    weights = [1, 3, 4, 7];
    maxWeight = 7;
    expect(maxValue(values, weights, maxWeight)).toBe(9);
  });
});
