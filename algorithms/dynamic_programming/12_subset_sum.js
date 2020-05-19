export function subsetSum(array, sum) {
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

  return matrix[arrayLength][sum];
}

export function subsetSumPath(array, sum) {
  const arrayLength = array.length;
  const booleanMatrix = new Array(arrayLength + 1).fill(null).map(() => Array(sum + 1).fill(null));
  const result = [];

  for (let row = 0; row <= array.length; row++) {
    booleanMatrix[row][0] = true;
  }

  for (let col = 1; col <= sum; col++) {
    booleanMatrix[0][col] = false;
  }

  for (let row = 1; row <= array.length; row++) {
    for (let col = 1; col <= sum; col++) {
      // exclude current element
      booleanMatrix[row][col] = booleanMatrix[row - 1][col];

      // include current element
      booleanMatrix[row][col] = booleanMatrix[row][col] || booleanMatrix[row - 1][col - array[row - 1]];
    }
  }

  console.log(booleanMatrix);
  // if (booleanMatrix[arrayLength][sum]) {
  //   let row = arrayLength;
  //   let col = sum + 1;
  //   result.push(array[row - 1]);

  //   while (true) {
  //     break;
  //   }
  // }

  return result;
}
