// REF: https://www.techiedelight.com/rot-cutting/

export function rodCut(prices, rodLength) {
  const profit = new Array(rodLength + 1).fill(0);

  for (let i = 1; i <= rodLength; i++) {
    for (let j = 1; j <= i; j++) {
      profit[i] = Math.max(
        profit[i],
        prices[j - 1] + profit[i - j]
      );
    }
  }

  console.log(profit);

  return profit[rodLength];
}
