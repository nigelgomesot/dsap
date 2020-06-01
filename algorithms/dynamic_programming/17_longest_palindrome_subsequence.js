// REF: https://github.com/mission-peace/interview/blob/master/src/com/interview/dynamic/LongestPalindromicSubsequence.java

export function getLPSLength(str) {
  const strLength = str.length;
  const matrix = new Array(strLength + 1).fill(null).map(() => Array(strLength + 1));

  // PENDING:
  console.log(matrix);
}
