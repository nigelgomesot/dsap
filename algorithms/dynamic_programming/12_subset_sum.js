export default function subsetSum(array, sum) {
  const arrayLength = array.length;
  const matrix = new Array(arrayLength + 1).fill(null).map(() => new Array(sum + 1));

  matrix[0][0] = 1;

  for (let row = 1; row < arrayLength + 1; row++) {
    matrix[row][0] = 1;
  }

  for (let col = 1; col < sum + 1; col++) {
    matrix[0][col] = 0;
  }

  for (let row = 1; row < arrayLength + 1; row++) {
    for (let col = 1; col < sum + 1; col++) {
      matrix[row][col] = matrix[row][col - 1];

      if (col < array[row - 1]) {
        matrix[row][col] = matrix[row - 1][col];
      } else {
        matrix[row][col] = matrix[row - 1][col] || matrix[row - 1][col - array[row - 1]];
      }
     }
  }

  console.log(matrix);
  return matrix[arrayLength][sum];
}
