import TwoRowTiling from './02_2_row_tiling.js';

describe('TwoTiling', () => {
  it('returns number of ways', () => {
    const twoRowTiling = new TwoRowTiling();

    expect(twoRowTiling.build(0)).toBe(0);
    expect(twoRowTiling.build(1)).toBe(1);
    expect(twoRowTiling.build(2)).toBe(2);
    expect(twoRowTiling.build(3)).toBe(3);
    expect(twoRowTiling.build(4)).toBe(5);
    expect(twoRowTiling.build(5)).toBe(8);
  });
});
