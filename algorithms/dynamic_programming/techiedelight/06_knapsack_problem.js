// REF: https://www.techiedelight.com/0-1-knapsack-problem/

export function maxValue(values, weights, maxWeight) {
  const rowLength =  values.length;
  const colLength = maxWeight;

  const matrix = Array.from(Array(rowLength + 1), () => Array(colLength + 1));

  for (let row = 0; row <= rowLength; row++) {
    matrix[row][0] = 0;
  }

  for (let col = 0; col <= colLength; col++) {
    matrix[0][col] = 0;
  }

  for (let row = 1; row <= rowLength; row++) {
    for (let col = 1; col <= colLength; col++) {
      if ((col - weights[row - 1]) < 0) {
        matrix[row][col] = matrix[row - 1][col];
      } else {
        matrix[row][col] = Math.max(
          matrix[row - 1][col],
          matrix[row - 1][col - weights[row - 1]] + values[row - 1]
        );
      }
    }
  }

  console.log(matrix);

  return matrix[rowLength][colLength];
}
