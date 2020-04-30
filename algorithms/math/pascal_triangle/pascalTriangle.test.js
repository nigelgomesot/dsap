import * as PascalTriangle from './pascalTriangle.js'

describe('PascalTriangle', () => {
	it('returns nth row coe-effecients iteratively', () => {
		expect(PascalTriangle.iterative(0)).toEqual([1]);
		expect(PascalTriangle.iterative(1)).toEqual([1, 1]);
		expect(PascalTriangle.iterative(2)).toEqual([1, 2, 1]);
		expect(PascalTriangle.iterative(3)).toEqual([1, 3, 3, 1]);
		expect(PascalTriangle.iterative(4)).toEqual([1, 4, 6, 4, 1]);
	});

	it('returns nth row coe-effecients recursively', () => {
		expect(PascalTriangle.recursive(0)).toEqual([1]);
		expect(PascalTriangle.recursive(1)).toEqual([1, 1]);
		expect(PascalTriangle.recursive(2)).toEqual([1, 2, 1]);
		expect(PascalTriangle.recursive(3)).toEqual([1, 3, 3, 1]);
		expect(PascalTriangle.recursive(4)).toEqual([1, 4, 6, 4, 1]);
	});
});
