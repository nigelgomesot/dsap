// REF: https://www.techiedelight.com/levenshtein-distance-edit-distance-problem/

export function editDistance(str1, str2) {
  const rowLength = str1.length + 1;
  const colLength =  str2.length + 1;

  const matrix = Array.from(Array(rowLength), () => new Array(colLength));

  for (let row = 0; row < rowLength; row++) {
    matrix[row][0] = row;
  }

  for (let col = 1; col < colLength; col++) {
    matrix[0][col] = col;
  }

  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      const replaceCost = (str1.charAt(row - 1) === str2.charAt(col - 1)) ? 0 : 1;

      matrix[row][col] = Math.min(
        matrix[row - 1][col] + 1,
        matrix[row][col - 1] + 1,
        matrix[row - 1][col - 1] + replaceCost
      );
    }
  }

  console.log(matrix);

  return matrix[rowLength - 1][colLength - 1];
}
