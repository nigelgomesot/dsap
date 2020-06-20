import { getMinCoins } from './09_coin_change.js';

describe('Coin Change', () => {
  it ('returns minimum number of coins required for amount', () => {
    let coins;
    let amount;

    coins = [1, 3, 5, 7];
    amount = 15;
    expect(getMinCoins(coins, amount)).toBe(3);

    coins = [1, 3, 5, 7];
    amount = 18;
    expect(getMinCoins(coins, amount)).toBe(4);

    coins = [3, 5, 7];
    amount = 1;
    expect(getMinCoins(coins, amount)).toBe(0);
  });
});
