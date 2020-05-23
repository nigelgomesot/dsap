function buildMatrix(str1, str2) {
  const rowLength = str1.length;
  const colLength = str2.length;

  const matrix = new Array(rowLength + 1).fill(null).map(() => Array(colLength + 1));

  for (let row = 0; row <= rowLength; row++) {
    matrix[row][0] = 0;
  }

  for (let col = 0; col <= colLength; col++) {
    matrix[0][col] = 0;
  }

  for (let row = 1; row <= rowLength; row++) {
    for (let col = 1; col <= colLength; col++) {
      if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
        matrix[row][col] = matrix[row - 1][col - 1] + 1;
      } else {
        matrix[row][col] = Math.max(
          matrix[row - 1][col],
          matrix[row][col - 1]
        );
      }
    }
  }

  console.log(matrix);

  return matrix;
}

export function lcsCount(str1, str2) {
  const matrix = buildMatrix(str1, str2);

  return matrix[str1.length][str2.length];
}

export function lcsElements(str1, str2) {
  const matrix = buildMatrix(str1, str2);
  const rowLength = str1.length;
  const colLength = str2.length;
  let row = rowLength;
  let col = colLength;
  const elements = [];

  while (row > 0 && col > 0) {
    if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
      elements.push(str1.charAt(row - 1));
      row -= 1;
      col -= 1;
    } else {
      if (matrix[row - 1][col] > matrix[row][col - 1]) {
        row -= 1;
      } else {
        col -= 1;
      }
    }
  }

  return elements.reverse();
}
