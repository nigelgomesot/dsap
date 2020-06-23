// REF: https://www.techiedelight.com/coin-change-making-problem-unlimited-supply-coins/

export function getMinCoins(coins, amount) {
  const maxValue = 9999;
  const arrayLength = amount;
  const array = new Array(arrayLength + 1).fill(maxValue);

  array[0] = 0;

  for (let i = 1; i <= arrayLength; i++) {
    let res = maxValue;

    coins.forEach(coin => {
      if (i - coin >= 0) {
        res = array[i - coin];
      }

      if (res !== maxValue) {
        array[i] = Math.min(
          array[i],
          res + 1
        );
      }
    });
  }

  console.log(array);

  return array[arrayLength] === maxValue ? 0 : array[arrayLength];
}
