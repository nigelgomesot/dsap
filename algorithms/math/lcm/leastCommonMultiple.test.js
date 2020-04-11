import leastCommonMultiple from './leastCommonMultiple.js';

describe('leastCommonMultiple', () => {

	it('computes lcm of 2 numbers', () => {
		expect(leastCommonMultiple(0, 0)).toBe(0);
		expect(leastCommonMultiple(1, 0)).toBe(0);
		expect(leastCommonMultiple(0, 1)).toBe(0);
		expect(leastCommonMultiple(4, 6)).toBe(12);
		expect(leastCommonMultiple(7, 3)).toBe(21);
	});
});
