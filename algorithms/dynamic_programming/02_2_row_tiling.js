export default class TwoRowTiling {
  constructor() {}

  build(tiles) {
    if (tiles === 0) return 0;
    if (tiles === 1) return 1;
    if (tiles === 2) return 2;

    let lastCount = 2;
    let secondLastCount = 1;
    let totalCount
    for (let i = 3; i <= tiles; i++) {
      totalCount = lastCount + secondLastCount;
      secondLastCount = lastCount;
      lastCount = totalCount;
    }

    return totalCount;
  }
}
