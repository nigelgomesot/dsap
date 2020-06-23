import minCostPath2 from './07_min_cost_path_2.js'

describe('minCostPath2', () => {
  it('returns minimum cost path for a (m * n) array', () => {
    expect(minCostPath2(2, 2)).toBe(2);
    expect(minCostPath2(3, 4)).toBe(10);
  });
});
