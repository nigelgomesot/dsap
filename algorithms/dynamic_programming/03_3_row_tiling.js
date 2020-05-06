// REF: https://www.geeksforgeeks.org/tiling-with-dominoes

export default class ThreeRowTiling {
  build(tiles) {
    const completelyFilled = new Array(tiles+1);
    const partiallyFilled = new Array(tiles+1);

    completelyFilled[0] = 1;
    completelyFilled[1] = 0;
    partiallyFilled[0] = 0;
    partiallyFilled[1] = 1;

    for (let i = 2; i <= tiles; i++) {
      completelyFilled[i] = completelyFilled[i - 2] + (2 * partiallyFilled[i - 1]);
      partiallyFilled[i] = completelyFilled[i - 1] + partiallyFilled[i - 2];
    }

    return completelyFilled[tiles];
  }
}
