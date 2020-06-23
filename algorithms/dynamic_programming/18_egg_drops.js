// REF: https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/

export function minEggDrops(eggs, floors) {
  const rowLength = eggs + 1;
  const colLength = floors + 1;
  const minTrials = new Array(rowLength).fill(null).map(() => Array(colLength));

  for (let row = 0; row < rowLength; row++) {
    minTrials[row][0] = 0;
    minTrials[row][1] = 1;
  }

  for (let col = 1; col < colLength; col++) {
    minTrials[0][col] = 0;
    minTrials[1][col] = col;
  }

  for (let row = 2; row < rowLength; row++) {
    for (let col = 2; col < colLength; col++) {
      // INFO: set minTrials = max Trials for comparison on L#26
      minTrials[row][col] = colLength;
      for (let f = 1; f <= col; f++) {
        const minTrial = 1 + Math.max(
          minTrials[row - 1][f - 1],
          minTrials[row][col - f]
        );

        if (minTrial < minTrials[row][col]) {
          minTrials[row][col] =  minTrial;
        }
      }
    }
  }

  console.log(minTrials);

  return minTrials[rowLength - 1][colLength - 1];
}
