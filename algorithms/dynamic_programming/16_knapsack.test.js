import { getMaxValue } from './16_knapsack.js';

describe('KnapSack', () => {
  it ('retruns max value', () => {
    let weights;
    let values;
    let maxWeight;

    weights = [2,3,4,5];
    values = [3,4,5,6];
    maxWeight = 5;
    expect(getMaxValue(weights, values, maxWeight)).toBe(7);

    weights = [1,2,3,4,5];
    values = [1,4,4,5,7];
    maxWeight = 9;
    expect(getMaxValue(weights, values, maxWeight)).toBe(13);
  });
});
