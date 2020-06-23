import ThreeRowTiling from './03_3_row_tiling.js';

describe('ThreeRowTiling', () => {
  it('returns number of ways', () => {
    const threeRowTiling = new ThreeRowTiling();

    expect(threeRowTiling.build(0)).toBe(1);
    expect(threeRowTiling.build(1)).toBe(0);
    expect(threeRowTiling.build(2)).toBe(3);
    expect(threeRowTiling.build(8)).toBe(153);
    expect(threeRowTiling.build(12)).toBe(2131);
  });
});
