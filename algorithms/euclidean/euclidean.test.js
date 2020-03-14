import * as Euclidean from './euclidean.js'

describe('Euclidean', () => {
	it('computes GCD', () => {
		expect(Euclidean.recursive(12, 4)).toBe(4);
		expect(Euclidean.recursive(12, 5)).toBe(1);
		expect(Euclidean.recursive(15, 5)).toBe(5);
		expect(Euclidean.recursive(15, 6)).toBe(3);
	});
});
