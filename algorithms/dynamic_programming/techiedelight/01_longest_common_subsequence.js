// REF: https://www.techiedelight.com/longest-common-subsequence/

export function lcsLength(str1, str2) {
  const rowLength = str1.length + 1;
  const colLength = str2.length + 1;

  const matrix = Array.from(Array(rowLength), () => new Array(colLength));

  for (let row = 0; row < rowLength; row++) {
    matrix[row][0] = 0;
  }

  for (let col = 0; col < colLength; col++) {
    matrix[0][col] = 0;
  }

  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
        matrix[row][col] = 1 + matrix[row - 1][col - 1]; 
      } else {
        matrix[row][col] = Math.max(
          matrix[row][col - 1],
          matrix[row - 1][col]
        )
      }
    }
  }

  console.log(matrix);

  return matrix[rowLength - 1][colLength - 1];
}
