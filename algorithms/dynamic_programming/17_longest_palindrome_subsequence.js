// REF: https://github.com/mission-peace/interview/blob/master/src/com/interview/dynamic/LongestPalindromicSubsequence.java

export function getLPSLength(str) {
  const strLength = str.length;
  const matrix = new Array(strLength).fill(null).map(() => Array(strLength));

  for (let i = 0; i < strLength; i++) {
    matrix[i][i] = 1;
  }

  for (let length = 2; length <= strLength; length++) {
    for (let row = 0; row < strLength - length + 1; row++) {

      const col = row + length - 1;

      if ((length === 2) && (str[row] === str[col])) {
        matrix[row][col] == 2;
      } else if (str[row] === str[col]) {
        matrix[row][col] = 2 + matrix[row + 1][col - 1];
      } else {
        matrix[row][col] =  Math.max(
          matrix[row][col - 1],
          matrix[row + 1][col]
        );
      }
    }
  }

  console.log(matrix);

  return matrix[0][strLength - 1];
}

export function getLPS(str) {
  const strLength = str.length;
  const matrix = new Array(strLength).fill(null).map(() => Array(strLength));

  for (let i = 0; i < strLength; i++) {
    matrix[i][i] = 1;
  }

  for (let length = 2; length <= strLength; length++) {
    for (let row = 0; row <= strLength - length; row++) {
      const col = row + length - 1;

      if ((str.charAt(row) === str.charAt(col)) && length === 2) {
        matrix[row][col] = 2;
      } else if (str.charAt(row) === str.charAt(col)) {
        matrix[row][col] = matrix[row + 1][col - 1] + 2;
      } else {
        matrix[row][col] = Math.max(
          matrix[row][col - 1],
          matrix[row + 1][col],
        );
      }
    }
  }

  console.log(matrix);
  const lps = []
  let row = 0
  let col = strLength - 1;
  while (row <= col) {
    if (str.charAt(row) === str.charAt(col)) {
      lps[row] = str.charAt(row);
      lps[col] = str.charAt(col);
      row++;
      col--;
    } else if (matrix[row][col - 1] > matrix[row + 1][col]) {
      col--;
    } else {
      row++;
    }
  }
  const result = lps.filter(String);
  console.log(result);

  return result;
}
