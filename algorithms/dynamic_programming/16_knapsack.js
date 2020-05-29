export function getMaxValue(weights, values, maxWeight) {
  const rowLength = values.length + 1;
  const colLength = maxWeight + 1;

  const matrix = new Array(rowLength).fill(null).map(() => Array(colLength));

  for (let row = 0; row < rowLength; row++) {
    matrix[row][0] = 0;
  }

  for (let col = 1; col < colLength; col++) {
    matrix[0][col] = 0;
  }

  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (weights[row - 1] > col) {
        matrix[row][col] = matrix[row - 1][col];
      } else {
        matrix[row][col] = Math.max(
          matrix[row - 1][col],
          values[row - 1] + matrix[row - 1][col - weights[row - 1]]
        )
      }
    }
  }

  console.log(matrix);

  return matrix[rowLength - 1][colLength - 1];
}