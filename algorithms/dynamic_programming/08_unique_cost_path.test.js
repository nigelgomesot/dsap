import uniqueCostPath from './08_unique_cost_path.js'

describe('uniqueCostPath', () => {
  it('returns unique paths in a matrix with obstacles', () => {
    let matrix;

    matrix= [
      [-1]
    ];
    expect(uniqueCostPath(matrix)).toBe(-1);

    matrix = [
			[ 0, 0],
			[ 0, 0],
    ];
    expect(uniqueCostPath(matrix)).toBe(2);

    matrix = [
			[ 0,  0],
			[ 0, -1],
    ];
    expect(uniqueCostPath(matrix)).toBe(-1);

    matrix = [
			[ 0,  0, 0, 0],
			[ 0, -1, 0, 0],
      [-1,  0, 0, 0],
      [ 0,  0, 0, 0]
    ];
    expect(uniqueCostPath(matrix)).toBe(4);
  });
});
