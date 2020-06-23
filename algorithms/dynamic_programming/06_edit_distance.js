export default function editDistance(str1, str2) {
  const matrix = new Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));

  for (let row = 0; row < str1.length + 1; row++) {
    matrix[row][0] = row;
  }

  for (let col = 0; col < str2.length + 1; col++) {
    matrix[0][col] = col;
  }

  for (let row = 1; row < str1.length + 1; row++) {
    for (let col = 1; col < str2.length + 1; col++) {
      if (str1[row - 1] === str2[col - 1]) {
        matrix[row][col] = matrix[row - 1][col - 1];
      } else {
        const previousInsertCount = matrix[row][col - 1];
        const previousDeleteCount = matrix[row - 1][col];
        const previousReplaceCount = matrix[row - 1][col - 1];

        matrix[row][col] = 1 + Math.min(
          previousInsertCount,
          previousDeleteCount,
          previousReplaceCount
        );
      }
    }
  }

  return matrix[str1.length][str2.length];
}
