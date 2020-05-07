export default class CoinChange {
  compute(total, coinList) {
    let coinTotals = new Array(total + 1).fill(0);

    coinTotals[0] = 1;

    for (let i = 1; i <= total; i++) {
      coinList.forEach(coin => {
        if (i - coin >= 0) {
          coinTotals[i] += coinTotals[i - coin];
        }
      });
    }

    return coinTotals[total];
  }
}
