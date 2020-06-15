// REF: https://www.techiedelight.com/matrix-chain-multiplication/

export function minMCM(dimensions) {
  const dimLength = dimensions.length;

  const matrix = Array.from(Array(dimLength + 1), () => new Array(dimLength + 1));

  for (let i = 0; i <= dimLength; i++) {
    matrix[i][i] = 0;
  }

  for (let len = 2; len <= dimLength; len++) {
    for (let i = 0; i <= dimLength - len + 1; i++) {
      const j = i + len - 1;

      matrix[i][j] = 999999;

      for (let k = i; k < j; k++) {
        const cost = matrix[i][k] + matrix[k+1][j] + dimensions[i - 1] * dimensions[k] * dimensions[j];

        if (cost < matrix[i][j]) {
          matrix[i][j] = cost;
        }
      }
    }
  }

  console.log(matrix);

  return matrix[1][dimLength - 1];
}
