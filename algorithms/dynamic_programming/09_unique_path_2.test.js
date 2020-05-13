import uniquePath2 from './09_unique_path_2';

describe('uniquePath2', () => {
  it('returns unique paths with diagonal steps in a matrix with obstacles', () => {
    let matrix;

    matrix= [
      [-1]
    ];
    expect(uniquePath2(matrix)).toBe(-1);

    matrix = [
			[ 0, 0],
			[ 0, 0],
    ];
    expect(uniquePath2(matrix)).toBe(3);

    matrix = [
			[ 0,  0],
			[ 0, -1],
    ];
    expect(uniquePath2(matrix)).toBe(-1);

    matrix = [
			[ 0, 0, 0],
			[ 0, 0, 0],
    ];
    expect(uniquePath2(matrix)).toBe(5);

    matrix = [
			[ 0,  0, 0],
			[ 0, -1, 0],
    ];
    expect(uniquePath2(matrix)).toBe(2);

    matrix = [
			[ 0,  0, 0, 0],
			[ 0, -1, 0, 0],
      [-1,  0, 0, 0],
      [ 0,  0, 0, 0]
    ];
    expect(uniquePath2(matrix)).toBe(17);
  });
});
