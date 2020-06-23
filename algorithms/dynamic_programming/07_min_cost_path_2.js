export default function minCostPath2(maxRows, maxCols) {
  const matrix = new Array(maxRows).fill(0).map(() => Array(maxCols).fill(0));

  for (let row =  1; row < maxRows; row++) {
    matrix[row][0] = 1;
  }

  for (let col =  1; col < maxCols; col++) {
    matrix[0][col] = 1;
  }


  for (let row = 1; row < maxRows; row++) {
    for (let col = 1; col < maxCols; col++) {
      matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
    }
  }

  return matrix[maxRows - 1][maxCols - 1];
}
