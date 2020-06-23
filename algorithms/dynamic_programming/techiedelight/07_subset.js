// REF: https://www.techiedelight.com/partition-problem/
export function isPartitionEqualSum(array) {
  const sum =  array.reduce((total, num) => total + num, 0);

  if (sum%2 !== 0) {
    return false;
  }

  const rowLength = array.length;
  const colLength = sum/2;

  const matrix = Array.from(Array(rowLength + 1), () => Array(colLength + 1));

  for (let row = 0; row <= rowLength; row++) {
    matrix[row][0] = true;
  }

  for (let col = 0; col <= colLength; col++) {
    matrix[0][col] = false;
  }

  for (let row = 1; row <= rowLength; row++) {
    for (let col = 1; col <= colLength; col++) {
      if ((col -  array[row - 1]) < 0) {
        matrix[row][col] = matrix[row - 1][col];
      } else {
        matrix[row][col] = matrix[row - 1][col] || matrix[row - 1][col - array[row - 1]];
      }
    }
  }

  console.log(matrix);

  return matrix[rowLength][colLength];
}
