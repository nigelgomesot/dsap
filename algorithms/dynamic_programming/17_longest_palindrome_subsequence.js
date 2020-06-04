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

function getLPS(str) {
  const strLength = str.length;
  const lps = new Array(strLength);
  const matrix = new Array(strLength).fill(null).map(() => Array(strLength));

  for (let i = 0; i < strLength; i++) {
    matrix[i][i] = 1;
  }

  lps[0] = 'a';

  for (let length = 2; length < strLength; length++) {
    // PENDING
  }
}
