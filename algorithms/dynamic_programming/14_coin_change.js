export function getMinCount(coinArray, sum) {
  const rowLength = coinArray.length + 1;
  const colLength = sum + 1;

  const matrix = new Array(rowLength).fill(null).map(() => Array(colLength));

  if (sum < Math.min(...coinArray)) {
    return 0;
  }

  for (let row = 0; row < rowLength; row++) {
    matrix[row][0] = 0;
  }

  for (let col = 1; col < colLength; col++) {
    matrix[0][col] = col;
  }

  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (col < coinArray[row - 1]) {
        matrix[row][col] = matrix[row - 1][col];
      } else {
        matrix[row][col] = Math.min(
          matrix[row - 1][col],
          matrix[row][col - coinArray[row - 1]] + 1
        );
      }
    }
  }

  console.log(matrix);

  return matrix[rowLength - 1][colLength - 1];
}
