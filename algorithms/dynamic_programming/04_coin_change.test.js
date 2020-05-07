import CoinChange from './04_coin_change.js'

describe('CoinChange', () => {
  it('computes number of ways', () => {
    const coinChange = new CoinChange();

    expect(coinChange.compute(4, [1, 2, 3])).toBe(7);
    expect(coinChange.compute(13, [3, 5, 10])).toBe(5);
  })
});
