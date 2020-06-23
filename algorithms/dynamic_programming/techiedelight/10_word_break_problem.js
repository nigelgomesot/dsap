// REF: https://www.techiedelight.com/word-break-problem/
// REF: https://github.com/mission-peace/interview/blob/94be5deb0c0df30ade2a569cf3056b7cc1e012f4/src/com/interview/dynamic/BreakMultipleWordsWithNoSpaceIntoSpace.java#L60

export function wordBreakExists(str, dictonary) {
  const strLength = str.length;
  const matrix = Array.from(Array(strLength), () => Array(strLength).fill(-1));

  for (let len = 1; len <= strLength; len++) {
    for (let i = 0; i <= strLength - len; i++) {
      const j = i + len - 1;
      const substr = str.substring(i, j + 1);

      if (dictonary.includes(substr)) {
        matrix[i][j] = i;
        continue;
      }

      for (let k = i + 1; k <= j; k++) {
        if ((matrix[i][k - 1] !== -1) && (matrix[k][j] !== -1)) {
          matrix[i][j] = k;
          break;
        }
      }
    }
  }

  console.log(matrix);

  return matrix[0][strLength - 1] === -1 ? false : true;
}
