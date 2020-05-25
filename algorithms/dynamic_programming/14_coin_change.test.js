import { getMinCount } from './14_coin_change.js';

describe('Coin Change', () => {
  it('returns minimum number of coins required to form a sum', () => {
    let coinArray;
    let sum;

    coinArray = [1,5,6,8];
    sum = 11;
    expect(getMinCount(coinArray, sum)).toBe(2);

    coinArray = [1,2,5,10,12,20,50];
    sum = 65;
    expect(getMinCount(coinArray, sum)).toBe(3);

    coinArray = [5,10,12,20,50];
    sum = 3;
    expect(getMinCount(coinArray, sum)).toBe(0);
  });
});
