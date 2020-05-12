export default function uniqueCostPath(matrix) {

  const rowLength = matrix.length;
  const colLength = matrix[0].length;

    if (matrix[0][0] == -1) {
      return -1;
    }

  for (let row = 0; row < rowLength; row++) {
    if (matrix[row][0] != -1) {
      matrix[row][0] = 1;
    } else {
      break;
    }
  }

  for (let col = 0; col < colLength; col++) {
    if (matrix[0][col] != -1) {
      matrix[0][col] = 1;
    } else {
      break;
    }
  }

  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (matrix[row][col] != -1) {

        if (matrix[row - 1][col] != -1) {
          matrix[row][col] = matrix[row][col] + matrix[row - 1][col];
        }

        if (matrix[row][col - 1] != -1) {
          matrix[row][col] = matrix[row][col] + matrix[row][col - 1];
        }
      }
    }
  }

  if (matrix[rowLength - 1][colLength - 1] != -1) {
    return matrix[rowLength - 1][colLength - 1];
  } else {
    return -1;
  }
}